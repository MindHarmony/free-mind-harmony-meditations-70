
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { CategoryContent } from "@/components/CategoryContent";
import { Category, categoryNames } from "@/data/recordings";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("stress-anxiety");
  const isMobile = useIsMobile();
  
  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange}
      />
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-6 md:mb-10">
            <h1 className="text-2xl md:text-3xl font-semibold text-calm-900">
              {categoryNames[activeCategory]}
            </h1>
            <p className="text-sm md:text-base text-calm-600 mt-2">
              Click on the recording below to enjoy your free meditation to achieve mental balance and harmony
            </p>
          </header>

          {/* Ad Space (Header) - Hide on small mobile screens */}
          <div className="hidden sm:block mb-6 md:mb-10 bg-calm-50 border border-calm-100 rounded-xl p-4 text-center">
            <p className="text-calm-500 text-sm">Advertisement Space</p>
            <div className="h-16 flex items-center justify-center border border-dashed border-calm-200 rounded-lg mt-2">
              <span className="text-calm-400">Google Ad</span>
            </div>
          </div>
          
          {/* Category Content */}
          <main>
            <CategoryContent category={activeCategory} />
            
            {/* Ad Space (Side) */}
            <div className="mt-6 md:mt-10 bg-calm-50 border border-calm-100 rounded-xl p-4 text-center">
              <p className="text-calm-500 text-sm">Advertisement Space</p>
              <div className="h-24 md:h-48 flex items-center justify-center border border-dashed border-calm-200 rounded-lg mt-2">
                <span className="text-calm-400">Google Ad</span>
              </div>
            </div>
          </main>

          <footer className="mt-6 md:mt-10 pt-4 md:pt-6 border-t border-calm-100 text-center text-xs md:text-sm text-calm-500">
            <p>© 2023 Mind Harmony. All rights reserved.</p>
            <p className="mt-1">Free hypnosis recordings for personal development.</p>
            <div className="mt-2 md:mt-3">
              <Link to="/privacy" className="text-trust-500 hover:text-trust-600 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
