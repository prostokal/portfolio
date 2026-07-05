import { db } from "../firebase/config";
import { collection, getDocs} from "firebase/firestore/lite";

async function getProjects() {
    const projectsRef = collection(db, 'projects');
    const snapshotRef = await getDocs(projectsRef);


    const projects = snapshotRef.docs.map((project, i) => {
        return project.data()
    })

    return projects
}


export {getProjects};