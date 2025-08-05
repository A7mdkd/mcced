import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* صورة واجهة علوية */}
      <div className="relative w-full h-[320px] md:h-[400px]">
        <Image
          src="/images/Global Recognition.jpg"
          alt="Terms & Privacy Hero"
          fill
          style={{ objectFit: "cover" }}
          className="w-full h-full object-cover rounded-b-lg shadow-lg"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
            Terms of Use & Privacy Policy
          </h1>
        </div>
      </div>

      {/* محتوى الصفحة */}
      <div className="container mx-auto px-4 py-16 flex-1">
        <Accordion type="multiple" className="w-full max-w-4xl mx-auto">
          <AccordionItem value="terms">
            <AccordionTrigger className="text-xl font-bold text-primary">Terms of Use</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <h2>Welcome to the MCCED website</h2>
                <p>By accessing or using our website, you agree to comply with the following Terms and Conditions. Please note that specific terms may apply depending on your country of residence or the location of our services.</p>

                <h3>Copyright</h3>
                <p>All content, text, graphics, logos, and other materials on this website are the property of MCCED International Ltd. or its affiliates and are protected by international copyright laws.</p>

                <h3>Authorization to Reproduce</h3>
                <ul>
                  <li>The material is used solely for informational and non-commercial purposes.</li>
                  <li>No modification or alteration of the material is allowed.</li>
                  <li>No unauthorized use of MCCED trademarks is permitted.</li>
                  <li>Any reproduction must include the following copyright notice: © MCCED International. All Rights Reserved.</li>
                </ul>

                <h3>MCCED Trademarks</h3>
                <p>"MCCED", "MCCED Logistics", "MCCED Forwarding", "MCCED Express", "MCCED Supply Chain" and other marks are trademarks of MCCED International Ltd. or its affiliates. No license or right to use these trademarks is granted without prior written consent from MCCED.</p>

                <h3>Other Trademarks and Trade Names</h3>
                <p>Any third-party trademarks or trade names referenced on this website remain the property of their respective owners.</p>

                <h3>User Feedback and Comments</h3>
                <ul>
                  <li>Any feedback you provide may be used by MCCED without limitation or obligation.</li>
                  <li>MCCED is not required to maintain your comments in confidence.</li>
                </ul>

                <h3>Interactive Features</h3>
                <p>This website may offer shipment tracking, live chat, and customer feedback forms for authorized use only and must not be misused.</p>

                <h3>Accuracy and Updates</h3>
                <p>While MCCED strives to provide accurate information, errors may appear. MCCED reserves the right to correct information without notice.</p>

                <h3>Viruses and Security</h3>
                <p>MCCED makes reasonable efforts to keep this website free from malware and viruses but cannot guarantee absolute security. Users should implement their own safeguards.</p>

                <h3>Disclaimer of Warranties</h3>
                <p>This website and its content are provided “as is” without warranties of any kind. MCCED disclaims all express, implied, or statutory warranties.</p>

                <h3>Limitation of Liability</h3>
                <p>To the maximum extent permitted by law, MCCED and its affiliates shall not be liable for indirect, incidental, or consequential damages. Total liability for any claim will not exceed USD 100.00 unless required by law.</p>

                <h3>Products and Services</h3>
                <p>All transportation and logistics services are subject to MCCED’s Terms and Conditions of Carriage, which may vary by country. Contact your local MCCED office for a copy.</p>

                <h3>Confidentiality and Data Protection</h3>
                <p>Any information you submit to MCCED will be handled confidentially and used solely for providing services. MCCED does not sell or disclose personal data unless required by law. See our Privacy Policy for more details.</p>

                <h3>Governing Law</h3>
                <p>These Terms and Conditions are governed by the laws of Egypt, without regard to its conflict of law principles.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="privacy">
            <AccordionTrigger className="text-xl font-bold text-primary">Privacy Policy</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <h2>Privacy Notice</h2>
                <p>MCCED is committed to protecting your personal data and ensuring that organizational and technical security measures are in place to protect your privacy, whether you are using MCCED’s transportation and/or logistics services, subscribing to newsletters or commercial materials, or browsing MCCED’s websites.</p>
                <h3>Personal Data & Purposes</h3>
                <ul>
                  <li>We may collect your name, contact details, and service-related information to fulfill contracts, respond to inquiries, and comply with legal requirements.</li>
                  <li>Data may be shared with MCCED entities or authorized providers for service provision and legal compliance.</li>
                  <li>Personal data is retained only as long as necessary or as required by law.</li>
                </ul>
                <h3>Your Rights</h3>
                <ul>
                  <li>Access, correct, or request deletion of your data (subject to legal retention).</li>
                  <li>Restrict or object to processing, request data portability, or withdraw consent at any time.</li>
                </ul>
                <h3>Contact</h3>
                <p>For privacy inquiries or to exercise your rights, contact: MCCED Group Data Privacy Office, 10th Of Ramadan City, EGYPT, Email: ops@mcced.com</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="legal">
            <AccordionTrigger className="text-xl font-bold text-primary">Legal Notice & Cookie Disclaimer</AccordionTrigger>
            <AccordionContent>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <h2>Legal Notice</h2>
                <p>By accessing or using this website, you agree to comply with the terms outlined in this Legal Notice. If you do not accept these terms, please leave the website immediately. Continued browsing constitutes acceptance of the Legal Notice and Privacy Policy.</p>
                <h3>Content & Intellectual Property</h3>
                <p>All content, product and service descriptions, MCCED tradename, logo, designs, slogans, images, and videos are protected by copyright and trademark law. Unauthorized use is strictly prohibited.</p>
                <h3>Brand Protection & Fraud Disclaimer</h3>
                <p>MCCED does not endorse any unauthorized activity or fraudulent websites and assumes no liability for losses or damages arising from fraudulent use of its brand.</p>
                <h3>Limitation of Liability</h3>
                <p>Use of this website is at your own risk. MCCED and its affiliates shall not be liable for any direct, indirect, incidental, or consequential damages, including lost profits, data loss, or harm caused by viruses.</p>
                <h3>Cookie Disclaimer</h3>
                <p>MCCED uses cookies to enhance website functionality, improve user experience, and provide personalized services and analytics. You may disable cookies in your browser settings at any time, but this may limit certain functionalities.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
