// import './About.css';
import SkillRing from '../components/SkillRing.jsx'

export default function About() {
    
    return (
        <div data-scroll-section>           
        
            <header>
                <div 
                data-scroll-section
                data-scroll
                data-scroll-speed="0.4" 
                className="container50">
                    <h1>About Me</h1>
                </div>
            </header>
        
                <main id='maincontent'>

                    <section>
                        <h2>Mallory Prescott</h2>
                        <h3>Overview</h3>
                        <p>Info</p>
                        <h3>Overview</h3>
                        <p>Info</p>
                    </section>
    
                    <section>
                        <h2 className='bar'>Experience</h2>
                        <div className='flex'>
                            <p>bar here</p>
                        </div>
                    </section>

                    <section>
                        <h2 className='bar'>Languages</h2>
                        <div className='flex'>
                            <SkillRing/>
                        </div>
                    </section>

                    <section>
                        <h2>Links</h2>
                        <ul>
                            <li><a href='https://wipblogmvp.wordpress.com/blog/'>WIP Blog</a> - An academic project blog utilized for some courses</li>
                            <li><a href='https://pvmallard.github.io/projects.html'>Baby's First Portfolio</a> - The first mini portfolio I developed for a front-end development class</li>

                        </ul>
                    </section>

                    <section>
                        <h2>Gallery?</h2>
                        <figure>
                            <img alt="something"/>
                            <figcaption>image</figcaption>
                        </figure>
                    </section>
                    
                </main>
            </div>
    );
}