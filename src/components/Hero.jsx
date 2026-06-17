import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 35);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, started, text]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-[#915EFF]"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

const codeLines = [
  { text: 'const developer = {', color: '#c678dd' },
  { text: '  name: "Atharva Tiwari",', color: '#98c379' },
  { text: '  role: "AI/ML Eng | Full Stack | Data Science",', color: '#98c379' },
  { text: '  skills: ["Python", "React", "AI/ML"],', color: '#e5c07b' },
  { text: '  passion: "Building AI Solutions",', color: '#98c379' },
  { text: '  college: "KNIT Sultanpur",', color: '#98c379' },
  { text: '};', color: '#c678dd' },
  { text: '', color: '#abb2bf' },
  { text: 'developer.createAwesome();', color: '#61afef' },
];

const CodeTerminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        background: 'rgba(21, 16, 48, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(145, 94, 255, 0.3)',
        borderRadius: '16px',
        padding: '0',
        maxWidth: '520px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(145, 94, 255, 0.15), 0 0 40px rgba(145, 94, 255, 0.05)',
        overflow: 'hidden',
      }}
    >
      {/* Terminal header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '14px 18px',
        borderBottom: '1px solid rgba(145, 94, 255, 0.15)',
        background: 'rgba(5, 8, 22, 0.6)',
      }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
        <span style={{ marginLeft: '12px', color: '#aaa6c3', fontSize: '13px', fontFamily: 'monospace' }}>
          portfolio.js
        </span>
      </div>

      {/* Code content */}
      <div style={{ padding: '20px', fontFamily: '"Fira Code", "Courier New", monospace', fontSize: '14px', lineHeight: '1.8' }}>
        {codeLines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', gap: '16px' }}
          >
            <span style={{ color: '#636d83', userSelect: 'none', minWidth: '20px', textAlign: 'right' }}>
              {index + 1}
            </span>
            <span style={{ color: line.color }}>{line.text}</span>
          </motion.div>
        ))}
        {visibleLines >= codeLines.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            style={{ color: '#915EFF', marginLeft: '36px' }}
          >
            █
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};

/* Floating particles */
const Particles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -80, -160],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: p.id % 3 === 0 ? '#915EFF' : p.id % 3 === 1 ? '#00cea8' : '#f272c8',
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section
      style={{ backgroundColor: '#050816', position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}
    >
      {/* Gradient orbs in background */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%', width: '500px', height: '500px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(145,94,255,0.15) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-10%', width: '400px', height: '400px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,206,168,0.1) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <Particles />

      {/* Main content */}
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX}`}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '100vh',
          gap: '40px',
          flexWrap: 'wrap',
          paddingTop: '120px',
          paddingBottom: '40px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Left side - Text */}
        <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#915EFF' }} />
              <div style={{ width: '4px', height: '280px', background: 'linear-gradient(180deg, #804dee 0%, rgba(60, 51, 80, 0) 100%)' }} />
            </div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`${styles.heroHeadText}`}
                style={{ color: '#ffffff' }}
              >
                Hi, I'm{' '}
                <span style={{ color: '#915EFF' }}>Atharva Tiwari</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`${styles.heroSubText}`}
                style={{ marginTop: '8px', color: '#aaa6c3' }}
              >
                <TypewriterText
                  text="Undergraduate at KNIT SULTANPUR | AI ML | Google Developer Group Executive | PTSC Member | Aspiring Software Developer | DSA | Web Development"
                  delay={800}
                />
              </motion.p>
            </div>
          </div>
        </div>

        {/* Right side - Code Terminal */}
        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
          <CodeTerminal />
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '40px', width: '100%', display: 'flex', justifyContent: 'center', zIndex: 10 }}>
        <a href='#about'>
          <div style={{
            width: '35px', height: '64px', borderRadius: '24px',
            border: '4px solid #aaa6c3', display: 'flex',
            justifyContent: 'center', alignItems: 'flex-start', padding: '8px',
          }}>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#aaa6c3' }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
