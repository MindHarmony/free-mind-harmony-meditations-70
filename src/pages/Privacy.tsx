
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <div className="bg-background min-h-screen py-12">
      <Helmet>
        <title>Privacy Policy - Mind Harmony</title>
        <meta name="description" content="Privacy Policy for Mind Harmony application" />
        <link rel="canonical" href="https://mindharmony.com/privacy" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <Link to="/" className="text-trust-600 hover:text-trust-700 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-semibold text-calm-900 mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-calm-700">
            <section>
              <h2 className="text-xl font-medium text-calm-800 mb-3">Introduction</h2>
              <p>Welcome to Mind Harmony, a subsidiary of The Infinity Group NZ Limited. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-medium text-calm-800 mb-3">The Data We Collect About You</h2>
              <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Identity Data: includes first name, last name, username or similar identifier.</li>
                <li>Contact Data: includes email address and telephone numbers.</li>
                <li>Technical Data: includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li>Usage Data: includes information about how you use our website and services.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-medium text-calm-800 mb-3">Advertising and Third-Party Cookies</h2>
              <p>Mind Harmony uses Google AdSense, an advertising service provided by Google Inc., to display advertisements on our website. Google AdSense may use cookies and similar technologies to collect information about your browsing activities to provide you with personalized advertisements based on your interests.</p>
              <p className="mt-2">These third-party vendors, including Google, use cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.</p>
              <p className="mt-2">You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-trust-600 hover:text-trust-700" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>
              <p className="mt-2">We have implemented the following Google Analytics Advertising Features:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Remarketing with Google Analytics</li>
                <li>Google Display Network Impression Reporting</li>
                <li>Google Analytics Demographics and Interest Reporting</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-medium text-calm-800 mb-3">How We Use Your Personal Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-medium text-calm-800 mb-3">GDPR Data Protection Rights</h2>
              <p>Under the General Data Protection Regulation (GDPR), you have the following rights:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
                <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete information you believe is incomplete.</li>
                <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
                <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
              </ul>
              <p className="mt-3">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email: privacy@mindharmony.com</p>
            </section>
            
            <section>
              <h2 className="text-xl font-medium text-calm-800 mb-3">Cookies Policy</h2>
              <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third-party to recognize you and make your next visit easier and the service more useful to you.</p>
              <p className="mt-2">We use cookies to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Understand and save user's preferences for future visits.</li>
                <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences in the future.</li>
                <li>We may also use trusted third-party services that track this information on our behalf.</li>
              </ul>
              <p className="mt-2">You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-medium text-calm-800 mb-3">Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
              <p className="mt-2">We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
              <p className="mt-2">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-medium text-calm-800 mb-3">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, you can contact us:</p>
              <p className="mt-2">By email: <a href="mailto:carla@theinfinitygroup.nz" className="text-trust-600 hover:text-trust-700">carla@theinfinitygroup.nz</a></p>
              <p className="mt-2">Mind Harmony is a subsidiary of The Infinity Group NZ Limited. All privacy inquiries are handled in accordance with our parent company's data protection standards.</p>
            </section>
          </div>
          
          <div className="mt-10 pt-6 border-t border-calm-100 text-center text-sm text-calm-500">
            <p>Mind Harmony - A subsidiary of The Infinity Group NZ Limited</p>
            <p className="mt-1">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
