import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Taleemabad</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://taleemabad.com/'}
                        >
                            <h4>www.taleemabad.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Developer</h3>
                        <b>
                            <p>January 2025 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Contributing to an offline-first EdTech platform, delivering both web and mobile experiences. Built using React, Vite, DexieDB (for offline storage), TypeScript, Material Design components, and Emotion CSS.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Built the web application using React, Vite, DexieDB (for offline storage), TypeScript, Material Design components, Emotion CSS for styling, and Storybook for UI component development.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented data synchronization logic with PostHog analytics to seamlessly handle online/offline transitions, ensuring consistent user experience and data integrity across millions of learning sessions.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with backend and mobile teams to design RESTful APIs and define data models.
                        </p>
                    </li>
                    <li>
                        <p>
                            Converted the web app into a cross-platform mobile application using Capacitor and Cordova, integrating device features (camera, notifications, file storage) for offline use.
                        </p>
                    </li>
                    <li>
                        <p>
                            Wrote comprehensive unit and integration tests, and documented UI components in Storybook to accelerate feature development and onboarding.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Vacon.ai</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://vacon.ai/'}
                        >
                            <h4>www.vacon.ai</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer</h3>
                        <b>
                            <p>May 2023 - December 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Led the frontend development of an AI-powered platform that streamlines product development. Utilized Next.js, TypeScript, Firebase, Mixpanel, NextAuth, Axios, and Tailwind CSS.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed and maintained the frontend architecture using Next.js and TypeScript, ensuring type safety and optimal performance.
                        </p>
                    </li>
                    <li>
                        <p>
                            Integrated Firebase for backend services and user authentication, implementing NextAuth for secure authentication flows.
                        </p>
                    </li>
                    <li>
                        <p>
                            Utilized Mixpanel for analytics and user behavior tracking to improve product decisions and user experience.
                        </p>
                    </li>
                    <li>
                        <p>
                            Integrated GitHub for seamless workflow and collaborated with a Python FastAPI backend team.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented responsive design using Tailwind CSS and ensured cross-browser compatibility.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Silicon Solutions</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://siliconsols.com/'}
                        >
                            <h4>www.siliconsols.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer</h3>
                        <b>
                            <p>April 2022 - April 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Developed and maintained various client websites and web applications, working with diverse technology stacks and client requirements.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Built responsive web applications using modern frontend technologies including React, JavaScript, and CSS frameworks.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with clients to understand requirements and deliver custom solutions that met their business needs.
                        </p>
                    </li>
                    <li>
                        <p>
                            Maintained and optimized existing client websites to improve performance and user experience.
                        </p>
                    </li>
                    <li>
                        <p>
                            Worked with various backend technologies and APIs to create full-stack solutions.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Askolay</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://askolay.pk/'}
                        >
                            <h4>www.askolay.pk</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Junior Web Developer</h3>
                        <b>
                            <p>July 2021 - January 2022</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Assisted in the development of web-based educational tools, gaining foundational experience in educational technology and web development.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Contributed to the development of educational web applications using HTML, CSS, and JavaScript.
                        </p>
                    </li>
                    <li>
                        <p>
                            Assisted in creating interactive learning modules and educational content management systems.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with senior developers to learn best practices in web development and educational technology.
                        </p>
                    </li>
                    <li>
                        <p>
                            Participated in code reviews and testing to ensure quality and functionality of educational tools.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>FAST-NUCES</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://nu.edu.pk/'}
                        >
                            <h4>www.nu.edu.pk</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Teaching Assistant</h3>
                        <b>
                            <p>April 2021 - July 2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Assisted professors with undergraduate computer science courses, specifically focusing on e-commerce subject with theoretical concepts and web/app-based projects.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Assisted in teaching undergraduate e-commerce courses, helping students with theoretical concepts and web/app-based projects.
                        </p>
                    </li>
                    <li>
                        <p>
                            Provided guidance on e-commerce principles, digital business models, and web application development for e-commerce platforms.
                        </p>
                    </li>
                    <li>
                        <p>
                            Graded assignments and provided constructive feedback to help students improve their understanding of e-commerce concepts and web development skills.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with professors to develop course materials and improve teaching methodologies for e-commerce education.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
