// import './Contact.css';

export default function Contact() {
    
    return (
        <div data-scroll-section>           
                
            <header>
                <div 
                data-scroll-section
                data-scroll
                data-scroll-speed="0.4" 
                className="container50">
                    <h1>Contact Me</h1>
                </div>
            </header>
        
                <main id='maincontent'>

                    <section>
                        <h2 className='bar'>Contact Me</h2>
                        <div className='flex'>
                            <p>email, phone</p>
                        </div>
                    </section>

                    <section>
                        <h2>Find Me Here</h2>
                        <h3>itch.io</h3>
                        <p>Info</p>
                        <h3>YouTube</h3>
                        <p>Info</p>
                        <h3>TikTok</h3>
                        <p>Info</p>
                    </section>

                    <section>
                        <h2>Links</h2>
                        <ul>
                            <li><a href='https://wipblogmvp.wordpress.com/blog/'>WIP Blog</a> - An academic project blog utilized for some courses</li>
                            <li><a href='https://pvmallard.github.io/projects.html'>Baby's First Portfolio</a> - The first mini portfolio I developed for a front-end development class</li>

                        </ul>
                    </section>
                    
                </main>
            </div>
    );
}