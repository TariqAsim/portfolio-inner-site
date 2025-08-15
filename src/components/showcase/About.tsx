import React from 'react';
import me from '../../assets/pictures/bg-placeholder.jpg';
import meNow from '../../assets/pictures/me-bg.png';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Tariq Asim</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a Software Engineer with over three years of expertise
                    in developing robust web and mobile applications using
                    Next.js, React.js, and TypeScript. I graduated from
                    FAST-NUCES with my BS in Computer Science in 2021.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:tariqasim96@gmail.com">
                        tariqasim96@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I have had a curiosity about how things
                    worked. This naturally led me to become absolutely obsessed
                    with technology and I fell in love with building things. My
                    journey in software development began during my university
                    years at FAST-NUCES, where I first started exploring web
                    development and programming concepts.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    I started programming more seriously during my university
                    years, initially learning web development and working on
                    various academic projects. I went on to do a ton of passion
                    projects and gained experience in modern web technologies
                    like React, Next.js, and TypeScript. During my final
                    semester, I briefly worked as a Teaching Assistant for an
                    E-Commerce course at FAST-NUCES, helping students with
                    theoretical concepts and web-based projects.
                </p>
                <br />
                <p>
                    After graduating in 2021, I began my professional career as
                    a Junior Web Developer at Askolay, where I assisted in the
                    development of various web-based tools and websites for
                    clients, gaining foundational experience in web development.
                    I then moved to Silicon Solutions as a Software Engineer,
                    where I developed user interfaces for business solutions,
                    created 3D websites using Three.js and WebGL, and built
                    full-stack applications with separate admin and user
                    dashboards.
                </p>
                <br />
                <p>
                    In 2023, I joined Vacon.ai as a Software Engineer, where I
                    led the frontend development for multiple AI-powered
                    platforms and developed various AI applications including
                    Chrome extensions using Next.js, TypeScript, and Redux.
                    Currently, I'm working at Taleemabad as a Frontend
                    Developer, contributing to the development and feature
                    enhancement of an offline-first EdTech platform for web and
                    mobile.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Expertise</h3>
                        <br />
                        <p>
                            I specialize in modern frontend development with
                            expertise in React, Next.js, TypeScript, and various
                            state management solutions. I have extensive
                            experience with offline-first applications, mobile
                            development using Capacitor and Cordova, AI-powered
                            platforms, and integrating complex APIs and
                            third-party services. Some of my key technical
                            skills include:
                        </p>
                        <br />
                        <ul>
                            <li>
                                Languages & Frameworks: React.js, Next.js,
                                TypeScript, JavaScript
                            </li>
                            <li>
                                Styling: Material Design, Tailwind CSS, Emotion
                                CSS, Material UI, Bootstrap, Ant Design
                            </li>
                            <li>State Management: Redux, Context API</li>
                            <li>
                                Mobile & Offline: Capacitor, Cordova, DexieDB,
                                PWA
                            </li>
                            <li>
                                Backend & APIs: Firebase, REST APIs,
                                NextAuth.js, Stripe
                            </li>
                            <li>Testing & Tooling: Storybook, Git, Github </li>
                            <li>
                                Analytics: PostHog, Mixpanel, Google Analytics
                            </li>
                            <li>
                                Build Tools: Vite, Webpack, Vercel, Turbopack
                            </li>
                            <li>3D & Graphics: Three.js, WebGL</li>
                        </ul>
                        <br />
                        <p>
                            Beyond software development, I enjoy playing video
                            games, binge-watching movies and TV shows, swimming,
                            and occasionally playing cricket. I'm passionate
                            about creating user-centric applications and
                            continuously learning new technologies to stay at
                            the forefront of web development.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, 2025
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer.
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:tariqasim96@gmail.com">
                        tariqasim96@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
