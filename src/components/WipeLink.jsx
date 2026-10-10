import { useWipe } from './Wipe.jsx';

export default function WipeLink({ to, children, className = '' }) {
  const { go } = useWipe();
  return (
    <span
      className={`cursor-pointer font-semibold italic no-underline transition-colors duration-300 hover:text-wisteria active:text-lilac ${className}`}
      role="link"
      tabIndex={0}
      onClick={() => go(to)}
      onKeyDown={(e) => e.key === 'Enter' && go(to)}
    >
      {children}
    </span>
  );
}
