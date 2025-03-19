
import { useState, useEffect } from "react";
import { AudioPlayer } from "./AudioPlayer";
import { Recording, getRecordingsByCategory, Category } from "@/data/recordings";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryContentProps {
  category: Category;
}

export const CategoryContent = ({ category }: CategoryContentProps) => {
  const [recording, setRecording] = useState<Recording | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smoother transitions
    setIsLoading(true);
    
    // Get recordings for this category and select the first one
    const categoryRecordings = getRecordingsByCategory(category);
    
    const timer = setTimeout(() => {
      setRecording(categoryRecordings[0] || null);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [category]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-10 w-40 bg-calm-100 rounded-md mb-4"></div>
          <div className="h-4 w-60 bg-calm-100 rounded-md"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {recording && (
        <div className="fade-in space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="mb-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-calm-900">{recording.title}</h3>
                <div className="flex items-center text-xs text-calm-500">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  <span>{recording.duration}</span>
                </div>
              </div>
              <p className="text-calm-600 mt-2">{recording.description}</p>
            </div>
            <AudioPlayer recording={recording} />
          </div>
          
          {/* Affiliate Banner */}
          <a 
            href="https://www.thecentreforhealing.com/a/43957/EFJWNTPz"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl overflow-hidden shadow-md transition-transform hover:shadow-lg hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-trust-500"
            aria-label="Visit The Centre for Healing"
          >
            <img 
              src="/lovable-uploads/6cb5cd17-484c-4d25-859e-ff5b1d0c0bf6.png" 
              alt="Share your Light - Become a qualified healer & therapist through The Centre for Healing" 
              className="w-full h-auto"
            />
          </a>
          
          {/* Affiliate Text */}
          <div className="text-left mt-3">
            <p className="text-calm-700 text-sm md:text-base">
              The Centre For Healing - they don't just teach superior therapy modalities - they equip you with the full business toolkit you need to succeed. From Ready-to use Forms & Scripts, to Professional Business Plans, Marketing Strategies and Practitioner Support.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryContent;
