import { useEffect, useState, useRef } from 'react'
import './App.css'
import Auth from "./components/auth.jsx"
import { db } from './config/firebase'
import { getDocs, collection, addDoc } from 'firebase/firestore'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

function App() {
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

  const containerRef = useRef(null)

  return (

    <LocomotiveScrollProvider
      options={{smooth: true}}
      containerRef={containerRef}
    >
    
    <div className='container' data-scroll-containter ref={containerRef}>

      <a className="skip-link" href="#maincontent">Skip to main content</a>

      <header>
        <h1 class="sr-only">Mallory Prescott's Profile</h1>
        <div data-scroll data-scroll-speed="0.4" class="container50">
            <h2 id="first-name" class="name">MALLORY</h2>
            <h2 id="last-name" class="name">PRESCOTT</h2>
        </div>
      </header>

      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <main id='maincontent'>

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

      </main>
    </div>

    </LocomotiveScrollProvider>
  )
}

// function App() {
//   const [projectList, setProjectList] = useState([]);

//   const [newProjectTitle, setNewProjectTitle] = useState("");
//   const [newDate, setNewDate] = useState("");
//   const [isNewProjectCompleted, setIsNewProjectCompleted] = useState(false);

//   const projectCollectionRef = collection(db, "projects");

//   const getProjectList = async () => {
//     try{
//       const response = await getDocs(projectCollectionRef);
//       const data = response.docs.map((doc) => ({
//         ...doc.data(), 
//         id: doc.id,
//       }))

//       setProjectList(data);
//       // console.log(projectList)

//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     getProjectList();
//   }, []);

//   const onAddProject = async () => {
//     try {
//       await addDoc(projectCollectionRef, {
//         title: newProjectTitle, 
//         finished: newDate, 
//         completed: isNewProjectCompleted,
//       });
//     } catch(err) {
//       console.error(err);
//     }
//   };

//   return (
//     <main>
//       <div>
//         <Auth />

//         <div>
//           <input
//             placeholder='Project Title...' 
//             onChange={(e) => setNewProjectTitle(e.target.value)}
//           />
//           <input 
//             placeholder='Date...' 
//             // type="number"
//             onChange={(e) => setNewDate(e.target.value)}
//           />
//           <input 
//             type="checkbox" 
//             checked={isNewProjectCompleted} 
//             onChange={(e) => setIsNewProjectCompleted(e.target.checked)}
//           />
//           <label>Completed</label>
//           <button onClick={onAddProject}> Add Project </button>
//         </div>

//         <div>
//           {projectList.map((project) => (
//             <div>
//               <h2 style={{ color: project.completed ? "green" : "red" }}> 
//                 {project.title}
//               </h2>
//               <p>Finished: {project.finished}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </main>
//   )
// }

export default App
