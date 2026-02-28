import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        Sudipta<span>.</span>
                    </Link>
                </div>

                <div className={styles.navLinks}>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#skills" className={styles.link}>Skills</Link>
                    <Link href="#experience" className={styles.link}>Experience</Link>
                    <Link href="#projects" className={styles.link}>Projects</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                </div>

                <div className={styles.navActions}>
                    <a href="/Sudipta_Baidya_Modern_Resume.pdf" download="Sudipta_Baidya_Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
                        Download Resume
                    </a>
                </div>
            </div>
        </nav>
    );
}
