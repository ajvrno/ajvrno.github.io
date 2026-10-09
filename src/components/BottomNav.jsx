import WipeLink from './WipeLink.jsx';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <WipeLink to="/home">home</WipeLink>
      <WipeLink to="/about">about</WipeLink>
      <WipeLink to="/projects">projects</WipeLink>
    </nav>
  );
}
