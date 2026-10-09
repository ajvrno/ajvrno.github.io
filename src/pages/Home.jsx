import WipeLink from '../components/WipeLink.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function Home() {
  usePageTitle('ashley rabino');

  return (
    <main className="home-container">
      <div className="hstar-top">
        <img src="/transparent purple stars.png" className="stars" alt="purple-stars" />
      </div>

      <div className="h-center">
        <div className="nav-links">
          <WipeLink to="/about">about</WipeLink>
          <WipeLink to="/projects">projects</WipeLink>
        </div>
      </div>

      <div className="buttons">
        <nav className="button-links">
          <a href="https://www.linkedin.com/in/ajvrabino" target="_blank" rel="noopener noreferrer">
            <img width="45" height="45" src="/linkedin.png" alt="linkedin.com/in/ajvrabino" />
          </a>
          <a href="https://www.github.com/ajvrno" target="_blank" rel="noopener noreferrer">
            <img width="45" height="45" src="/github.png" alt="github.com/ajvrno" />
          </a>
        </nav>
      </div>

      <div className="hstar-bottom">
        <img src="/transparent purple 1 star.png" className="star" alt="purple-star" />
      </div>
    </main>
  );
}
