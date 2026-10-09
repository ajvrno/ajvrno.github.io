import { Routes, Route, Navigate } from 'react-router-dom';
import { WipeProvider, WipeOverlay } from './components/Wipe.jsx';
import Index from './pages/Index.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';

export default function App() {
  return (
    <WipeProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

        {/* keep old .html links working */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/home.html" element={<Navigate to="/home" replace />} />
        <Route path="/about.html" element={<Navigate to="/about" replace />} />
        <Route path="/projects.html" element={<Navigate to="/projects" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <WipeOverlay />

      <footer>
        <small>© {new Date().getFullYear()} ashley rabino.</small>
      </footer>
    </WipeProvider>
  );
}
