
import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, Volume1, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { Recording } from "@/data/recordings";

interface AudioPlayerProps {
  recording: Recording;
  isCompact?: boolean;
}

export const AudioPlayer = ({ recording, isCompact = false }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  // If this is a SoundCloud embed, render it differently
  if (recording.embedType === "soundcloud" && recording.embedSrc) {
    return (
      <div className={cn(
        "audio-player w-full p-4",
        isCompact ? "rounded-lg" : "rounded-xl"
      )}>
        <div className="mb-3">
          <div className={cn(
            "font-medium text-calm-900",
            isCompact ? "text-sm" : "text-base"
          )}>
            {recording.title}
          </div>
          <div className="text-xs text-calm-500 mt-1">
            {recording.duration}
          </div>
        </div>
        
        <div className="w-full rounded-lg overflow-hidden" style={{ height: "160px" }}>
          <iframe 
            width="100%" 
            height="100%" 
            scrolling="no" 
            frameBorder="no" 
            src={recording.embedSrc}
            title={recording.title}
          ></iframe>
        </div>
      </div>
    );
  }
  
  useEffect(() => {
    // Reset state when recording changes
    setIsPlaying(false);
    setCurrentTime(0);
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = recording.audioSrc;
      audioRef.current.load();
    }
  }, [recording]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    // Events
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', onEnded);

    // Set volume
    audio.volume = volume;
    
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', onEnded);
    };
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
    
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      audioRef.current.volume = volume;
    } else {
      audioRef.current.volume = 0;
    }
    
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !audioRef.current) return;
    
    const progressRect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - progressRect.left) / progressRect.width;
    const newTime = percent * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX className="w-5 h-5" />;
    if (volume < 0.5) return <Volume1 className="w-5 h-5" />;
    return <Volume2 className="w-5 h-5" />;
  };

  return (
    <div className={cn(
      "audio-player w-full p-4",
      isCompact ? "rounded-lg" : "rounded-xl"
    )}>
      <audio ref={audioRef} src={recording.audioSrc} preload="metadata" />
      
      <div className={cn(
        "flex items-center",
        isCompact ? "space-x-3" : "space-x-4"
      )}>
        <button 
          onClick={togglePlay}
          className="flex-shrink-0 w-10 h-10 bg-trust-500 hover:bg-trust-600 text-white rounded-full flex items-center justify-center transition-colors duration-200"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
        
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-1.5">
            <div className={cn(
              "font-medium text-calm-900",
              isCompact ? "text-sm" : "text-base"
            )}>
              {recording.title}
            </div>
            <div className="text-xs text-calm-500">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
          
          <div 
            ref={progressRef}
            className="h-1.5 bg-calm-100 rounded-full cursor-pointer relative overflow-hidden"
            onClick={handleProgressChange}
          >
            <div 
              className="absolute top-0 left-0 h-full bg-trust-400 rounded-full"
              style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleMute}
            className="text-calm-600 hover:text-trust-700 transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {getVolumeIcon()}
          </button>
          
          {!isCompact && (
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-1.5 bg-calm-100 rounded-full appearance-none cursor-pointer"
              aria-label="Volume"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
