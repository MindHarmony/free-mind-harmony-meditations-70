
import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, Volume1, VolumeX, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Recording } from "@/data/recordings";
import { toast } from "sonner";
import { Link } from "react-router-dom";

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
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  // If this is a SoundCloud embed, render it differently
  if (recording.embedType === "soundcloud" && recording.embedSrc) {
    // For the Sleep & Insomnia recording (id 7), use the complete embed code with artist info
    if (recording.id === "7") {
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
          
          <div className="w-full">
            <iframe 
              width="100%" 
              height="300" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay"
              src={recording.embedSrc}
              title={recording.title}
            ></iframe>
            <div style={{fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: 100}}>
              <a href="https://soundcloud.com/carla-545924453" title="Carla" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Carla</a> · <a href="https://soundcloud.com/carla-545924453/sleep-insomnia" title="Sleep &amp; Insomnia" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Sleep &amp; Insomnia</a>
            </div>
          </div>
          
          {/* Add disclaimer notice below the player */}
          <div className="mt-3 pt-3 border-t border-calm-100 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-calm-600">
              Please do not listen while driving or operating machinery. Only use in a safe, relaxed environment. 
              See full <Link to="/terms" className="text-trust-500 hover:underline">disclaimer here</Link>.
            </p>
          </div>
        </div>
      );
    }
    
    // For other soundcloud embeds, use the standard format
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
            allow="autoplay"
            src={recording.embedSrc}
            title={recording.title}
          ></iframe>
        </div>
        
        {/* Add disclaimer notice below the player */}
        <div className="mt-3 pt-3 border-t border-calm-100 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-calm-600">
            Please do not listen while driving or operating machinery. Only use in a safe, relaxed environment. 
            See full <Link to="/terms" className="text-trust-500 hover:underline">disclaimer here</Link>.
          </p>
        </div>
      </div>
    );
  }
  
  useEffect(() => {
    // Reset state when recording changes
    setIsPlaying(false);
    setCurrentTime(0);
    setHasError(false);
    
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
      setHasError(false);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    
    const onLoadStart = () => {
      setIsLoading(true);
    };
    
    const onCanPlay = () => {
      setIsLoading(false);
      setHasError(false);
    };
    
    const onError = () => {
      setIsLoading(false);
      setIsPlaying(false);
      setHasError(true);
      console.error("Audio error for file:", recording.audioSrc);
      toast.error("Unable to play audio. Please try again later.");
    };

    // Events
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('loadstart', onLoadStart);
    audio.addEventListener('canplay', onCanPlay);
    audio.addEventListener('error', onError);

    // Set volume
    audio.volume = volume;
    
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('loadstart', onLoadStart);
      audio.removeEventListener('canplay', onCanPlay);
      audio.removeEventListener('error', onError);
    };
  }, [recording.audioSrc, volume]);

  const togglePlay = () => {
    if (!audioRef.current || hasError) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        setIsLoading(true);
        
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch(error => {
            console.error("Error playing audio:", error);
            setIsLoading(false);
            setHasError(true);
            toast.error("Unable to play audio. Please try again later.");
          });
      }
    }
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
    if (!progressRef.current || !audioRef.current || hasError) return;
    
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
          disabled={hasError}
          className={cn(
            "flex-shrink-0 w-10 h-10 text-white rounded-full flex items-center justify-center transition-colors duration-200",
            hasError 
              ? "bg-calm-400 cursor-not-allowed" 
              : "bg-trust-500 hover:bg-trust-600"
          )}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
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
              {formatTime(currentTime)} / {hasError ? recording.duration : formatTime(duration)}
            </div>
          </div>
          
          <div 
            ref={progressRef}
            className={cn(
              "h-1.5 bg-calm-100 rounded-full relative overflow-hidden",
              hasError ? "opacity-50" : "cursor-pointer"
            )}
            onClick={hasError ? undefined : handleProgressChange}
          >
            <div 
              className="absolute top-0 left-0 h-full bg-trust-400 rounded-full"
              style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
            />
          </div>
          
          {hasError && (
            <div className="text-xs text-red-500 mt-1">
              Audio unavailable. Please try another recording.
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleMute}
            disabled={hasError}
            className={cn(
              "transition-colors",
              hasError 
                ? "text-calm-400 cursor-not-allowed" 
                : "text-calm-600 hover:text-trust-700"
            )}
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
              disabled={hasError}
              className={cn(
                "w-20 h-1.5 bg-calm-100 rounded-full appearance-none",
                hasError ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              )}
              aria-label="Volume"
            />
          )}
        </div>
      </div>

      {/* Add disclaimer notice below the player */}
      <div className="mt-3 pt-3 border-t border-calm-100 flex items-start gap-2">
        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-calm-600">
          Please do not listen while driving or operating machinery. Only use in a safe, relaxed environment. 
          See full <Link to="/terms" className="text-trust-500 hover:underline">disclaimer here</Link>.
        </p>
      </div>
    </div>
  );
};

export default AudioPlayer;
