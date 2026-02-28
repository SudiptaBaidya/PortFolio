import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      {/* Simple Footer built-in */}
      <footer style={{
        textAlign: 'center',
        padding: '40px 24px',
        borderTop: '1px solid var(--glass-border)',
        marginTop: '60px',
        color: 'var(--text-secondary)',
        fontSize: '0.95rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '16px' }}>
          <a href="https://github.com/SudiptaBaidya" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>GitHub</a>
          <a href="https://www.linkedin.com/in/sudipta-baidya-216608332/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>LinkedIn</a>
        </div>
        <p>© {new Date().getFullYear()} Sudipta Baidya. All rights reserved.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '8px', opacity: 0.7 }}>Built with Next.js & Custom CSS</p>
      </footer>
    </main>
  );
}
