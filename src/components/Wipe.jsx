import { createContext, useCallback, useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DURATION = 700; 
const WipeContext = createContext(null);

export const useWipe = () => useContext(WipeContext);

// phase: 'idle' -> 'cover' (purple slides up) -> route changes -> 'reveal' (slides out) -> 'idle'
export function WipeProvider({ children }) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState('idle');
  const busy = useRef(false);

  const go = useCallback(
    (to) => {
      if (busy.current) return;
      busy.current = true;
      setPhase('cover');

      setTimeout(() => {
        navigate(to);
        window.scrollTo(0, 0);
        setPhase('reveal');

        setTimeout(() => {
          setPhase('idle');
          busy.current = false;
        }, DURATION);
      }, DURATION);
    },
    [navigate]
  );

  return <WipeContext.Provider value={{ go, phase }}>{children}</WipeContext.Provider>;
}

export function WipeOverlay() {
  const { phase } = useWipe();
  const animationClass = phase === 'cover' ? 'wipe-cover' : phase === 'reveal' ? 'wipe-reveal' : '';
  return (
    <div
      id="wipe-overlay"
      className={`wipe-overlay pointer-events-none fixed inset-x-0 bottom-0 z-[9999] h-screen w-screen bg-wisteria ${animationClass}`}
    />
  );
}
