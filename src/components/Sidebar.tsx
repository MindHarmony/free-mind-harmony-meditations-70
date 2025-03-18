
import { useState, useEffect } from "react";
import { HeartPulse, Star, Moon, Shield, User, Menu } from "lucide-react";
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
            <div className="h-8 bg-trust-100 px-3 rounded flex items-center justify-center">
              <span className="text-trust-700 font-semibold">MH</span>
            </div>
            <h1 className="ml-2 font-semibold text-trust-800 text-lg">
              Mind Harmony
            </h1>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-10 h-10 bg-trust-100 rounded-full flex items-center justify-center">
              <span className="text-trust-700 font-semibold">M</span>
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

      <nav className="space-y-1 px-2">
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

      {!isCollapsed && (
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <div className="text-center text-xs text-calm-500">
            <p>© 2023 Mind Harmony</p>
            <p className="mt-1">All rights reserved</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
