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
                    Contributed to the development and feature enhancement of
                    the Taleemabad EdTech Platform, an offline-first application
                    for web and mobile.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Contributed to an offline-first EdTech platform,
                            delivering both web and mobile experiences using
                            React, Vite, DexieDB, TypeScript, Material Design
                            components, and Emotion CSS.
                        </p>
                    </li>
                    <li>
                        <p>
                            Assisted in maintaining the cross-platform mobile
                            version built with Capacitor and Cordova.
                        </p>
                    </li>
                    <li>
                        <p>
                            Enhanced data synchronization logic using React,
                            TypeScript, and DexieDB to deliver a seamless user
                            experience in low-connectivity environments.
                        </p>
                    </li>
                    <li>
                        <p>
                            Integrated PostHog analytics for comprehensive user
                            behavior tracking and performance monitoring across
                            millions of learning sessions.
                        </p>
                    </li>
                    <li>
                        <p>
                            Documented UI components in Storybook and assisted
                            with the mobile version built with Capacitor and
                            Cordova.
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
                    Led the frontend development for multiple AI-powered
                    platforms, including ProdKit.AI and an AI-based Healthcare
                    Management System.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed an AI job assistance software (Ramped) and
                            its accompanying Chrome extension using Next.js,
                            TypeScript, and Redux.
                        </p>
                    </li>
                    <li>
                        <p>
                            Utilized Next.js, TypeScript, Firebase, and Tailwind
                            CSS to build responsive, high-performance user
                            interfaces.
                        </p>
                    </li>
                    <li>
                        <p>
                            Integrated GitHub for seamless workflow and
                            collaborated with a Python FastAPI backend team.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented secure authentication with NextAuth.js,
                            integrated Stripe for payments, and configured
                            analytics with Mixpanel and Google Analytics.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with backend engineers to integrate
                            REST APIs and delivered a responsive,
                            high-performance UI across devices.
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
                    Developed the user interface for TextPilot, a POS business
                    solution, using React.js to manage customer communications.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed the UI for a POS business solution to
                            manage customer communication across multiple
                            platforms using Twilio.
                        </p>
                    </li>
                    <li>
                        <p>
                            Created an animated and responsive 3D Portfolio
                            Website using Three.js and WebGL.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built a full-stack Book Tracker App with separate
                            admin/user dashboards and a modern Company Portfolio
                            Website.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built a book tracking web application featuring
                            separate admin and user dashboards using React.js,
                            HTML, and CSS with authenticated API calls.
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
                    Assisted in the development and maintenance of various
                    web-based tools and websites for clients, gaining
                    foundational experience in web development.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Contributed to the development of web applications
                            using HTML, CSS, and JavaScript.
                        </p>
                    </li>
                    <li>
                        <p>
                            Assisted in creating interactive web modules and
                            content management systems.
                        </p>
                    </li>
                    <li>
                        <p>
                            Gained foundational experience in frontend
                            development practices and team collaboration.
                        </p>
                    </li>
                    <li>
                        <p>
                            Assisted in the development and maintenance of
                            various web-based tools and websites for clients.
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
                    Assisted professors with undergraduate computer science
                    courses, specifically focusing on E-Commerce course with
                    theoretical concepts and web/app-based projects.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Assisted in teaching undergraduate E-Commerce
                            course, helping students with theoretical concepts
                            and web/app-based projects.
                        </p>
                    </li>
                    <li>
                        <p>
                            Provided guidance on e-commerce principles, digital
                            business models, and web application development for
                            e-commerce platforms.
                        </p>
                    </li>
                    <li>
                        <p>
                            Graded assignments and provided constructive
                            feedback to help students improve their
                            understanding of e-commerce concepts and web
                            development skills.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with professors to develop course
                            materials and improve teaching methodologies for
                            e-commerce education.
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
