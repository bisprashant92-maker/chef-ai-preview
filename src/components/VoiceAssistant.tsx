import { useState, useEffect } from 'react';
import { Mic, X, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface VoiceAssistantProps {
  onClose: () => void;
}

const VoiceAssistant = ({ onClose }: VoiceAssistantProps) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('Hi! I\'m your Chef AI assistant. How can I help you today?');

  const exampleCommands = [
    'Find me a pasta recipe',
    'Help me plan dinner',
    'Add ingredients to my list',
    'What can I cook with chicken?'
  ];

  const handleVoiceCommand = () => {
    setIsListening(!isListening);
    
    if (!isListening) {
      // Simulate voice recognition
      setTimeout(() => {
        setTranscript('Find me a pasta recipe');
        setIsListening(false);
        setTimeout(() => {
          setResponse('I found some delicious pasta recipes for you! I recommend the Creamy Carbonara - it takes just 30 minutes and is perfect for beginners.');
        }, 1000);
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 relative animate-in fade-in zoom-in duration-300">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Voice Assistant</h2>
          <p className="text-muted-foreground">Tap the microphone to speak</p>
        </div>

        <div className="flex justify-center mb-6">
          <button
            onClick={handleVoiceCommand}
            className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${
              isListening
                ? 'bg-destructive animate-pulse shadow-lg shadow-destructive/50'
                : 'bg-primary hover:bg-primary/90 shadow-lg'
            }`}
          >
            <Mic className="w-10 h-10 text-primary-foreground" />
          </button>
        </div>

        {isListening && (
          <div className="text-center mb-4">
            <div className="flex justify-center gap-1 mb-2">
              <div className="w-2 h-8 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-12 bg-primary rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-6 bg-primary rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
              <div className="w-2 h-10 bg-primary rounded-full animate-pulse" style={{ animationDelay: '450ms' }} />
            </div>
            <p className="text-sm text-muted-foreground">Listening...</p>
          </div>
        )}

        {transcript && (
          <Card className="p-4 mb-4 bg-accent/50">
            <p className="text-sm font-medium mb-1">You said:</p>
            <p className="text-sm">{transcript}</p>
          </Card>
        )}

        <Card className="p-4 mb-6 bg-primary/5">
          <div className="flex items-start gap-2">
            <Volume2 className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm font-medium mb-1">Chef AI:</p>
              <p className="text-sm">{response}</p>
            </div>
          </div>
        </Card>

        <div>
          <p className="text-sm font-medium mb-2">Try saying:</p>
          <div className="space-y-2">
            {exampleCommands.map((command, index) => (
              <button
                key={index}
                onClick={() => {
                  setTranscript(command);
                  setResponse(`Processing your request: "${command}"...`);
                }}
                className="w-full text-left p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm"
              >
                "{command}"
              </button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VoiceAssistant;
