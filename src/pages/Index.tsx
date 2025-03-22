
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Sidebar from "@/components/Sidebar";
import { CategoryContent } from "@/components/CategoryContent";
import { Category, categoryNames } from "@/data/recordings";
import { useIsMobile } from "@/hooks/use-mobile";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("stress-anxiety");
  const isMobile = useIsMobile();
  
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  // SEO keyword mapping for each category
  const categoryKeywords: Record<Category, string> = {
    "stress-anxiety": "free guided meditation for anxiety and stress relief, calming hypnosis for social anxiety, short meditation for anxiety and overthinking, how to use meditation for panic attacks, best meditation for anxiety before sleep",
    "confidence": "guided meditation for self-confidence and inner strength, hypnosis to overcome self-doubt and fear, confidence meditation for speaking in public, daily self-esteem meditation for a positive mindset, free hypnosis to boost confidence and motivation",
    "sleep": "free sleep hypnosis for deep relaxation, 10-minute guided meditation for falling asleep fast, insomnia relief meditation for a restful night, hypnosis for calming the mind before bed, best sleep meditation for anxiety and stress",
    "anti-bullying": "guided meditation for teens dealing with bullying, hypnosis for building resilience after bullying, self-love meditation for teenagers with low confidence, how to stay strong after being bullied – meditation, meditation to let go of negative thoughts from bullying",
    "personal-growth": "guided visualization meditation to manifest success, hypnosis for manifesting your dream life, law of attraction meditation for abundance and confidence, visualization exercise to attract positivity and wealth, future self meditation for personal growth and clarity"
  };
  
  // Category descriptions for SEO
  const categoryDescriptions: Record<Category, string> = {
    "stress-anxiety": "Free guided meditations and hypnosis recordings for anxiety relief, stress reduction, and managing overthinking or panic attacks.",
    "confidence": "Boost your self-confidence and overcome self-doubt with our free guided hypnosis sessions for personal empowerment and public speaking confidence.",
    "sleep": "Fall asleep faster and enjoy deeper rest with our free sleep hypnosis recordings designed to calm your mind before bed and relieve insomnia.",
    "anti-bullying": "Supportive meditations for teens dealing with bullying, building resilience, and developing self-love techniques to stay emotionally strong.",
    "personal-growth": "Manifest your dreams and visualize your ideal future self with our guided meditation recordings for personal growth, abundance, and positive change."
  };
  
  // Function to handle navigation
  const handleNavigate = (path: string) => {
    window.location.href = path;
  };
  
  return (
    <>
      <Helmet>
        <title>Mind Harmony - {categoryNames[activeCategory]} Hypnosis & Meditation</title>
        <meta name="description" content={categoryDescriptions[activeCategory]} />
        <meta name="keywords" content={categoryKeywords[activeCategory]} />
        <link rel="canonical" href={`https://mindharmony.com/`} />
      </Helmet>
      
      <div className="flex h-screen overflow-hidden" style={{position: 'static'}}>
        {/* Sidebar - Navigation */}
        <Sidebar 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange}
        />
        
        {/* Main Content - all static positioning */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8" style={{position: 'static'}}>
          <div className="max-w-4xl mx-auto" style={{position: 'static'}}>
            <header className="mb-6 md:mb-10" style={{position: 'static'}}>
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
            <main style={{position: 'static'}}>
              <CategoryContent category={activeCategory} />
              
              {/* Ad Space removed temporarily */}
            </main>

            {/* Footer - ensuring it's absolutely not sticky */}
            <footer className="mt-6 md:mt-10 pt-4 md:pt-6 border-t border-calm-100 text-center text-xs md:text-sm text-calm-500" style={{position: 'static'}}>
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
