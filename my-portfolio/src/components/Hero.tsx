import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        Available for opportunities
                    </div>

                    <h1 className={styles.title}>
                        Building Scalable Web Experiences with <span className={styles.highlight}>Code & Creativity</span>
                    </h1>

                    <p className={styles.description}>
                        I design and develop full-stack web applications using modern technologies,
                        focusing on performance, scalability, and clean architecture.
                    </p>

                    <div className={styles.actions}>
                        <a href="#projects" className={styles.primaryBtn}>View Projects</a>
                        <a href="#contact" className={styles.secondaryBtn}>Contact Me</a>
                        <div className={styles.socialLinks}>
                            <a href="https://github.com/SudiptaBaidya" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/sudipta-baidya-216608332/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://x.com/Sudipta_Imao" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X (Twitter)">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={styles.directContactInfo}>
                        <a href="mailto:Sudiptab556677@gmail.com" className={styles.contactItemWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            Sudiptab556677@gmail.com
                        </a>
                        <a href="tel:+919233036532" className={styles.contactItemWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            +91 9233036532
                        </a>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <div className={styles.imageContainer}>
                        <div className={styles.imageMask}>
                            <Image
                                src="/profile.jpg"
                                alt="Sudipta Baidya"
                                width={400}
                                height={400}
                                className={styles.profileImage}
                                priority
                            />
                        </div>


                        {/* Decorative elements */}
                        <div className={`${styles.floatingElement} ${styles.element1}`}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb" /><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>
                                Next.js + React
                            </span>
                        </div>
                        <div className={`${styles.floatingElement} ${styles.element2}`}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2496ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                                Full Stack Dev
                            </span>
                        </div>
                        <div className={`${styles.floatingElement} ${styles.element3}`}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128"><path fill="#f89820" d="M83.4 69.2c-5.9 3.1-14.7 4.1-23.7 4.1-10.3 0-21.7-1.1-26.6-5.8 5-1.5 15.6-2.2 28.5-2.2 4.4 0 16.5-.1 21.8 3.9" /><path fill="#5382a1" d="M102.7 73c-6.8 6.5-26 13.9-57 13.9-20.9 0-35.8-3.7-39.7-10.6-2.5-4.5.3-9.5 5.9-12.7 9.8-5.6 28.9-8.4 46.8-8.4 12.3 0 25.4 1.2 32.7 3.6-4.5-1.5-10.8-2.5-18.7-3.1-6.1-.5-13-.7-20.2-.7-19.4 0-41.2 2.5-51.1 9.4-4.8 3.3-6.5 7.6-4.8 11.2 4.4 9 24.3 14 53.6 14 30.1 0 49.3-6.3 54.4-12.2-1.7-.6-4-.9-1.9-4.4" /><path fill="#5382a1" d="M80.6 44.5c4.7 1.5 8.1 3.5 10 5.4v.1c-.2.5-.5.9-.9 1.3-4.7-6-20.3-8.8-38.6-8.8-4.3 0-8.5.2-12.5.6 5.8-1 12.5-1.6 20.3-1.6 7.4.1 14.8 1 21.7 3" /><path fill="#f89820" d="M36.1 27c-.8 6.1 8.5 13.3 17.5 18 2.2-6.5-6.7-14.3-11.6-18.4-1.3-1.1-2.9-2-4.9-3.2-1.4 1-1.2 2.6-1 3.6" /><path fill="#5382a1" d="M37.3 22c-.6 4.7 3.3 9.4 6 12.8.2.2.4.5.6.7 4.9 5.8 12.8 10.8 22.1 14.3.4-1.4.6-2.9.5-4.5C53.6 40.5 44 32.7 39 25c-1.3-2-2.3-4-2.8-5.8 1.9 2 4.1 4 6.7 6.1 4.5 3.5 12.4 10 11.4 16.2 9.1-3 15.5-8.4 18.2-14.8 1.4-3.3 1.5-6.8.5-9.8-1.5-4.4-5.3-7.5-9.1-9.9-7-4.4-13.8-6.1-17.7-6.5 3.5 1 10.3 3.6 15 8.5 4.3 4.5 5.8 10.6 3.6 15.6-2.1 4.8-7.5 9-14 11.9 1-.9 1.9-2 2.6-3.1 3-4.7 3.2-11-.6-15.6-3.4-4-8.8-6.3-13.5-7.4-6.4-1.6-12.8-.7-16.7 1-.9.5-2 1.3-2.6 2.3" /></svg>
                                <svg style={{ marginLeft: '-4px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128"><path fill="#3776aB" d="M63.9 4.3C31 4.3 27 19.3 27 19.3v20.4H64v6H21.5S4.3 43.1 4.3 62.7c0 19.6 15 22.5 15 22.5h9v-13s-.2-15 15.1-15h20.5s14.8-1.1 14.8-13.9v-24s1.2-15-14.8-15H63.9zm-16.1 10c3 0 5.4 2.4 5.4 5.4s-2.4 5.4-5.4 5.4-5.4-2.4-5.4-5.4 2.4-5.4 5.4-5.4z" /><path fill="#FFD343" d="M64.4 123.7c33 0 36.6-15 36.6-15V88.2H64.4v-6h42.4s17.2 2.6 17.2-22.1c0-19.6-14.9-22.5-14.9-22.5h-9v13s.2 15-15 15H64.4s-14.8 1.1-14.8 13.9v24s-1.2 15 14.8 15h0zm16.1-10.1c-3 0-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4 5.4 2.4 5.4 5.4-2.4 5.4-5.4 5.4z" /></svg>
                                Java & Python
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
