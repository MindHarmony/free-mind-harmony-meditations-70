
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Button asChild variant="outline" className="mb-6">
        <Link to="/">← Back to Home</Link>
      </Button>
      
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What are cookies?</h2>
        <p className="mb-4">
          Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
          They are widely used to make websites work more efficiently and provide information to the website owners.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How we use cookies</h2>
        <p className="mb-4">We use cookies for the following purposes:</p>
        
        <div className="space-y-4 ml-4">
          <div>
            <h3 className="text-xl font-medium">Necessary Cookies</h3>
            <p className="text-sm text-muted-foreground">
              These cookies are essential for the website to function properly. They enable core functionality
              such as security, network management, and account access. You cannot disable these cookies in our system.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium">Analytics Cookies</h3>
            <p className="text-sm text-muted-foreground">
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
              They help us know which pages are the most and least popular and see how visitors move around the site.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium">Marketing Cookies</h3>
            <p className="text-sm text-muted-foreground">
              These cookies may be set through our site by our advertising partners. They may be used by those companies
              to build a profile of your interests and show you relevant advertisements on other sites.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium">Preferences Cookies</h3>
            <p className="text-sm text-muted-foreground">
              These cookies enable the website to provide enhanced functionality and personalization. They may be set
              by us or by third-party providers whose services we have added to our pages.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Managing cookies</h2>
        <p className="mb-4">
          You can change your cookie preferences at any time by clicking on the 'Cookie Settings' button
          at the bottom left of the screen. You can also control cookies through your browser settings.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
        <p className="mb-4">
          If you have any questions about our Cookie Policy, please contact us at carla@theinfinitygroup.nz.
        </p>
        <p className="mb-4">
          Mind Harmony is a subsidiary of The Infinity Group NZ Limited. All cookie policy inquiries are handled in accordance with our parent company's data protection standards.
        </p>
      </section>
    </div>
  );
};

export default CookiePolicy;
