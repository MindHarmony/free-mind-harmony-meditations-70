
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const About = () => {
  // AI-friendly about page schema
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Mind Harmony",
    "description": "Learn about Mind Harmony - your source for free guided meditation and hypnosis recordings",
    "mainEntity": {
      "@type": "Organization",
      "name": "Mind Harmony",
      "description": "Provider of free meditation and hypnosis recordings for mental wellness",
      "email": "carla@theinfinitygroup.nz",
      "member": {
        "@type": "OrganizationRole",
        "member": {
          "@type": "Person",
          "name": "Carla"
        },
        "roleName": "Contact"
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "The Infinity Group NZ Limited"
      }
    }
  };

  return (
    <div className="bg-background min-h-screen py-12">
      <Helmet>
        <title>About Us - Mind Harmony</title>
        <meta name="description" content="Learn about Mind Harmony - your source for free guided meditation and hypnosis recordings" />
        <link rel="canonical" href="https://mindharmony.com/about" />
        {/* AI-friendly metadata */}
        <meta name="ai-index" content="allow" />
        <meta name="ai-crawler" content="index,follow" />
        <meta name="ai-classification" content="about page, company information, mental wellness" />
        <script type="application/ld+json">
          {JSON.stringify(aboutPageSchema)}
        </script>
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
          <h1 className="text-3xl font-semibold text-calm-900 mb-6">About Mind Harmony</h1>
          
          <div className="space-y-6 text-calm-700">
            <section>
              <h2 className="text-xl font-medium text-calm-800 mb-3">Our Mission</h2>
              <p>Mind Harmony was created with a simple yet powerful mission: to make mental wellness accessible to everyone. We believe that meditation and hypnosis techniques should be available to all, regardless of financial circumstances or location.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-medium text-calm-800 mb-3">What We Offer</h2>
              <p>We provide completely free guided meditation and hypnosis recordings across several key categories:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Stress & Anxiety Relief</strong> - Calming sessions to help manage everyday stress and anxiety</li>
                <li><strong>Confidence Building</strong> - Techniques to boost self-esteem and inner strength</li>
                <li><strong>Sleep Enhancement</strong> - Peaceful recordings to help you fall asleep faster and rest deeper</li>
                <li><strong>Anti-Bullying Support</strong> - Specialized content for teens and adults dealing with bullying</li>
                <li><strong>Personal Growth</strong> - Guided visualizations to help manifest your goals and aspirations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-medium text-calm-800 mb-3">Our Approach</h2>
              <p>Each recording is carefully crafted using evidence-based techniques from cognitive behavioral therapy, mindfulness practices, and hypnotherapy. Our goal is to provide effective mental wellness tools that can be integrated into your daily routine with ease.</p>
              <p className="mt-2">We believe in the power of consistent practice, which is why we offer variations within each category to keep your mindfulness journey fresh and engaging.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-medium text-calm-800 mb-3">About Our Company</h2>
              <p>Mind Harmony is a subsidiary of The Infinity Group NZ Limited, a respected provider of therapeutic hypnosis and mindfulness solutions. We leverage the expertise and experience of The Infinity Group NZ Limited to bring you high-quality meditation and hypnosis content.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-medium text-calm-800 mb-3">Advertising on Mind Harmony</h2>
              <p>To keep our content completely free, Mind Harmony is supported by carefully selected advertisements. We ensure all ads are relevant and non-intrusive to your meditation experience.</p>
              <p className="mt-2">We partner with Google AdSense to provide these advertisements and are committed to maintaining a balance between sustainability and user experience.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-medium text-calm-800 mb-3">Contact Us</h2>
              <p>We value your feedback and are here to help with any questions or suggestions you might have.</p>
              <p className="mt-2">Email: <a href="mailto:carla@theinfinitygroup.nz" className="text-trust-600 hover:text-trust-700">carla@theinfinitygroup.nz</a></p>
            </section>
          </div>
          
          <div className="mt-10 pt-6 border-t border-calm-100 text-center text-sm text-calm-500">
            <p>Mind Harmony - A subsidiary of The Infinity Group NZ Limited</p>
            <p className="mt-1">© {new Date().getFullYear()} Mind Harmony. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
