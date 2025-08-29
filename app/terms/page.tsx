import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
            Back to Powy
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              TERMS OF SERVICE
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-12">
              Last updated September 01, 2025
            </p>

            <div className="space-y-8">
              {/* Agreement to Terms */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  AGREEMENT TO OUR LEGAL TERMS
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    We are Powy LLC ("Company," "we," "us," "our"), a company registered in China at China, Beijing, Beijing 100020.
                  </p>
                  <p>
                    We operate the website https://www.powy.im (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
                  </p>
                  <p>
                    Powy is the AI-powered presentation generator that transforms your documents into stunning, professional presentations in minutes. Effortlessly convert text, PDFs, and more into visually compelling stories with smart layouts, relevant visuals, and customizable templates.
                  </p>
                  <p>
                    You can contact us by email at <a href="mailto:deck@powy.im" className="text-blue-600 hover:text-blue-700 underline">deck@powy.im</a> or by mail to China, Beijing, Beijing 100020, China.
                  </p>
                  <p>
                    These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Powy LLC, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <strong>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
                  </p>
                  <p>
                    Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
                  </p>
                  <p>
                    The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
                  </p>
                  <p>
                    We recommend that you print a copy of these Legal Terms for your records.
                  </p>
                </div>
              </section>

              {/* 1. Our Services */}
              <section id="services">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  1. OUR SERVICES
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
                  </p>
                  <p>
                    The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
                  </p>
                </div>
              </section>

              {/* 2. Intellectual Property Rights */}
              <section id="intellectual-property">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  2. INTELLECTUAL PROPERTY RIGHTS
                </h2>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Our intellectual property
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  <p>
                    We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
                  </p>
                  <p>
                    Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
                  </p>
                  <p>
                    The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Your use of our Services
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  <p>
                    Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:
                  </p>
                  <p>
                    access the Services; and download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use or internal business purpose.
                  </p>
                  <p>
                    Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                  </p>
                  <p>
                    If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <a href="mailto:deck@powy.im" className="text-blue-600 hover:text-blue-700 underline">deck@powy.im</a>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
                  </p>
                  <p>
                    We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
                  </p>
                  <p>
                    Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Your submissions and contributions
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
                  </p>
                  <p>
                    <strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
                  </p>
                  <p>
                    <strong>Contributions:</strong> The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or through the Services, including but not limited to text, writings, video, audio, photographs, music, graphics, comments, reviews, rating suggestions, personal information, or other material ("Contributions"). Any Submission that is publicly posted shall also be treated as a Contribution.
                  </p>
                  <p>
                    You understand that Contributions may be viewable by other users of the Services.
                  </p>
                </div>
              </section>

              {/* 3. User Representations */}
              <section id="user-representations">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  3. USER REPRESENTATIONS
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.
                  </p>
                  <p className="mt-4">
                    If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
                  </p>
                </div>
              </section>

              {/* 4. User Registration */}
              <section id="user-registration">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  4. USER REGISTRATION
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                  </p>
                </div>
              </section>

              {/* 5. Purchases and Payment */}
              <section id="purchases">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  5. PURCHASES AND PAYMENT
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p><strong>All purchases are non-refundable.</strong></p>
                  <p>We accept the following forms of payment:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Visa</li>
                    <li>Mastercard</li>
                    <li>PayPal</li>
                  </ul>
                  <p>
                    You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.
                  </p>
                  <p>
                    You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
                  </p>
                  <p>
                    We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
                  </p>
                </div>
              </section>

              {/* 6. Prohibited Activities */}
              <section id="prohibited-activities">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  6. PROHIBITED ACTIVITIES
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                  </p>
                  <p>As a user of the Services, you agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                    <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                    <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
                    <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                    <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                    <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                    <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                    <li>Engage in unauthorized framing of or linking to the Services.</li>
                    <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
                    <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                    <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                    <li>Attempt to impersonate another user or person or use the username of another user.</li>
                    <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
                    <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
                    <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
                    <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
                    <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                    <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
                    <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
                    <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
                    <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                    <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
                  </ul>
                </div>
              </section>

              {/* 7. Privacy Policy */}
              <section id="privacy-policy">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  7. PRIVACY POLICY
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    We care about data privacy and security. Please review our Privacy Policy: <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">/privacy</Link>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United States. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Services, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.
                  </p>
                </div>
              </section>

              {/* 8. Governing Law */}
              <section id="governing-law">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  8. GOVERNING LAW
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of California applicable to agreements made and to be entirely performed within the State of California, without regard to its conflict of law principles.
                  </p>
                </div>
              </section>

              {/* 9. Disclaimer */}
              <section id="disclaimer">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  9. DISCLAIMER
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="uppercase text-sm">
                    The services are provided on an as-is and as-available basis. You agree that your use of the services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the services and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We make no warranties or representations about the accuracy or completeness of the services' content or the content of any websites or mobile applications linked to the services and we will assume no liability or responsibility for any (1) errors, mistakes, or inaccuracies of content and materials, (2) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the services, (3) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein, (4) any interruption or cessation of transmission to or from the services, (5) any bugs, viruses, trojan horses, or the like which may be transmitted to or through the services by any third party, and/or (6) any errors or omissions in any content and materials or for any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via the services. We do not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the services, any hyperlinked website, or any website or mobile application featured in any banner or other advertising, and we will not be a party to or in any way be responsible for monitoring any transaction between you and any third-party providers of products or services. As with the purchase of a product or service through any medium or in any environment, you should use your best judgment and exercise caution where appropriate.
                  </p>
                </div>
              </section>

              {/* 10. Contact Us */}
              <section id="contact">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  10. CONTACT US
                </h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p><strong>Powy LLC</strong></p>
                    <p>Beijing, China 100020</p>
                    <p><a href="mailto:deck@powy.im" className="text-blue-600 hover:text-blue-700 underline">deck@powy.im</a></p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}