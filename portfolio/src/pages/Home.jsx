// import './Home.css';\
// import '../components/SkipLink.css';
import Keyboard from '../components/Keyboard.jsx'
import SkillRing from '../components/SkillRing.jsx'

export default function Home() {
    
    return (
        <div data-scroll-section>           

            <header>
                <h1 className="sr-only">Mallory Prescott's Profile</h1>
                <div 
                data-scroll-section
                data-scroll
                data-scroll-speed="0.4" 
                className="container50">
                    <h2 id="first-name" className="name">MALLORY</h2>
                    <h2>Full Stack Developer</h2>
                    <Keyboard />
                    <h2>Graphic Designer</h2>
                    <h2 id="last-name" className="name">PRESCOTT</h2>
                </div>

            </header>

            <h3>Sorry for the mess! This site is under heavy renovation</h3>

            <main id='maincontent'>

                <section>
                    <h2 className='bar'>Skills</h2>
                    <div className='flex'>
                        <p>My experiences in academic and professional settings have equipped me with a variety of skills in design and development. 
                            Web Development is my primary skill-set, mainly composed of UI/UX design, frontend and backend development, accessible and universal design, and responsive applications. 
                            Graphic Design and Game Design/Development could encompass additional experience in rapid prototyping and user testing, typography, design elements, grids/patterns, graphics, audio design, experience design, and the overall design process. 
                        </p>
                        <SkillRing/>
                    </div>
                    {/* <SkillRing/> title = {"Web Development"} value = {75}/> */}
                </section>

                <section>
                    <h2 className='bar'>Web Development</h2>
                    <p>
                        My experiences in academic and professional settings have equipped me with a variety of skills in design and development. 
                    </p>
                    {/* button to (web dev) projects page */}
                </section>

                <section>
                    <h2 className='bar'>Graphic Design</h2>
                    <p>
                        Graphic Design and Game Design/Development could encompass additional experience in rapid prototyping and user testing, typography, design elements, grids/patterns, graphics, audio design, experience design, and the overall design process. 
                    </p>
                </section>
                
                <section>
                    <h2 className='bar'>Game Development</h2>
                    <p>
                        Web Development is my primary skill-set, mainly composed of UI/UX design, frontend and backend development, accessible and universal design, and responsive applications. 
                    </p>
                </section>

                <section>
                    <h2 className='bar'>Additional Design</h2>
                    <p>
                        Bonus round: fabrication, craftsmanship, alt projects
                    </p>
                </section>
                
            </main>
        </div>
    );
}