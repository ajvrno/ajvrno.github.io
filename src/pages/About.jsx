import BottomNav from '../components/BottomNav.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

export default function About() {
  usePageTitle('about | ashley rabino');

  return (
    <main className="mx-auto mt-8 flex w-full max-w-[1200px] flex-1 flex-col gap-20 max-[812px]:mt-0 max-[812px]:px-8">
      <div className="mt-20 flex items-center gap-16 max-[812px]:mb-0 max-[812px]:flex-col max-[812px]:gap-8 max-[812px]:text-center">
        {/* PROFILE PICTURE */}
        <div className="relative w-[400px] shrink-0 max-[812px]:w-[250px]">
          <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[50%/50%]">
            <img className="h-full w-full object-cover" src="/HEADSHOT.JPG" alt="ashley's headshot" />
          </div>
          <div className="absolute right-[-4.5rem] top-[-3rem] z-[1] w-[120px] rotate-90 max-[812px]:right-[-4rem] max-[812px]:top-[-5rem]">
            <img className="h-auto w-full" src="/transparent purple stars.png" alt="decorative stars" />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="flex flex-1 flex-col gap-6 py-0 pr-20 pl-8 max-[812px]:p-0">
          <h1 className="text-right text-[3.5rem] font-semibold max-[812px]:text-[2.5rem]">
            hey, i'm <em className="italic">ashley</em>!
          </h1>

          <p className="text-justify text-2xl leading-[1.6] max-[812px]:text-[1.2rem]">
            i'm a recent computer science graduate from University of Maryland, Baltimore
            County. i'm a creatively-driven and curious person, and i'm always looking to challenge
            what i already know. my current areas of interest include{' '}
            <em className="font-semibold italic">full-stack development</em> and{' '}
            <em className="font-semibold italic">cybersecurity</em>. if you'd like to learn
            more about me, feel free to explore my projects below, check out my{' '}
            <a
              className="cursor-pointer text-[1.5rem] italic font-semibold leading-[1.6] no-underline transition-colors duration-300 hover:text-wisteria active:text-lilac max-[812px]:text-[1.2rem]"
              href="https://www.linkedin.com/in/ajvrabino/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            , or contact me via{' '}
            <a className="cursor-pointer text-[1.5rem] italic font-semibold leading-[1.6] no-underline transition-colors duration-300 hover:text-wisteria active:text-lilac max-[812px]:text-[1.2rem]" href="mailto:ashleyjanellerabino@yahoo.com">
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
