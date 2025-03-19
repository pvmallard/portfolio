// import './Projects.css';
import ProjectBox from '../components/ProjectBox.jsx';

import { useEffect, useState, useRef } from 'react'
import { db } from '../config/firebase'
import { getDocs, collection, addDoc } from 'firebase/firestore'

export default function Projects() {

    const [projectList, setProjectList] = useState([]);
    
      const projectCollectionRef = collection(db, "projects");
    
      const getProjectList = async () => {
        try{
          const response = await getDocs(projectCollectionRef);
          const data = response.docs.map((doc) => ({
            ...doc.data(), 
            id: doc.id,
          }))
    
          setProjectList(data);
          // console.log(projectList)
    
        } catch (err) {
          console.error(err);
        }
      };
    
      useEffect(() => {
        getProjectList();
      }, []);

      // function toProject(event, correct, pete){
      //   // if no next question, toResults()
      //   return
      // }
    
    return (
        <div data-scroll-section>

            <header>
                <div 
                data-scroll-section
                data-scroll
                data-scroll-speed="0.4" 
                className="container50">
                    <h1>Projects</h1>
                </div>
            </header>

            <main id='maincontent'>

                <section>
                  <h2>Web Development</h2>
                  <p>Accessibility, UI/UX Design, Frontend Design</p>
        
                  {projectList.map((project) => (

                    project.type === "web" && (
                      <ProjectBox project={project} />
                    )

                  ))}
                </section>
                
                <section>
                  <h2>Graphic Design</h2>
                  <p>Typography, Grids/Patterns, Design Elements</p>

        
                  {projectList.map((project) => (

                    project.type === "graphic" && (
                      <ProjectBox project={project} />
                    )

                  ))}
                </section>

                <section>
                  <h2>Game Development</h2>
                  <p>Prototyping, Graphics/Animations, Audio Design</p>

        
                  {projectList.map((project) => (

                    project.type === "game" && (
                      <ProjectBox project={project} />
                    )

                  ))}
                </section>

                <section>
                  <h2>Additional Design</h2>
                  <p>Engineering Design, Software Design, Fine Arts</p>
        
                  {projectList.map((project) => (

                    project.type === "other" && (
                      <ProjectBox project={project} />
                    )

                  ))}
                </section>

            </main>

            
            
        </div>
    );
}