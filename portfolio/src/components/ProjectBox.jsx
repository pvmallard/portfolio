// import './ProjectBox.css';
import { useNavigate } from "react-router-dom";

export default function ProjectBox({project}) {

    const navigate = useNavigate()

    const toProject = () => {
        navigate(`/project/${project}`)
    }
    
    return (
        <div onClick={toProject} style={{ cursor: "pointer" }}>
            <h3>
                {/* style={{ color: project.completed ? "green" : "red" }}>  */}
                {project.title}
            </h3>
            <figure>
                <img 
                    src={project.imageMainURL}
                    alt={project.alt}
                    className='mainImg'
                />
            </figure>
            <p>Finished: {project.finished}</p>
        </div>
    );
}