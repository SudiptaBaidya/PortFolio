import styles from './Skills.module.css';

export default function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2496ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="rgba(36,150,237,0.1)"></rect><line x1="2" y1="20" x2="22" y2="20"></line><path d="M4 17h16v3H4z"></path></svg>,
            skills: [
                { name: "Java", iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><path fill="#f89820" d="M83.4 69.2c-5.9 3.1-14.7 4.1-23.7 4.1-10.3 0-21.7-1.1-26.6-5.8 5-1.5 15.6-2.2 28.5-2.2 4.4 0 16.5-.1 21.8 3.9" /><path fill="#5382a1" d="M102.7 73c-6.8 6.5-26 13.9-57 13.9-20.9 0-35.8-3.7-39.7-10.6-2.5-4.5.3-9.5 5.9-12.7 9.8-5.6 28.9-8.4 46.8-8.4 12.3 0 25.4 1.2 32.7 3.6-4.5-1.5-10.8-2.5-18.7-3.1-6.1-.5-13-.7-20.2-.7-19.4 0-41.2 2.5-51.1 9.4-4.8 3.3-6.5 7.6-4.8 11.2 4.4 9 24.3 14 53.6 14 30.1 0 49.3-6.3 54.4-12.2-1.7-.6-4-.9-1.9-4.4" /><path fill="#5382a1" d="M80.6 44.5c4.7 1.5 8.1 3.5 10 5.4v.1c-.2.5-.5.9-.9 1.3-4.7-6-20.3-8.8-38.6-8.8-4.3 0-8.5.2-12.5.6 5.8-1 12.5-1.6 20.3-1.6 7.4.1 14.8 1 21.7 3" /><path fill="#f89820" d="M36.1 27c-.8 6.1 8.5 13.3 17.5 18 2.2-6.5-6.7-14.3-11.6-18.4-1.3-1.1-2.9-2-4.9-3.2-1.4 1-1.2 2.6-1 3.6" /><path fill="#5382a1" d="M37.3 22c-.6 4.7 3.3 9.4 6 12.8.2.2.4.5.6.7 4.9 5.8 12.8 10.8 22.1 14.3.4-1.4.6-2.9.5-4.5C53.6 40.5 44 32.7 39 25c-1.3-2-2.3-4-2.8-5.8 1.9 2 4.1 4 6.7 6.1 4.5 3.5 12.4 10 11.4 16.2 9.1-3 15.5-8.4 18.2-14.8 1.4-3.3 1.5-6.8.5-9.8-1.5-4.4-5.3-7.5-9.1-9.9-7-4.4-13.8-6.1-17.7-6.5 3.5 1 10.3 3.6 15 8.5 4.3 4.5 5.8 10.6 3.6 15.6-2.1 4.8-7.5 9-14 11.9 1-.9 1.9-2 2.6-3.1 3-4.7 3.2-11-.6-15.6-3.4-4-8.8-6.3-13.5-7.4-6.4-1.6-12.8-.7-16.7 1-.9.5-2 1.3-2.6 2.3" /></svg> },
                { name: "Python", iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><path fill="#3776aB" d="M63.9 4.3C31 4.3 27 19.3 27 19.3v20.4H64v6H21.5S4.3 43.1 4.3 62.7c0 19.6 15 22.5 15 22.5h9v-13s-.2-15 15.1-15h20.5s14.8-1.1 14.8-13.9v-24s1.2-15-14.8-15H63.9zm-16.1 10c3 0 5.4 2.4 5.4 5.4s-2.4 5.4-5.4 5.4-5.4-2.4-5.4-5.4 2.4-5.4 5.4-5.4z" /><path fill="#FFD343" d="M64.4 123.7c33 0 36.6-15 36.6-15V88.2H64.4v-6h42.4s17.2 2.6 17.2-22.1c0-19.6-14.9-22.5-14.9-22.5h-9v13s.2 15-15 15H64.4s-14.8 1.1-14.8 13.9v24s-1.2 15 14.8 15h0zm16.1-10.1c-3 0-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4 5.4 2.4 5.4 5.4-2.4 5.4-5.4 5.4z" /></svg> },
                { name: "SQL", iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><path fill="#0275D8" d="M64 4c-33 0-59.8 13.5-59.8 30v60C4.2 110.5 31 124 64 124s59.8-13.5 59.8-30V34C123.8 17.5 97 4 64 4zm0 21.3c26.4 0 45.4 8.7 45.4 13.7 0 5-19 13.7-45.4 13.7S18.6 44.1 18.6 39c0-5.1 19-13.7 45.4-13.7zm0 53.4c-22 0-39-6.4-45-10.8v-7.9c6 4.3 23 10.7 45 10.7s39-6.4 45-10.7v7.9c-6 4.4-23 10.8-45 10.8zM19 70.3C25 74.6 42 81 64 81s39-6.4 45-10.7v7.9c-6 4.4-23 10.8-45 10.8-22 0-39-6.4-45-10.8v-7.9z" /></svg> }
            ]
        },
        {
            title: "Web Development",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="rgba(0,191,255,0.1)"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
            skills: [
                { name: "HTML", iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><path fill="#E34F26" d="M12.4 8l9.1 101.9L63.9 120l42.4-10.1L115.6 8H12.4zm82.8 45.4l-1.5 16.5H62v-16.5h33.2zM62 38.6H84L82.6 23H48.4zm-22.9 0l1.4 16.5H62V38.6H39.1zM62 90.1v15.9l19.8-5L83 83.9H62v6.2zM36.3 71H62v16.5h-21l-1.9-20.7z" /></svg> },
                { name: "CSS", iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><path fill="#1572B6" d="M12.4 8l9.1 101.9L63.9 120l42.4-10.1L115.6 8H12.4zm82.8 45.4l-1.5 16.5H62v-16.5h33.2zM62 38.6H84L82.6 23H48.4zm-22.9 0l1.4 16.5H62V38.6H39.1zM62 90.1v15.9l19.8-5L83 83.9H62v6.2zM36.3 71H62v16.5h-21l-1.9-20.7z" /></svg> },
                { name: "JavaScript", iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><path fill="#F7DF1E" d="M0 0h128v128H0z" /><path d="M72.2 111c-6.8 5-18.4 8.7-30.8 8.7-18.5 0-29.3-8.8-38.3-21.7l14.2-10.3c6 8.7 13.4 14.8 23.3 14.8 8.7 0 14.7-4.6 14.7-11.2 0-7.3-5-10.2-22.3-17.5-19.8-8-32-17.4-32-34 0-17 13.3-31 35.3-31 14.2 0 24.3 4.3 32 12.3l-13 11.2c-5.4-5.3-12.7-8-20.2-8-8 0-13 4-13 10s4.8 9.3 21 16c21.5 8.7 33.3 19 33.3 35.6-.2 15.6-11.8 30.1-34.2 30.1m50.4-31.5H104v37.4H85.4V8.3h37.2v17H104v54h42.2L116 120h-7v-38z" /></svg> },
                { name: "Full Stack Dev", iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg> }
            ]
        },
        {
            title: "Backend & Database",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#683995" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="rgba(104,57,149,0.1)"></path><path d="M5 12h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" fill="rgba(104,57,149,0.1)"></path><line x1="8" y1="8" x2="16" y2="8"></line><line x1="8" y1="16" x2="16" y2="16"></line></svg>,
            skills: [
                { name: "MongoDB", iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><path fill="#47A248" d="M54.5 90c-3.1 3-5.3 15.6-5.3 15.6-1.5-1-4.2-2.3-4.2-2.3-.3-5.2-.6-14.7-.6-14.7-8-7.5-15.1-40.3-6.2-61.9 3.2-8 16.9-20.8 23.7-25 1 2 2.3 8.3 2.3 8.3 3.6 17.6 1.4 39.3-5 56.4-1.8 4.7-4.7 23.6-4.7 23.6zm13 10.9s1.6 3 2.7 6.1c0 0 .5-.2 1.2-.5 1-4 3.7-18.7 4.2-25.1 8-11.4 16.4-33 11.9-52.9-1.9-8.3-9-19-12.8-21.7.9 1 1.7 5.1 1.7 5.1 2.2 14.5 1.5 35.1-4.1 53-1.6 5.5-4.8 36-4.8 36M61.9 128c-2.3-3.6-5.2-12-5.2-12s5 .5 6.9.5c1.6 0 3.3-.2 3.3-.2S64 124 61.9 128" /></svg> },
                { name: "Docker", iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><path fill="#2496ED" d="M112.9 44.8c-1.6-13-17.1-12.2-17.1-12.2-.2-5.5-4.5-5.9-4.5-5.9H74.5v11.8h16.8v11.8h11.8s-.3 3.2 4.3 3.2c4.1 0 5.5-8.7 5.5-8.7zm-22.1-17.7H74.5V15.4H90.8v11.7zm-17.7 29.5H56.8V44.8H73.1v11.8zM55.4 44.8V33H39.1v11.8h16.3zm0-11.8V21.3H39.1V33h16.3zm17.7-11.7H56.8V9.5H73.1v11.8zm-17.7 0V9.5H39.1v11.8h16.3zM37.8 44.8V33H21.5v11.8h16.3zm0-11.8V21.3H21.5V33h16.3zm17.6-11.7V9.5H39.1v11.8h16.3zM14.9 84.8H2.1v24.2H14.9V84.8zM2 61c.4 8.7 4.3 13.9 4.3 13.9s4.8-1 9.4-4.8c4.3 1.9 8.7 2.9 13.3 2.9 20.3 0 36.7-16.4 36.7-36.7h11.8c0 26.8-21.7 48.5-48.5 48.5-9.6 0-18.6-2.5-26.6-7-.8.5-1.5 1-2.4 1.5.5-19.4 6-25.2 6-25.2.2-5.3-3.6-6-4-6.4C4.1 48 3.5 54.3 3.5 54.3s-1.9 1.6-1.5 6.7" /><path fill="#2496ED" d="M126.9 73.1C124.3 64.9 119.5 58.6 119.5 58.6s-1.9 1.5-1.5 6.7c.4 5.3-3.5 6-3.9 6.4 0 0 5.5 5.8 4 25.2-.2-1.2-1-2.5-1.9-3.8-3.4 3.4-55.7 3.5-55.7 3.5-2.2 0-3.9 1.8-3.9 3.9 0 2.2 1.8 3.9 3.9 3.9h66.9c-2.3-5-6.2-9.6-11.3-13.4" /></svg> }
            ]
        },
        {
            title: "Tools & Extras",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9E7FCF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" fill="rgba(158,127,207,0.1)"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
            skills: [
                { name: "VS Code", iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><path fill="#0065A9" d="M88.5 10L31 52l57.5 42z" /><path fill="#007ACC" d="M11 39.5L88.5 10v84L11 65v-25.5H11z" /><path fill="#0065A9" d="M11 90.5l46.5-34L88.5 94 11 90.5z" /><path fill="#1F9CF0" d="M88.5 10l28.5 21v66L88.5 94V10H88.5z" /><path fill="#007ACC" d="M88.5 94L11 90.5 57.5 56.5 88.5 94z" /></svg> },
                { name: "Figma", iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><path fill="#1ABCFE" d="M36.1 63.6l-.1-.4h-.3V96.4v.1c0 9 7.3 16.3 16.3 16.3 4.5 0 8.6-1.8 11.5-4.8a16.3 16.3 0 004.8-11.5V63.6H36.1z" /><path fill="#0ACF83" d="M68.3 63.6H100v-.3l-.3-.1a16.2 16.2 0 00-11.2-4.5h-.1c-8.9.1-16.1 7.2-16.1 16.1v4c0 3 .1 3.5.1 3.5v-3.5" /><path fill="#FF7262" d="M68.3 0v31.8h31.7a15.9 15.9 0 10-31.7-31.8" /><path fill="#F24E1E" d="M36.3 0a15.9 15.9 0 1032 0H36.3" /><path fill="#A259FF" d="M36.3 31.8a15.9 15.9 0 1032 0H36.3" /></svg> },
                { name: "AI", iconSvg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><path d="M7.5 4.21l4.5 2.6 4.5-2.6"></path><path d="M7.5 19.79V14.6L3 12"></path><path d="M21 12l-4.5 2.6v5.19"></path><path d="M3.27 6.96L12 12.01l8.73-5.05"></path><path d="M12 22.08V12"></path></svg> }
            ]
        }
    ];

    return (
        <section className={styles.skillsSection} id="skills">
            <div className="section-container">
                <h2 className="section-title">Technical Skills</h2>

                <div className={styles.grid}>
                    {skillCategories.map((category, index) => (
                        <div key={index} className={`glass-panel ${styles.skillCard}`}>
                            <div className={styles.cardHeader}>
                                <span className={styles.icon}>{category.icon}</span>
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                            </div>
                            <div className={styles.badges}>
                                {category.skills.map((skill, i) => (
                                    <div key={i} className={styles.skillContainer}>
                                        <div className={styles.iconWrapper}>
                                            {skill.iconSvg}
                                        </div>
                                        <span className={styles.skillName}>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
