import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '80px' }} className="bg-black text-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-16">
          <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-4 mb-12 text-lg text-gray-300">
            <p><strong>Effective Date:</strong> October 2025</p>
            <p><strong>Company:</strong> Regen PhD Ltd</p>
            <p><strong>Address:</strong> M S K House, London Road, Silk Willoughby, Sleaford, England, NG34 8NY</p>
            <p><strong>Email:</strong> <a href="mailto:support@regenphd.com" className="hover:text-[#bd42f4] transition">support@regenphd.com</a></p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Regen PhD Ltd ("we", "us", "our") is committed to protecting your privacy and ensuring that your personal data is handled safely, securely, and transparently.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              This Privacy Policy explains how we collect, use, and protect your personal information when you interact with us — including when you visit our website, purchase products, or contact our support team.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We comply fully with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and all other relevant privacy laws.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              By using our website or purchasing our products, you agree to the terms of this Privacy Policy.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">2. Who We Are</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We are Regen PhD Ltd, a UK-registered company specialising in innovative muscle recovery and wellness technologies, including the Regen EMS Recovery Device.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">Registered address:</p>
            <div className="text-lg text-gray-300 leading-relaxed mb-4 pl-4">
              <p>M S K House, London Road, Silk Willoughby, Sleaford, England, NG34 8NY</p>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Email: <a href="mailto:support@regenphd.com" className="hover:text-[#bd42f4] transition">support@regenphd.com</a>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              For data protection purposes, Regen PhD Ltd is the Data Controller of your personal data.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">3. What Information We Collect</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We may collect, use and store the following types of personal information:
            </p>
            
            <h3 className="text-2xl font-bold mb-3 mt-6">a) Information you provide to us directly</h3>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 mb-6">
              <li>Name and contact details (e.g. email, phone number, billing and delivery address)</li>
              <li>Payment information (processed securely via our payment partners — we do not store full card details)</li>
              <li>Order history and communication records</li>
              <li>Any information submitted via our contact forms, email, or social media channels</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3">b) Information collected automatically</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">When you use our website, we may collect:</p>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 mb-6">
              <li>IP address and browser type</li>
              <li>Device information (e.g. mobile, tablet, desktop)</li>
              <li>Usage data such as pages visited, time spent on site, and referring links</li>
              <li>Cookie and tracking information (see Section 8 for details)</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3">c) Information from third parties</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">We may receive information about you from:</p>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
              <li>Payment service providers (for transaction confirmation)</li>
              <li>Delivery couriers (for shipping updates)</li>
              <li>Advertising and analytics partners (e.g. Google, Meta) — for performance and marketing insights</li>
            </ul>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">4. How We Use Your Information</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">We use your personal data to:</p>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 mb-4">
              <li>Process and deliver your orders</li>
              <li>Manage payments and refunds</li>
              <li>Provide customer support and after-sales service</li>
              <li>Send order confirmations, updates and receipts</li>
              <li>Improve our website, services and user experience</li>
              <li>Send marketing communications (only where you have opted in)</li>
              <li>Comply with our legal obligations (e.g. tax, accounting, fraud prevention)</li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed">
              We will never sell or rent your personal information to third parties.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">5. Legal Basis for Processing</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We process your personal data under one or more of the following legal bases:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
              <li><strong>Contractual necessity</strong> – to fulfil your order or provide a service you have requested.</li>
              <li><strong>Consent</strong> – when you have given us permission (e.g. for marketing emails).</li>
              <li><strong>Legal obligation</strong> – where processing is necessary for compliance with legal requirements.</li>
              <li><strong>Legitimate interest</strong> – for improving customer experience, website performance, and product development, where this does not override your rights.</li>
            </ul>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">6. How We Store and Protect Your Data</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Your personal information is stored securely on password-protected systems and encrypted servers within the UK or EEA.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">We implement industry-standard safeguards including:</p>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 mb-4">
              <li>SSL encryption on our website</li>
              <li>Restricted staff access to personal data</li>
              <li>Secure payment gateways for transactions</li>
              <li>Regular audits of data handling procedures</li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed">
              We retain your information only for as long as necessary to fulfil the purposes described in this policy, or as required by law (e.g. financial records for tax purposes).
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">7. Sharing Your Information</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We only share your personal data when necessary to provide our services, for example:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 mb-4">
              <li>Payment processors (e.g. Stripe, PayPal) to process transactions securely</li>
              <li>Delivery and logistics partners for shipping your order</li>
              <li>Email and customer service platforms to manage communication efficiently</li>
              <li>Analytics and marketing services (e.g. Google Analytics, Meta Ads) to improve our services</li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed">
              All third-party service providers are carefully selected and contractually required to keep your data secure and process it only for authorised purposes.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">8. Cookies and Tracking</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Our website uses cookies to enhance your experience, remember your preferences, and analyse site performance.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              You can manage or disable cookies at any time through your browser settings. However, disabling essential cookies may affect site functionality.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              For more detailed information, please see our Cookie Policy.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">9. Your Data Protection Rights</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Under UK GDPR, you have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 mb-4">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
              <li><strong>Erasure:</strong> Request deletion of your data where there is no legal basis for retention.</li>
              <li><strong>Restriction:</strong> Request to limit how we process your information.</li>
              <li><strong>Data portability:</strong> Request that your data be transferred to another provider.</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests or direct marketing.</li>
              <li><strong>Withdraw consent:</strong> Withdraw consent at any time (e.g. unsubscribe from marketing).</li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              To exercise any of these rights, please email <a href="mailto:support@regenphd.com" className="hover:text-[#bd42f4] transition">support@regenphd.com</a>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We will respond to your request within one month as required by law.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">10. Marketing Communications</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We may send you occasional updates, offers, or educational content related to recovery and wellness — but only if you have given explicit consent.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              You can opt out of marketing emails at any time by clicking the "unsubscribe" link in our emails or contacting <a href="mailto:support@regenphd.com" className="hover:text-[#bd42f4] transition">support@regenphd.com</a>.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">11. International Data Transfers</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Where necessary, data may be processed or stored outside the UK or EEA (e.g. by trusted service providers).
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              In such cases, we ensure that appropriate safeguards are in place, such as UK-approved Standard Contractual Clauses (SCCs) or equivalent legal protection.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">12. Children's Privacy</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Our website and products are not intended for children under the age of 18.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We do not knowingly collect personal data from anyone under 18. If we become aware that such data has been collected, we will delete it promptly.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">13. Changes to This Policy</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We may update this Privacy Policy periodically to reflect changes in our business, legal obligations or data protection standards.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              The most recent version will always be available on our website, with the effective date clearly stated.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12 mb-12">
            <h2 className="text-3xl font-bold mb-4">14. Contact Us</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              If you have any questions, concerns, or requests relating to this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="text-lg text-gray-300 leading-relaxed mb-4">
              <p><strong>Regen PhD Ltd</strong></p>
              <p>📍 M S K House, London Road, Silk Willoughby, Sleaford, England, NG34 8NY</p>
              <p>📧 <a href="mailto:support@regenphd.com" className="hover:text-[#bd42f4] transition">support@regenphd.com</a></p>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              If you are dissatisfied with our response, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="hover:text-[#bd42f4] transition">www.ico.org.uk</a>.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-12">
            <h2 className="text-3xl font-bold mb-4">Summary</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Regen PhD, your trust means everything to us. We are committed to protecting your privacy, being transparent about how we use your data, and giving you full control over your personal information.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
