
import { useState } from "react";
import { HeartPulse, Star, Moon, Shield, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Category, categoryNames } from "@/data/recordings";

interface SidebarProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  logoUrl?: string;
}

interface CategoryItem {
  id: Category;
  name: string;
  icon: React.ReactNode;
}

export const Sidebar = ({ 
  activeCategory, 
  onCategoryChange, 
  logoUrl = "https://placehold.co/200x100/trust/white?text=Mind+Harmony" 
}: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [imageError, setImageError] = useState(false);

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
        "h-screen bg-sidebar py-6 border-r border-sidebar-border transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="px-4 mb-8">
        {!isCollapsed ? (
          <div className="flex items-center">
            {!imageError && (
              <img 
                src={logoUrl} 
                alt="Mind Harmony" 
                className="h-10 w-auto mr-2"
                onError={() => setImageError(true)}
              />
            )}
            <h1 className="font-semibold text-trust-800 text-xl">
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
          className="mt-4 text-xs text-calm-500 hover:text-trust-600 transition-colors w-full text-center"
        >
          {isCollapsed ? "Expand" : "Collapse"}
        </button>
      </div>

      <nav className="space-y-1 px-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 group",
              activeCategory === category.id 
                ? "bg-sidebar-accent text-sidebar-primary font-medium" 
                : "text-calm-600 hover:bg-trust-50 hover:text-trust-700"
            )}
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

      <div className="absolute bottom-6 left-0 right-0 px-4">
        <div 
          className={cn(
            "text-center text-xs text-calm-500",
            isCollapsed ? "opacity-0" : "opacity-100 transition-opacity duration-300"
          )}
        >
          <p>© 2023 Mind Harmony</p>
          <p className="mt-1">All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
