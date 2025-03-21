
import { useState, useEffect } from "react";
import { HeartPulse, Star, Moon, Shield, User, Menu, FileText, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category, categoryNames } from "@/data/recordings";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

interface CategoryItem {
  id: Category;
  name: string;
  icon: React.ReactNode;
}

export const Sidebar = ({ 
  activeCategory, 
  onCategoryChange
}: SidebarProps) => {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  // Automatically collapse sidebar on mobile
  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  const categories: CategoryItem[] = [
    {
      id: "stress-anxiety",
      name: categoryNames["stress-anxiety"],
      icon: <HeartPulse className="w-5 h-5" />
    },
    {
      id: "confidence",
      name: categoryNames["confidence"],
      icon: <Star className="w-5 h-5" />
    },
    {
      id: "sleep",
      name: categoryNames["sleep"], 
      icon: <Moon className="w-5 h-5" />
    },
    {
      id: "anti-bullying",
      name: categoryNames["anti-bullying"],
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: "personal-growth",
      name: categoryNames["personal-growth"],
      icon: <User className="w-5 h-5" />
    }
  ];

  const handleNavigate = (path: string) => {
    window.location.href = path;
  };

  return (
    <div
      className={cn(
        "h-screen bg-sidebar py-3 border-r border-sidebar-border transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="px-3 mb-6">
        {!isCollapsed ? (
          <div className="flex items-center">
            <div className="h-9 w-9 bg-trust-100 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/lovable-uploads/d367f517-3fe1-4872-9d31-928e8adbb8d4.png" alt="Mind Harmony" className="h-full w-full object-contain" />
            </div>
            <h1 className="ml-2 font-semibold text-trust-800 text-lg">
              Mind Harmony
            </h1>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-10 h-10 bg-trust-100 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/lovable-uploads/d367f517-3fe1-4872-9d31-928e8adbb8d4.png" alt="Mind Harmony" className="h-full w-full object-contain" />
            </div>
          </div>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="mt-3 text-xs text-calm-500 hover:text-trust-600 transition-colors w-full text-center"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <Menu className="mx-auto h-4 w-4" /> : "Collapse"}
        </button>
      </div>

      {/* Main Navigation - Categories */}
      <div className="px-2 mb-6">
        <div className={cn(
          "mb-2 px-2 text-xs font-medium text-calm-500",
          isCollapsed && "text-center"
        )}>
          {!isCollapsed && "CATEGORIES"}
        </div>
        <nav className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "w-full flex items-center px-2 py-2 rounded-lg transition-all duration-200 group",
                activeCategory === category.id 
                  ? "bg-sidebar-accent text-sidebar-primary font-medium" 
                  : "text-calm-600 hover:bg-trust-50 hover:text-trust-700"
              )}
              aria-label={`${category.name} category`}
            >
              <span className="flex-shrink-0">{category.icon}</span>
              <span 
                className={cn(
                  "ml-3 transition-opacity duration-300",
                  isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                )}
              >
                {category.name}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Information Section */}
      <div className="px-2 mb-6">
        <div className={cn(
          "mb-2 px-2 text-xs font-medium text-calm-500",
          isCollapsed && "text-center"
        )}>
          {!isCollapsed && "INFO"}
        </div>
        <nav className="space-y-1">
          <button
            onClick={() => handleNavigate("/about")}
            className="w-full flex items-center px-2 py-2 rounded-lg transition-all duration-200 text-calm-600 hover:bg-trust-50 hover:text-trust-700"
            aria-label="About Mind Harmony"
          >
            <span className="flex-shrink-0"><Info className="w-5 h-5" /></span>
            <span 
              className={cn(
                "ml-3 transition-opacity duration-300",
                isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
              )}
            >
              About Us
            </span>
          </button>
          <button
            onClick={() => handleNavigate("/privacy")}
            className="w-full flex items-center px-2 py-2 rounded-lg transition-all duration-200 text-calm-600 hover:bg-trust-50 hover:text-trust-700"
            aria-label="Privacy Policy"
          >
            <span className="flex-shrink-0"><FileText className="w-5 h-5" /></span>
            <span 
              className={cn(
                "ml-3 transition-opacity duration-300",
                isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
              )}
            >
              Privacy Policy
            </span>
          </button>
        </nav>
      </div>

      {!isCollapsed && (
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <div className="text-center text-xs text-calm-500">
            <p>© {new Date().getFullYear()} Mind Harmony</p>
            <p className="mt-1">All rights reserved</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
