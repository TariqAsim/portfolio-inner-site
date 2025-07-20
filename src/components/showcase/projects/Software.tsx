import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

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
                <h2>Taleemabad Offline-First EdTech Platform</h2>
                <br />
                <p>
                    Architected and implemented key modules of an offline-first learning platform supporting web and mobile experiences. This project was a significant technical challenge that required innovative solutions for data synchronization and offline functionality.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Offline-first EdTech platform demonstration showing data synchronization between local and server storage.
                        </sub>
                    </p>
                </div>
                <p>
                    The platform was built using React, Vite, DexieDB for offline storage, TypeScript, Material Design components, and Emotion CSS. I designed DexieDB schemas and sync algorithms to queue, batch, and resolve conflicts between local and server data, ensuring seamless user experience across millions of learning sessions.
                </p>
                <br />
                <p>
                    Key technical achievements include implementing data synchronization logic with PostHog analytics, developing interactive course modules and quiz engines, and integrating mobile-specific capabilities via Capacitor and Cordova for hands-on activities and offline downloads.
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
                <h2>ProdKit.AI — Frontend Team Lead</h2>
                <br />
                <p>
                    Led frontend development of an AI platform for project estimation and tech stack recommendations. This project involved building a sophisticated AI-powered application that helps teams make informed decisions about project scope and technology choices.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={saga} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> ProdKit.AI platform interface showing AI-powered project estimation and tech stack recommendations.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    As the Frontend Team Lead, I was responsible for architecting the entire frontend system using Next.js, TypeScript, Firebase, and Tailwind CSS. The platform integrates with various AI services to provide intelligent project estimations and technology recommendations based on project requirements and constraints.
                </p>
                <br />
                <p>
                    The project required deep understanding of AI integration, real-time data processing, and creating intuitive user interfaces for complex AI-driven features. I also implemented comprehensive testing strategies and documentation to ensure maintainability and scalability.
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
                    Spearheaded development of a comprehensive healthcare management web application with role-based dashboards, video calls, and real-time chat functionality. This project addressed critical needs in healthcare technology by providing secure, HIPAA-compliant communication and management tools.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={scroll} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Healthcare management system dashboard showing role-based interfaces and real-time communication features.
                        </sub>
                    </p>
                </div>
                <p>
                    The system features role-based dashboards for different healthcare professionals, secure video calling capabilities, and real-time chat functionality. I implemented Next.js and TypeScript for the frontend, integrated Firebase for backend services, and ensured all communications meet healthcare security standards.
                </p>
                <br />
                <p>
                    Key features include user authentication and authorization, real-time messaging, video conferencing integration, and comprehensive data management for healthcare providers. The system was designed with scalability and security as top priorities.
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
            <div className="text-block">
                <h2>Ramped — AI Job Assistance Software</h2>
                <br />
                <p>
                    Developed an AI-based job assistance software including a Chrome extension to help users optimize their job search and application process. The project combines web application development with browser extension technology to provide comprehensive job search assistance.
                </p>
                <br />
                <p>
                    The system includes intelligent resume analysis, job matching algorithms, and automated application tracking. The Chrome extension provides real-time assistance while browsing job sites, offering suggestions and automating repetitive tasks in the job search process.
                </p>
                <br />
                <p>
                    Key technical challenges included integrating AI services for resume parsing and job matching, developing a Chrome extension with proper permissions and security, and creating seamless integration between the web application and browser extension.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li>Next.js, TypeScript</li>
                    <li>Redux (state management)</li>
                    <li>Chrome Extension API</li>
                    <li>Python APIs (AI services)</li>
                    <li>AI/ML Integration</li>
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
