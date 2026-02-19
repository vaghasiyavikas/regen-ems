"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import { useCartStore } from "../store/cartStore";
import { useAuthStore } from "../store/authStore";
import { authAPI, getCookie } from "../lib/api";
import AuthModal from "./AuthModal";

const suggestedProducts = [
  {
    id: "recovery-pads",
    name: "Regen Recovery Pads X 2",
    price: 20,
    image: "/images/regen-ems-pads.webp",
  },
  {
    id: "regen-ems",
    name: "Regen EMS",
    price: 150,
    image: "/images/regen-ems-product.webp",
  },
];

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, addItem, getTotalPrice, getTotalItems } = useCartStore();
  const { isAuthenticated, user, setAuth } = useAuthStore();
  const productsNotInCart = suggestedProducts.filter(product => !items.some(item => item.id === product.id));
  const [showNote, setShowNote] = useState(false);
  const [note, setNote] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "address">("cart");
  const [newAddress, setNewAddress] = useState<{ address: string; postalcode: string }>({ address: "", postalcode: "" });
  const [saveAddress, setSaveAddress] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shippingAddress, setShippingAddress] = useState<{ address: string; postalcode: string } | null>(null);

  const hasExistingAddress = user?.address && user?.postalcode;
  const [useExistingAddress, setUseExistingAddress] = useState(!!hasExistingAddress);


  useEffect(() => {
    if(shippingAddress?.address && shippingAddress.postalcode) {
      setUseExistingAddress(user?.address === shippingAddress?.address && user?.postalcode === shippingAddress?.postalcode)
    }
  }, [checkoutStep, user, shippingAddress]);
  const handleCheckout = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    setCheckoutStep("address");
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    setCheckoutStep("address");
  };

  const handleProceedWithAddress = async () => {
    const finalAddress = useExistingAddress && hasExistingAddress
      ? { address: user.address || "", postalcode: user.postalcode || "" }
      : newAddress;

    if (!finalAddress.address || !finalAddress.postalcode) {
      return;
    }

    setShippingAddress(finalAddress);

    if (saveAddress && user?._id) {
      setLoading(true);
      try {
        const token = getCookie("auth_token");
        if (token) {
          await authAPI.updatePatientAddress(user._id, finalAddress.address, finalAddress.postalcode, token);
          const updatedUser = await authAPI.getUser(token);
          setAuth(token, updatedUser);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    setCheckoutStep("cart");
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-[#bd42f4]/30 z-50 transition-opacity duration-300" 
        onClick={closeCart}
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      ></div>
      <div 
        className="fixed right-0 top-0 h-full w-full md:w-[800px] bg-black z-50 flex flex-col"
        style={{ animation: 'slideInRight 0.3s ease-out' }}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">CART</h2>
          <button onClick={closeCart} className="text-white hover:text-[#bd42f4] transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className={`flex flex-col min-h-full ${productsNotInCart.length > 0 ? 'md:grid md:grid-cols-2' : ''}`}>
            {productsNotInCart.length > 0 && (
              <div className="bg-[#1a1a1a] p-6 md:border-r border-b md:border-b-0 border-gray-800">
                <h3 className="text-white text-xl font-bold mb-6">YOU MAY ALSO LIKE</h3>
                <div className="space-y-6">
                  {productsNotInCart.map((product) => (
                    <div key={product.id} className="space-y-4">
                      <div className="relative h-48 bg-black rounded-lg overflow-hidden">
                        <Image src={product.image} alt={product.name} fill className="object-contain p-4" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">REGEN PHD</p>
                        <h4 className="text-white font-medium mb-2">{product.name}</h4>
                        <p className="text-white text-xl font-bold mb-4">£ {product.price}<span className="text-sm">.00</span></p>
                        <button 
                          onClick={() => addItem(product)}
                          className="w-full bg-transparent border border-white text-white py-3 rounded hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
                        >
                          ADD TO CART
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col min-h-full">
              <div className="flex-1 p-6 overflow-y-auto">
                {items.length === 0 ? (
                  <div className="text-center text-gray-400 mt-20">
                    <p className="text-xl">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map((item, index) => (
                      <div key={item.id} className={`flex gap-4 pb-6 ${index !== items.length - 1 ? 'border-b border-gray-800' : ''}`}>
                        <div className="relative w-24 h-24 bg-[#1a1a1a] rounded flex-shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-2">{item.name}</h4>
                          <div className="flex items-center gap-3 mb-2">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-[#1a1a1a] text-white rounded hover:bg-[#bd42f4] transition flex items-center justify-center"
                            >
                              −
                            </button>
                            <span className="text-white w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-[#1a1a1a] text-white rounded hover:bg-[#bd42f4] transition flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="text-right flex flex-col justify-between">
                          <p className="text-white font-bold">£ {item.price * item.quantity}<span className="text-sm">.00</span></p>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t border-gray-800 p-6 space-y-4">
                  {shippingAddress && (
                    <div className="bg-[#1a1a1a] p-4 rounded border border-gray-700">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-white font-medium">Shipping Address:</p>
                        <button 
                          onClick={() => setCheckoutStep("address")}
                          className="text-[#bd42f4] hover:text-white text-sm"
                        >
                          Change
                        </button>
                      </div>
                      <p className="text-gray-300 text-sm">{shippingAddress.address}</p>
                      <p className="text-gray-300 text-sm">{shippingAddress.postalcode}</p>
                    </div>
                  )}
                  {showNote ? (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-white font-medium">Order Instructions</label>
                        <button onClick={() => setShowNote(false)} className="text-gray-400 hover:text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <textarea 
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Add special instructions for your order..."
                        className="w-full bg-[#1a1a1a] text-white p-3 rounded border border-gray-700 focus:border-[#bd42f4] outline-none min-h-[100px]"
                      />
                    </div>
                  ) : note ? (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-white font-medium text-sm">Order Instructions</label>
                        <button onClick={() => setShowNote(true)} className="text-[#bd42f4] hover:text-white text-sm">
                          Edit
                        </button>
                      </div>
                      <div className="bg-[#1a1a1a] text-gray-300 p-3 rounded border border-gray-700">
                        {note}
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => setShowNote(true)}
                      className="w-full bg-transparent border border-gray-600 text-white py-3 rounded hover:border-white transition flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                      ADD NOTE
                    </button>
                  )}
                  <p className="text-gray-400 text-sm text-center">Taxes included. Discounts and shipping calculated at checkout.</p>
                  <button 
                    onClick={handleCheckout}
                    className="w-full bg-[#bd42f4] text-white py-4 rounded font-bold text-lg hover:bg-[#a535d9] transition"
                  >
                    CHECK OUT — £{getTotalPrice()}.00 GBP
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {checkoutStep === "address" && (
        <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4">
          <div className="bg-black border border-gray-800 rounded-lg w-full max-w-md p-6">
            <h3 className="text-2xl font-bold text-white mb-4">SHIPPING ADDRESS</h3>
            
            {hasExistingAddress ? (
              <div className="space-y-4">
                <div className="bg-[#1a1a1a] p-4 rounded border border-gray-700">
                  <p className="text-white font-medium mb-1">Current Address:</p>
                  <p className="text-gray-300 text-sm">{user.address}</p>
                  <p className="text-gray-300 text-sm">{user.postalcode}</p>
                </div>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      checked={useExistingAddress}
                      onChange={() => setUseExistingAddress(true)}
                      className="w-4 h-4 accent-[#bd42f4]"
                    />
                    <span className="text-white">Use this address</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      checked={!useExistingAddress}
                      onChange={() => setUseExistingAddress(false)}
                      className="w-4 h-4 accent-[#bd42f4]"
                    />
                    <span className="text-white">Use different address</span>
                  </label>
                </div>
              </div>
            ) : (
              <p className="text-gray-400 text-sm mb-4">Please enter your shipping address</p>
            )}

            {(!hasExistingAddress || !useExistingAddress) && (
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Address</label>
                  <textarea
                    value={newAddress.address}
                    onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                    className="w-full bg-[#1a1a1a] text-white p-3 rounded border border-gray-700 focus:border-[#bd42f4] outline-none min-h-[80px]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Postal Code</label>
                  <input
                    type="text"
                    value={newAddress.postalcode}
                    onChange={(e) => setNewAddress({ ...newAddress, postalcode: e.target.value })}
                    className="w-full bg-[#1a1a1a] text-white p-3 rounded border border-gray-700 focus:border-[#bd42f4] outline-none"
                    required
                  />
                </div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={saveAddress}
                    onChange={(e) => setSaveAddress(e.target.checked)}
                    className="w-4 h-4 accent-[#bd42f4]"
                  />
                  <span className="text-white text-sm">Save as primary address</span>
                </label>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setCheckoutStep("cart")}
                className="flex-1 bg-transparent border border-gray-600 text-white py-3 rounded font-bold hover:border-white transition"
              >
                BACK
              </button>
              <button
                onClick={handleProceedWithAddress}
                disabled={loading}
                className="flex-1 bg-[#bd42f4] text-white py-3 rounded font-bold hover:bg-[#a835d9] transition disabled:opacity-50"
              >
                {loading ? "SAVING..." : "PROCEED"}
              </button>
            </div>
          </div>
        </div>
      )}

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} onSuccess={handleAuthSuccess} />
    </>
  );
}