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
    <main className="exp-container">
      <h1 className="exp-h1">
        <span className="my">my</span>
        <span className="experience">projects</span>
      </h1>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="card-content">
              <h2 className="project-title">{p.title}</h2>
              <a href={p.url} className="github-link" target="_blank" rel="noopener noreferrer">
                <img src="/public/github.png" alt={`${p.title} on GitHub`} width="40" height="40" />
              </a>
              <p className="project-description">{p.description}</p>
              <p className="tech-stack">{p.stack}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="info">and more! click the github icon to view repositories</p>

      <BottomNav />
    </main>
  );
}
