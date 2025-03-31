
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Sidebar from "@/components/Sidebar";
import { CategoryContent } from "@/components/CategoryContent";
import { Category, categoryNames, categoryKeywords, categoryDescriptions, getAllCategories } from "@/data/recordings";
import { useIsMobile } from "@/hooks/use-mobile";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";

const Index = () => {
  // Initialize with "stress-anxiety" or the first available category
  const [activeCategory, setActiveCategory] = useState<Category>("stress-anxiety");
  const isMobile = useIsMobile();
  
  // Ensure the active category exists, otherwise default to "stress-anxiety"
  useEffect(() => {
    const allCategories = getAllCategories();
    if (!allCategories.includes(activeCategory)) {
      setActiveCategory("stress-anxiety");
    }
  }, [activeCategory]);
  
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };
  
  // Function to handle navigation
  const handleNavigate = (path: string) => {
    window.location.href = path;
  };
  
  // Additional AI-friendly meta tags for Manifest and Teen Anti-Bullying
  const additionalMetaTags = activeCategory === "manifest-dreams" ? {
    "og:title": "Free Manifest Your Dreams Guided Meditation | Mind Harmony",
    "og:description": "Access our powerful free manifestation meditation to help you manifest your desires and create your dream reality.",
    "twitter:title": "Manifest Your Dreams | Free Guided Meditation",
    "twitter:description": "Free guided meditation for manifestation and abundance using the law of attraction",
  } : activeCategory === "teenage-anti-bullying" ? {
    "og:title": "Teen Anti-Bullying Guided Meditation | Mind Harmony",
    "og:description": "Free supportive guided meditation for teenagers facing bullying, as featured in themes explored by Netflix's 'Adolescence' series. Designed to build resilience and confidence.",
    "twitter:title": "Teen Anti-Bullying | Free Guided Meditation",
    "twitter:description": "Support for teenagers experiencing bullying with our free guided meditation for resilience, exploring themes similar to Netflix's 'Adolescence' series",
  } : {};
  
  // Enhanced Schema.org structured data for AI search engines
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Mind Harmony",
    "description": "Free hypnosis and meditation recordings for personal development.",
    "url": "https://mindharmony.com",
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "37.09024",
          "longitude": "-95.712891"
        },
        "geoRadius": "8000000" // Global reach in meters
      }
    ],
    "availableLanguage": {
      "@type": "Language",
      "name": "English"
    },
    // Enhanced AI-friendly attributes
    "keywords": "meditation, hypnosis, anxiety, stress relief, sleep, confidence, personal growth, anti-bullying",
    "audience": {
      "@type": "Audience",
      "audienceType": "everyone seeking mental wellness",
      "geographicArea": {
        "@type": "AdministrativeArea",
        "name": "Global"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "mainContentOfPage": "Free guided meditation and hypnosis recordings for mental wellness and personal development"
    }
  };
  
  // AI-friendly content structure for current category
  const categoryContentSchema = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    "name": `${categoryNames[activeCategory]} Meditation Recordings`,
    "about": categoryDescriptions[activeCategory],
    "keywords": categoryKeywords[activeCategory] + (activeCategory === "teenage-anti-bullying" ? ", Netflix Adolescence series, teen mental health, adolescent struggles" : ""),
    "encodingFormat": "audio/mpeg",
    "accessMode": "auditory",
    "accessibilityFeature": "audioDescription",
    "accessibilitySummary": "Audio recordings with guided meditation for self-improvement and mental wellness"
  };
  
  return (
    <>
      <Helmet>
        <title>Mind Harmony - Free Hypnosis & Meditation | {categoryNames[activeCategory]}</title>
        <meta name="description" content={
          activeCategory === "teenage-anti-bullying" 
            ? `${categoryDescriptions[activeCategory]} Exploring similar themes to Netflix's 'Adolescence' series on teenage struggles.`
            : categoryDescriptions[activeCategory]
        } />
        <meta name="keywords" content={
          activeCategory === "teenage-anti-bullying"
            ? `${categoryKeywords[activeCategory]}, Netflix Adolescence series, teen mental health, adolescent struggles`
            : categoryKeywords[activeCategory]
        } />
        <link rel="canonical" href={`https://mindharmony.com/`} />
        {/* AI-friendly metadata */}
        <meta name="robots" content="max-image-preview:large" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="ai-index" content="allow" />
        <meta name="ai-crawler" content="index,follow" />
        <meta name="ai-classification" content="mental health, wellness, meditation, self-help" />
        <meta name="subject-keywords" content={
          activeCategory === "teenage-anti-bullying"
            ? `${categoryKeywords[activeCategory]}, Netflix Adolescence series, teen mental health, adolescent struggles`
            : categoryKeywords[activeCategory]
        } />
        
        {/* Enhanced OpenGraph and Twitter meta tags for specific categories */}
        {Object.entries(additionalMetaTags).map(([name, content]) => (
          <meta key={name} property={name} content={content} />
        ))}
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(categoryContentSchema)}
        </script>
      </Helmet>
      
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar - Navigation */}
        <Sidebar 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange}
        />
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <header className="mb-6 md:mb-10">
              {/* Breadcrumbs for better navigation */}
              <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Mind Harmony</BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbPage>{categoryNames[activeCategory]}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <h1 className="text-2xl md:text-3xl font-semibold text-calm-900">
                {categoryNames[activeCategory]} Hypnosis & Meditation
              </h1>
              <p className="text-sm md:text-base text-calm-600 mt-2">
                Free {categoryNames[activeCategory].toLowerCase()} recording to help you achieve mental balance and harmony. 
                Click on the session below to listen instantly - no registration required.
              </p>
            </header>

            {/* Ad Space removed temporarily */}
            
            {/* Category Content - Main */}
            <main>
              <CategoryContent category={activeCategory} />
              
              {/* Ad Space removed temporarily */}
            </main>

            {/* Footer */}
            <footer className="mt-6 md:mt-10 pt-4 md:pt-6 border-t border-calm-100 text-center text-xs md:text-sm text-calm-500">
              <p>© {new Date().getFullYear()} Mind Harmony. All rights reserved.</p>
              <p className="mt-1 mb-3">Free hypnosis recordings for personal development.</p>
              <div className="flex justify-center space-x-6">
                <button 
                  onClick={() => handleNavigate("/cookie-policy")}
                  className="text-trust-500 hover:text-trust-600 transition-colors cursor-pointer"
                  aria-label="View Cookie Policy"
                >
                  Cookie Policy
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
