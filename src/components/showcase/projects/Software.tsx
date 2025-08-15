import React from 'react';
import ResumeDownload from '../ResumeDownload';
import tbd from '../../../assets/pictures/tbd.png';
import ramped from '../../../assets/pictures/ramped.png';
import zebramed from '../../../assets/pictures/zebramed.png';
import rampedext from '../../../assets/pictures/ramped-ext.png';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Taleemabad EdTech Platform</h2>
                <br />
                <p>
                    Contributed to the development and feature enhancement of an
                    offline-first EdTech platform, delivering both web and
                    mobile experiences. This project focused on improving data
                    synchronization logic to ensure seamless user experience in
                    low-connectivity environments.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={tbd} style={styles.image} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Offline-first EdTech platform
                            demonstration showing data synchronization between
                            local and server storage.
                        </sub>
                    </p>
                </div>
                <p>
                    The platform was built using React, Vite, DexieDB for
                    offline storage, TypeScript, Material Design components, and
                    Emotion CSS. I enhanced data synchronization logic using
                    React, TypeScript, and DexieDB to deliver a seamless user
                    experience in low-connectivity environments.
                </p>
                <br />
                <p>
                    Key technical achievements include integrating PostHog
                    analytics for comprehensive user behavior tracking and
                    performance monitoring across millions of learning sessions,
                    documenting UI components in Storybook, and assisting with
                    the mobile version built with Capacitor and Cordova.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li>React, Vite, TypeScript</li>
                    <li>DexieDB (offline storage)</li>
                    <li>Material Design, Emotion CSS</li>
                    <li>Capacitor, Cordova (mobile)</li>
                    <li>PostHog Analytics</li>
                    <li>Storybook (UI components)</li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Ramped — AI Job Assistance Software</h2>
                <br />
                <p>
                    Developed an AI-based job assistance software including a
                    Chrome extension to help users optimize their job search and
                    application process. The project combines web application
                    development with browser extension technology to provide
                    comprehensive job search assistance.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={ramped} style={styles.image} alt="" />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> Ramped AI job assistance
                                platform interface showing resume builder and
                                job matching features.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    The system includes intelligent resume analysis, job
                    matching algorithms, and automated application tracking. I
                    utilized Next.js, TypeScript, Firebase, and Tailwind CSS to
                    build responsive, high-performance user interfaces with
                    secure authentication using NextAuth.js.
                </p>
                <br />
                <p>
                    Key technical achievements include implementing secure
                    authentication with NextAuth.js, integrating Stripe for
                    payments, configuring analytics with Mixpanel and Google
                    Analytics, and collaborating with backend engineers to
                    integrate REST APIs for a responsive, high-performance UI
                    across devices.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li>Next.js, TypeScript, Redux</li>
                    <li>Firebase (backend services)</li>
                    <li>Tailwind CSS</li>
                    <li>NextAuth.js, Stripe</li>
                    <li>Mixpanel, Google Analytics</li>
                </ul>
            </div>
            <div className="text-block">
                <h2>ProdKit.AI — Frontend Team Lead</h2>
                <br />
                <p>
                    Led frontend development of an AI platform for project
                    estimation and tech stack recommendations. This project
                    involved building a sophisticated AI-powered application
                    that helps teams make informed decisions about project scope
                    and technology choices.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={zebramed} style={styles.image} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> ProdKit.AI platform interface
                            showing AI-powered project estimation and tech stack
                            recommendations.
                        </sub>
                    </p>
                </div>
                <p>
                    As the Frontend Team Lead, I was responsible for
                    architecting the entire frontend system using Next.js,
                    TypeScript, Firebase, and Tailwind CSS. The platform
                    integrates with various AI services to provide intelligent
                    project estimations and technology recommendations based on
                    project requirements and constraints.
                </p>
                <br />
                <p>
                    The project required deep understanding of AI integration,
                    real-time data processing, and creating intuitive user
                    interfaces for complex AI-driven features. I also
                    implemented comprehensive testing strategies and
                    documentation to ensure maintainability and scalability.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li>Next.js, TypeScript</li>
                    <li>Firebase (backend services)</li>
                    <li>Tailwind CSS</li>
                    <li>AI/ML Integration</li>
                    <li>Real-time data processing</li>
                </ul>
            </div>
            <div className="text-block">
                <h2>AI-based Healthcare Management System</h2>
                <br />
                <p>
                    Spearheaded development of a comprehensive healthcare
                    management web application with role-based dashboards, video
                    calls, and real-time chat functionality. This project
                    addressed critical needs in healthcare technology by
                    providing secure, HIPAA-compliant communication and
                    management tools.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={rampedext} style={styles.image} alt="" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 4:</b> Healthcare management system
                            dashboard showing role-based interfaces and
                            real-time communication features.
                        </sub>
                    </p>
                </div>
                <p>
                    The system features role-based dashboards for different
                    healthcare professionals, secure video calling capabilities,
                    and real-time chat functionality. I implemented Next.js and
                    TypeScript for the frontend, integrated Firebase for backend
                    services, and ensured all communications meet healthcare
                    security standards.
                </p>
                <br />
                <p>
                    Key features include user authentication and authorization,
                    real-time messaging, video conferencing integration, and
                    comprehensive data management for healthcare providers. The
                    system was designed with scalability and security as top
                    priorities.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li>Next.js, TypeScript</li>
                    <li>Firebase (authentication & database)</li>
                    <li>Real-time communication</li>
                    <li>Video calling integration</li>
                    <li>Role-based access control</li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
