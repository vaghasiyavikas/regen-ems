import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProductShowcase from "@/app/components/ProductShowcase";

export default function RegenEMSProduct() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-16">
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
}
