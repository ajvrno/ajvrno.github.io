import WipeLink from './WipeLink.jsx';

export default function BottomNav() {
  return (
    <nav className="mt-12 flex justify-center gap-12 text-xl">
      <WipeLink to="/home">
        home
      </WipeLink>
      <WipeLink to="/about">
        about
      </WipeLink>
      <WipeLink to="/projects">
        projects
      </WipeLink>
    </nav>
  );
}
