
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
        <div className="fade-in">
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
        </div>
      )}
    </div>
  );
};

export default CategoryContent;
