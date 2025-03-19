// import './ProjectBox.css';
import { useParams } from "react-router-dom";

export default function ProjectBox() {

    const {project} = useParams()
    
    return (
        <div>
            <h1>
                {/* style={{ color: project.completed ? "green" : "red" }}>  */}
                {project.title}
            </h1>
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