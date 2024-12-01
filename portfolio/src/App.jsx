import { useEffect, useState } from 'react'
import './App.css'
import Auth from "./components/auth.jsx"
import { db } from './config/firebase'
import { getDocs, collection } from 'firebase/firestore'

function App() {
  const [projectList, setProjectList] = useState([]);

  const projectCollectionRef = collection(db, "projects");

  useEffect(() => {
    async function getProjectList() {
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
    }

    getProjectList();
  }, [])

  return (
    <main>
      <div>
        <Auth />

        <div>
          <input placeholder='Project Title...'/>
        </div>

        <div>
          {projectList.map((project) => (
            <div>
              <h2 style={{ color: project.completed ? "green" : "red" }}> 
                {project.title}
              </h2>
              <p>Finished: {project.finished}</p>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}

export default App
