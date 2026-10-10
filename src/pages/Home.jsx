import WipeLink from '../components/WipeLink.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function Home() {
  usePageTitle('ashley rabino');

  return (
    <main className="relative z-[1] flex flex-1 flex-col items-center justify-center">
      <div className="absolute right-8 top-4 w-[clamp(100px,15vw,150px)] rotate-90 max-[812px]:right-2 max-[812px]:top-2">
        <img className="h-auto w-full" src="/transparent purple stars.png" alt="purple-stars" />
      </div>

      <div className="flex flex-col items-center">
        <div className="mt-[21rem] flex gap-40 max-[812px]:mb-16 max-[812px]:mt-[18rem] max-[812px]:gap-16">
          <WipeLink to="/about" className="text-[3.5rem] max-[812px]:text-[35px]">
            about
          </WipeLink>
          <WipeLink to="/projects" className="text-[3.5rem] max-[812px]:text-[35px]">
            projects
          </WipeLink>
        </div>
      </div>

      <div className="mt-40 flex justify-center">
        <nav className="flex gap-6">
          <a href="https://www.linkedin.com/in/ajvrabino" target="_blank" rel="noopener noreferrer">
            <img className="transition-opacity duration-300 hover:opacity-65 max-[812px]:h-[35px] max-[812px]:w-[35px]" width="45" height="45" src="/linkedin.png" alt="linkedin.com/in/ajvrabino" />
          </a>
          <a href="https://www.github.com/ajvrno" target="_blank" rel="noopener noreferrer">
            <img className="transition-opacity duration-300 hover:opacity-65 max-[812px]:h-[35px] max-[812px]:w-[35px]" width="45" height="45" src="/github.png" alt="github.com/ajvrno" />
          </a>
        </nav>
      </div>

      <div className="absolute bottom-[-7rem] left-1 w-[clamp(90px,20vw,200px)] rotate-[200deg] max-[812px]:left-1">
        <img className="h-auto w-full" src="/transparent purple 1 star.png" alt="purple-star" />
      </div>
    </main>
  );
}
