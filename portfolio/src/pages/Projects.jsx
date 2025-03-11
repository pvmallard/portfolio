// import './Projects.css';

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
                  {projectList.map((project) => (
                    <div>
                      <h2>
                         {/* style={{ color: project.completed ? "green" : "red" }}>  */}
                        {project.title}
                      </h2>
                      <figure>
                          <img 
                            src={project.imageMainURL}
                            alt={project.alt}
                            className='mainImg'
                          />
                      </figure>
                      <p>Finished: {project.finished}</p>
                    </div>
                  ))}
            </main>
        </div>
    );
}