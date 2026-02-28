import Image from 'next/image';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.contactSection} id="contact">
            <div className="section-container">
                <h2 className="section-title">Get In Touch</h2>

                <div className={styles.content}>
                    <div className={`glass - panel ${styles.card} `}>
                        <h3>Let&apos;s Connect</h3>
                        <p className={styles.description}>
                            Whether you have a question about my work, an opportunity to discuss,
                            or just want to say hi, my inbox is always open.
                        </p>

                        <div className={styles.info}>
                            <div className={styles.infoItem}>
                                <div className={styles.icon}>
                                    <Image
                                        src="/godavari-logo.png"
                                        alt="Godavari Global University Logo"
                                        width={48}
                                        height={48}
                                        style={{ borderRadius: '50%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div>
                                    <strong>Currently Studying At</strong>
                                    <p>Godavari Global University</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <span className={styles.icon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="32" height="32">
                                        <path fill="#DD2E44" d="M18 35c-9.389 0-17-7.611-17-17S8.611 1 18 1s17 7.611 17 17-7.611 17-17 17z" />
                                        <path fill="#FFF" d="M18 28c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
                                        <path fill="#DD2E44" d="M18 23c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z" />
                                        <path fill="#99AAB5" d="M26.234 11.887L18 20.121l-3.535 3.535-1.414-1.414 7.071-7.071L28.356 6.94l2.121 2.121z" />
                                        <path fill="#55ACEE" d="M35.428 5.644L30.478.694c-1.127-1.127-3.237-.419-4.712 1.579L23.444 5.25l-.707.708 7.071 7.071.707-.707 2.977-2.321c2.316-1.805 3.063-3.23.193-4.357z" />
                                        <path fill="#CCD6DD" d="M16 20.364l-.946-.946L26.368 8.1l.946.947z" />
                                    </svg>
                                </span>
                                <div>
                                    <strong>Seeking</strong>
                                    <p>Software Engineering Internships & Roles</p>
                                </div>
                            </div>
                        </div>

                        <form action="https://api.web3forms.com/submit" method="POST" className={styles.contactForm}>
                            <input type="hidden" name="access_key" value="5bcf9159-cb53-4ff7-9570-3f3846292bd2" />

                            <div className={styles.formGroup}>
                                <label htmlFor="name" className={styles.label}>Name</label>
                                <input type="text" id="name" name="name" required className={styles.input} placeholder="John Doe" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Email Address</label>
                                <input type="email" id="email" name="email" required className={styles.input} placeholder="john@example.com" />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Message</label>
                                <textarea id="message" name="message" required className={styles.textarea} placeholder="Hello Sudipta, I'd like to discuss..."></textarea>
                            </div>

                            {/* Optional: Add a hidden subject field for the email */}
                            <input type="hidden" name="subject" value="New Contact Form Submission from your Portfolio" />

                            {/* Optional: Add a redirect URL after successful submission */}
                            {/* <input type="hidden" name="redirect" value="https://web3forms.com/success" /> */}

                            <button type="submit" className={styles.submitBtn}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
