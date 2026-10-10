import WipeLink from '../components/WipeLink.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function Index() {
  usePageTitle('ashley rabino');

  return (
    <main className="relative flex flex-1 flex-col items-center justify-center p-8">
      <div className="absolute left-32 top-4 w-[clamp(100px,15vw,150px)] max-[812px]:left-[-0.25rem]">
        <img className="h-auto w-full" src="/transparent purple stars.png" alt="purple star" />
      </div>

      <div className="mt-28 max-w-[960px] text-justify">
        <h1 className="text-[60px] font-normal leading-[1.5] max-[812px]:text-[30px]">
          <span className="typing-text max-[812px]:text-[30px]">hey there!</span> im{' '}
          <em style={{ fontWeight: 600 }}>ashley rabino</em>, welcome to my website! im so glad
          you made it here. if you want to take a look at my site,{' '}
          <WipeLink to="/home" className="max-[812px]:text-[30px]">
            click here!
          </WipeLink>{' '}
          if not, thats okay too. see you around!
        </h1>
      </div>

      <div className="absolute bottom-[-6rem] right-24 w-[clamp(90px,20vw,200px)] max-[812px]:bottom-[-4rem] max-[812px]:right-[-0.5rem]">
        <img className="h-auto w-full" src="/transparent purple 1 star.png" alt="purple stars" />
      </div>
    </main>
  );
}
