import { useWipe } from './Wipe.jsx';

export default function WipeLink({ to, children }) {
  const { go } = useWipe();
  return (
    <span
      className="link nav-link"
      role="link"
      tabIndex={0}
      onClick={() => go(to)}
      onKeyDown={(e) => e.key === 'Enter' && go(to)}
    >
      {children}
    </span>
  );
}
