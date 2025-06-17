import { useState, useRef, useEffect } from "react";
import AnimatedPlayTime from "./components/AnimatedPlayTime";
import { Button } from "./components/ui/button";
import { Play, Pause } from "lucide-react";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize audio context
  useEffect(() => {
    const initAudio = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        gainNodeRef.current = audioContextRef.current.createGain();
        gainNodeRef.current.connect(audioContextRef.current.destination);
        gainNodeRef.current.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);
      }
    };

    // Initialize on first user interaction
    const handleFirstInteraction = () => {
      initAudio();
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      stopAllOscillators();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const stopAllOscillators = () => {
    oscillatorsRef.current.forEach(osc => {
      try {
        osc.stop();
      } catch (e) {
        // Oscillator might already be stopped
      }
    });
    oscillatorsRef.current = [];
  };

  const playNote = (frequency: number, duration: number, startTime: number, volume: number = 0.1) => {
    if (!audioContextRef.current || !gainNodeRef.current) return;

    const oscillator = audioContextRef.current.createOscillator();
    const noteGain = audioContextRef.current.createGain();
    
    oscillator.connect(noteGain);
    noteGain.connect(gainNodeRef.current);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, startTime);
    
    // Envelope for smooth attack and release
    noteGain.gain.setValueAtTime(0, startTime);
    noteGain.gain.linearRampToValueAtTime(volume, startTime + 0.1);
    noteGain.gain.linearRampToValueAtTime(volume * 0.7, startTime + duration - 0.1);
    noteGain.gain.linearRampToValueAtTime(0, startTime + duration);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
    
    oscillatorsRef.current.push(oscillator);
    
    // Clean up finished oscillators
    oscillator.onended = () => {
      oscillatorsRef.current = oscillatorsRef.current.filter(osc => osc !== oscillator);
    };
  };

  const playGoodVibesMelody = () => {
    if (!audioContextRef.current) return;

    const currentTime = audioContextRef.current.currentTime;
    const noteDuration = 0.4;
    const tempo = 0.5; // seconds per beat

    // Happy, upbeat melody in C major
    const melody = [
      { freq: 523.25, time: 0 },    // C5
      { freq: 659.25, time: 1 },    // E5
      { freq: 783.99, time: 2 },    // G5
      { freq: 659.25, time: 3 },    // E5
      { freq: 523.25, time: 4 },    // C5
      { freq: 587.33, time: 5 },    // D5
      { freq: 659.25, time: 6 },    // E5
      { freq: 523.25, time: 7 },    // C5
      { freq: 659.25, time: 8 },    // E5
      { freq: 783.99, time: 9 },    // G5
      { freq: 880.00, time: 10 },   // A5
      { freq: 783.99, time: 11 },   // G5
      { freq: 659.25, time: 12 },   // E5
      { freq: 523.25, time: 13 },   // C5
    ];

    // Bass line
    const bassLine = [
      { freq: 261.63, time: 0 },    // C4
      { freq: 329.63, time: 2 },    // E4
      { freq: 392.00, time: 4 },    // G4
      { freq: 329.63, time: 6 },    // E4
      { freq: 261.63, time: 8 },    // C4
      { freq: 293.66, time: 10 },   // D4
      { freq: 261.63, time: 12 },   // C4
    ];

    // Play melody
    melody.forEach(note => {
      playNote(note.freq, noteDuration, currentTime + note.time * tempo, 0.08);
    });

    // Play bass line (quieter)
    bassLine.forEach(note => {
      playNote(note.freq, noteDuration * 2, currentTime + note.time * tempo, 0.04);
    });

    // Schedule the end of the melody
    const totalDuration = melody.length * tempo + noteDuration;
    timeoutRef.current = setTimeout(() => {
      setIsPlaying(false);
    }, totalDuration * 1000);
  };

  const handlePlayPause = async () => {
    if (!audioContextRef.current) return;

    if (isPlaying) {
      // Stop playing
      stopAllOscillators();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsPlaying(false);
    } else {
      // Start playing
      if (audioContextRef.current.state === 'suspended') {
        await audioContextRef.current.resume();
      }
      playGoodVibesMelody();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-white">
      <div className="flex items-center justify-between w-full max-w-6xl px-8">
        {/* Left column - Text and Button */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          <h1 
            style={{ 
              fontSize: '7rem', 
              fontFamily: "'Playfair Display', serif",
              lineHeight: '0.9'
            }} 
            className="text-black leading-tight text-center"
          >
            Good dog vibes
          </h1>
          
          <Button 
            onClick={handlePlayPause}
            className="rounded-lg px-6 py-3 flex items-center justify-between w-40 hover:opacity-90 transition-opacity"
            style={{ 
              backgroundColor: '#C4F38E', 
              color: 'black',
              border: 'none'
            }}
          >
            <span>{isPlaying ? 'Pause now' : 'Play now'}</span>
            {isPlaying ? (
              <Pause className="h-5 w-5 fill-black" />
            ) : (
              <Play className="h-5 w-5 fill-black" />
            )}
          </Button>
        </div>
        
        {/* Right column - Animation */}
        <div className="flex-1 flex items-center justify-center">
          <AnimatedPlayTime />
        </div>
      </div>
    </div>
  );
}