import WipeLink from '../components/WipeLink.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function Index() {
  usePageTitle('ashley rabino');

  return (
    <main className="index-container">
      <div className="star-top">
        <img src="/transparent purple stars.png" alt="purple star" />
      </div>

      <div className="index-center">
        <h1 className="index-h1">
          <span className="typing-text">hey there!</span> im{' '}
          <em style={{ fontWeight: 600 }}>ashley rabino</em>, welcome to my website! im so glad
          you made it here. if you want to take a look at my site,{' '}
          <WipeLink to="/home">click here!</WipeLink> if not, thats okay too. see you around!
        </h1>
      </div>

      <div className="star-bottom">
        <img src="/transparent purple 1 star.png" alt="purple stars" />
      </div>
    </main>
  );
}
