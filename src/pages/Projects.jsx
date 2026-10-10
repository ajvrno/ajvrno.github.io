import BottomNav from '../components/BottomNav.jsx';
import usePageTitle from '../hooks/usePageTitle.js';

const projects = [
  {
    title: 'OutTheGC',
    url: 'https://github.com/csumah/pjarcs-bitcamp-2025/tree/main',
    description: (
      <>
        a collaborative event planning web application that helps friend groups finally get
        plans <em>out the group chat.</em> implemented gemini api and google calendar
        for ai-generated event recommendations and automated scheduling.
      </>
    ),
    stack: 'Next.js, Tailwind CSS, Firebase',
  },
  {
    title: 'Posture Guardian',
    url: 'https://github.com/ajvrno/posture-guardian',
    description:
      'a posture monitoring web application that performs real-time body pose estimation and classifies user posture as "good" or "bad". implemented a chrome extension to provide users with active reminders.',
    stack: 'HTML, CSS, JavaScript, MediaPipe',
  },
  {
    title: 'Drop-In Tutoring Admin System',
    url: 'https://github.com/ajvrno/sp26atc', 
    description:
      'a full-stack web application to display real-time tutor availability on the UMBC ASC Drop-In Tutoring website, reducing miscommunication and increasing schedule visibility for students.',
    stack: 'React, HTML/CSS, PHP, MySQL',
  },
  {
    title: 'Feistel Block Cipher',
    url: 'https://github.com/ajvrno',
    description:
      'class project that implements a 16-round feistel block cipher in python  with a custom 4-bit S-box built from GF(2⁴) inversion and an affine transform.',
    stack: 'Python',
  },
];

export default function Projects() {
  usePageTitle('experience | ashley rabino');

  return (
    <main className="mx-auto w-full max-w-[1200px] flex-1 p-8 max-[812px]:p-6">
      <h1 className="mb-12 flex items-center justify-between font-semibold max-[812px]:mb-8 max-[812px]:flex-col max-[812px]:items-start max-[812px]:gap-2">
        <span className="text-[4rem] max-[812px]:text-[2.5rem]">my</span>
        <span className="text-[4rem] italic max-[812px]:text-[2.5rem]">projects</span>
      </h1>

      <div className="mb-12 grid grid-cols-2 gap-8 max-[812px]:grid-cols-1 max-[812px]:gap-6">
        {projects.map((p) => (
          <div className="relative rounded-[20px] bg-lavender p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-2.5 hover:shadow-[0_10px_20px_rgba(51,51,51,0.75)] max-[812px]:p-6" key={p.title}>
            <div className="relative">
              <h2 className="mb-4 pr-10 text-2xl italic font-semibold max-[812px]:text-xl">{p.title}</h2>
              <a href={p.url} className="absolute right-0 top-[-0.5rem] transition-opacity duration-300 hover:opacity-80" target="_blank" rel="noopener noreferrer">
                <img src="/github.png" alt={`${p.title} on GitHub`} width="40" height="40" />
              </a>
              <p className="p-5 text-[1.2rem] leading-[1.5] max-[812px]:text-base">{p.description}</p>
              <p className="p-5 text-[1.1rem]">{p.stack}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mb-12 flex justify-center max-[812px]:text-[0.9rem]">and more! click the github icon to view repositories</p>

      <BottomNav />
    </main>
  );
}
