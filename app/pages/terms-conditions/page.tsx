import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function TermsConditions() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '80px' }} className="bg-black text-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-16">
          <h1 className="text-5xl font-bold mb-8">Terms &amp; Conditions</h1>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Important Notice</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              As we can accept your order and form a legally binding agreement without further reference to you, please read these Terms and Conditions carefully before placing your order. Ensure that they include all that you wish and nothing that you do not agree with.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Application</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              These Terms and Conditions apply to the purchase of goods by you (the Customer or you).
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We are Regen PhD Ltd, located at M S K House, London Road, Silk Willoughby, Sleaford, England, NG34 8NY (the Supplier, us or we).
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              These are the terms on which we sell all Goods to you. By ordering any of our products (the Goods), you agree to be bound by these Terms and Conditions. You may only purchase Goods from our website if you are legally capable of entering into a binding contract and are at least 18 years old.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">2. Interpretation</h2>
            <ul className="space-y-3 text-lg text-gray-300">
              <li><strong>Consumer</strong> means an individual acting wholly or mainly outside their trade, business, craft or profession.</li>
              <li><strong>Contract</strong> means the legally binding agreement between you and us for the supply of the Goods.</li>
              <li><strong>Delivery Location</strong> means the address specified in your Order for delivery.</li>
              <li><strong>Durable Medium</strong> means any medium (such as paper or email) that enables information to be retained and reproduced unchanged for future reference.</li>
              <li><strong>Goods</strong> means the Regen EMS Recovery Device or any related accessories supplied by us as described on our website or in our marketing materials.</li>
              <li><strong>Order</strong> means your order for the Goods, submitted through our online ordering process.</li>
              <li><strong>Privacy Policy</strong> means our policy outlining how we handle personal information.</li>
              <li><strong>Website</strong> means our official online store or any authorised platform advertising our products.</li>
            </ul>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">3. Goods</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              The description of the Goods is as set out on our website, social media pages, or other promotional materials. Images are for illustrative purposes only, and there may be minor variations in colour or finish.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              For any Goods made or adapted to your specific requirements, you are responsible for ensuring all information provided is accurate.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              All Goods are subject to availability.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We may make changes to the Goods where necessary to comply with legal, safety or technical standards, and will notify you if these changes materially affect your order.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">4. Personal Information</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We collect and process all personal data in accordance with our Privacy Policy and applicable data protection laws.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              By placing an order, you agree that we may contact you via email, post, or other electronic means to process your order or provide updates.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">5. Basis of Sale</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Product listings on our website or social media platforms do not constitute a contractual offer.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Orders are subject to acceptance. A Contract is formed only once you receive an Order Confirmation email from us.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Please review your Order Confirmation carefully and notify us immediately of any inaccuracies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We reserve the right to reject or cancel any order prior to dispatch if there are errors in pricing, availability, or other legitimate reasons.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Any variation to these Terms must be agreed in writing between you and us.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">6. Price and Payment</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              The price of the Goods and any applicable delivery or other charges will be as displayed on the Website at the time of your Order.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              All prices include VAT (where applicable).
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Payment must be made at the time of ordering. We accept major credit and debit cards through our secure payment portal.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Orders will not be processed or dispatched until full payment has been received.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">7. Delivery</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We will deliver the Goods to the Delivery Location stated in your Order.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Delivery will take place within the time period specified during checkout or, failing any specific agreement, within 30 days of the Contract being formed.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We currently deliver to addresses within the UK and Ireland. International orders may incur additional duties or taxes, which are the responsibility of the buyer.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              You will become responsible for the Goods upon delivery. Please inspect them promptly and report any issues within 48 hours.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              If you fail to accept delivery for reasons outside our control, we may charge reasonable storage or redelivery fees.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Returns must be sent at the buyer's expense unless otherwise stated in our Returns Policy.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">8. Risk and Title</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Risk of loss or damage passes to you upon delivery.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Ownership of the Goods transfers only once full payment has been received.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              If payment is not made in full, we reserve the right to recover the Goods or seek reimbursement for their value.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">9. Withdrawal and Cancellation</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              You may withdraw your order before the Contract is formed without liability.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              After receiving your Order Confirmation, you may cancel your order prior to dispatch, or within 30 days of receiving the Goods, in line with our Returns Policy.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              To cancel, you must inform us clearly in writing (email or post). You may use the model cancellation form available on our website, but it is not mandatory.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">Returns must be sent to:</p>
            <div className="text-lg text-gray-300 leading-relaxed mb-4 pl-4">
              <p>Regen PhD Ltd</p>
              <p>M S K House</p>
              <p>London Road</p>
              <p>Silk Willoughby</p>
              <p>Sleaford</p>
              <p>England</p>
              <p>NG34 8NY</p>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Returned items must be in their original, unused condition and packaging. You are responsible for return postage costs unless the Goods are faulty.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">10. Refunds</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Refunds will be issued within 14 days of receiving the returned Goods, provided they meet our return criteria.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We may deduct an amount if the Goods show signs of use beyond what is necessary to inspect their nature and functionality.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Refunds will be processed using the same payment method used for purchase.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">11. Conformity and Guarantee</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We are legally required to supply Goods that conform to your contract.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">Upon delivery, the Goods will:</p>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 mb-4">
              <li>Be of satisfactory quality.</li>
              <li>Match their description and intended use.</li>
              <li>Be fit for any particular purpose you made known to us and which we accepted.</li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Our products include a 30-day manufacturer's warranty covering defects in materials or workmanship. This warranty does not affect your statutory rights.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              After-sales support is available via our Customer Care Team from Monday–Saturday, 9am–7pm. We aim to respond to all enquiries within 24 hours.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">12. Privacy and Data Protection</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We are committed to protecting your privacy.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              As a Data Controller, we comply with the UK GDPR and Data Protection Act 2018.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              For any data-related enquiries, please contact: <a href="mailto:support@regenphd.com" className="hover:text-[#bd42f4] transition">support@regenphd.com</a>
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">13. Liability</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Nothing in these Terms limits or excludes our liability for death or personal injury caused by negligence, or for fraud or any other liability which cannot be excluded by law.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">Subject to the above, we are not liable for:</p>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 mb-4">
              <li>Any loss not reasonably foreseeable at the time of Contract formation.</li>
              <li>Any business-related loss, such as loss of profit or revenue.</li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed">
              The Regen EMS Recovery Device is designed for wellness and recovery support and is not intended to diagnose, treat or cure medical conditions. Always consult a healthcare professional before starting any new recovery or therapeutic routine.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12">
            <h2 className="text-3xl font-bold mb-4">14. Governing Law and Jurisdiction</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              These Terms are governed by the laws of England and Wales.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We aim to resolve all issues promptly and fairly. If you have a complaint, please contact us via our website or by emailing <a href="mailto:support@regenphd.com" className="hover:text-[#bd42f4] transition">support@regenphd.com</a>, and we will respond within 48 hours.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
