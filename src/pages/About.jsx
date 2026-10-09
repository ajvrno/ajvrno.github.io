import BottomNav from '../components/BottomNav.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function About() {
  usePageTitle('about | ashley rabino');

  return (
    <main className="about-container">
      <div className="content-wrapper">
        {/* PROFILE PICTURE */}
        <div className="profile-section">
          <div className="profile-image">
            <img src="/HEADSHOT.JPG" alt="ashley's headshot" />
          </div>
          <div className="floating-stars">
            <img src="/transparent purple stars.png" alt="decorative stars" className="stars" />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="text-section">
          <h1 className="title">
            hey, i'm <em className="name">ashley</em>!
          </h1>

          <p className="description">
            i'm a recent computer science graduate from University of Maryland, Baltimore
            County. i'm a creatively-driven and curious person, and i'm always looking to challenge
            what i already know. my current areas of interest include{' '}
            <em className="highlight">full-stack development</em> and{' '}
            <em className="highlight">cybersecurity</em>. if you'd like to learn
            more about me, feel free to explore my projects below, check out my{' '}
            <a
              className="link contact"
              href="https://www.linkedin.com/in/ajvrabino/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            , or contact me via{' '}
            <a className="link contact" href="mailto:ashleyjanellerabino@yahoo.com">
              ashleyjanellerabino@yahoo.com
            </a>
            !
          </p>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
