
import { useState, useEffect } from "react";
import { AudioPlayer } from "./AudioPlayer";
import { Recording, getRecordingsByCategory, Category } from "@/data/recordings";
import { Clock, Music } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryContentProps {
  category: Category;
}

export const CategoryContent = ({ category }: CategoryContentProps) => {
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [selectedRecording, setSelectedRecording] = useState<Recording | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smoother transitions
    setIsLoading(true);
    
    // Get recordings for this category
    const categoryRecordings = getRecordingsByCategory(category);
    
    const timer = setTimeout(() => {
      setRecordings(categoryRecordings);
      setSelectedRecording(categoryRecordings[0] || null);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [category]);

  const handleRecordingSelect = (recording: Recording) => {
    setSelectedRecording(recording);
  };

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
      {selectedRecording && (
        <div className="mb-8 fade-in">
          <h2 className="text-2xl font-semibold text-calm-800 mb-6">Now Playing</h2>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="mb-5">
              <h3 className="text-xl font-medium text-calm-900">{selectedRecording.title}</h3>
              <p className="text-calm-600 mt-2">{selectedRecording.description}</p>
            </div>
            <AudioPlayer recording={selectedRecording} />
          </div>
        </div>
      )}

      <div>
        <h2 className="text-2xl font-semibold text-calm-800 mb-6">All Recordings</h2>
        
        <div className="grid grid-cols-1 gap-4">
          {recordings.map((recording) => (
            <div 
              key={recording.id}
              className={cn(
                "bg-white rounded-xl p-4 cursor-pointer transition-all duration-200 border",
                selectedRecording?.id === recording.id
                  ? "border-trust-300 shadow-md"
                  : "border-transparent hover:border-trust-100 hover:shadow-sm"
              )}
              onClick={() => handleRecordingSelect(recording)}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-calm-800">{recording.title}</h3>
                <div className="flex items-center text-xs text-calm-500">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  <span>{recording.duration}</span>
                </div>
              </div>
              
              <p className="text-sm text-calm-600 mb-3 line-clamp-2">{recording.description}</p>
              
              {selectedRecording?.id === recording.id ? (
                <AudioPlayer recording={recording} isCompact={true} />
              ) : (
                <div className="flex items-center text-xs text-trust-600 font-medium">
                  <Music className="w-3.5 h-3.5 mr-1.5" />
                  <span>Click to play</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryContent;
