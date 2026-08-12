import '../../scss/blocks/_title.scss';
import './Portfolio.scss';

import marvelApi from '../../assets/icons/portfolio/marvelApi.jpg';
import food from '../../assets/icons/portfolio/food.jpg';
import mellCoin from '../../assets/icons/portfolio/mellCoin.jpg';
import notFound from '../../assets/icons/portfolio/notFound.png';

import { useEffect, useState } from 'react';
import { getProjects } from '../../services/projectServices';

import gsap from '../../libs/gsap';
import { useGSAP } from '@gsap/react';
import {fade} from '../../libs/animations';

export function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [projectSelected, setProjectSelected] = useState(0);


    useEffect(() => {
        onRequest();
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline();
        
        tl.from(".portfolio__content", {
            opacity: 0,
            y: 90,
            scrollTrigger: {
                trigger: ".portfolio",
                end: "center 5%",
                scrub: true,
            }
        })
    })
   
    const handleProjectClick = (projectId) => {
        if (projectSelected === projectId) return;

        fade('.portfolio__preview');
        setProjectSelected(projectId);
    }

    const onRequest = async () => {
        const projects = await getProjects();
        
        setProjects(projects);
    }


    
    function renderProjectsList(arr) {
        let projects = arr.map((item, i) => {
            return (
                <li
                    onClick={() => {handleProjectClick(item.id)}}
                    className={'portfolio__project' + (projectSelected === item.id ? ' active' : '')}
                    key={item.id}>
                    <span alt={item.title}  tabIndex='0' className="portfolio__project-button">{item.title}</span>
                </li>
            )
        })
        return projects;
    }

    function renderProjectPreview(arr) {
        const images = {
            marvelApi,
            food,
            mellCoin,
            notFound
        }
        let project = arr.find((item) => item.id === projectSelected);
             return (
                <>
                    <h3 className="portfolio__preview-title title_fz36">{project.title}</h3>
                        <ul className="portfolio__preview-tech">
                            {project.techList.map((tech, i) => {
                                return (
                                    <li className="title_fz16 portfolio__preview-tech-item" key={i}>{tech}</li>
                                )
                            })}                            
                        </ul>
                        <div className="portfolio__preview-descr">{project.description}</div>

                        <div className="portfolio__preview-img">
                            <img src={images[project.imageUrl] || images.notFound} alt="#" className="portfolio__img"/>
                        </div>
                        <div className="divider"></div>
                        <div className="portfolio__preview-links">
                            <a href={project.links[0]} className="link portfolio__preview__link">[ LIVE DEMO ]</a>
                            <a href={project.links[1]} className="link portfolio__preview__link">[ GitHub ]</a>
                        </div>
                </>
            )
    }

    const projectList = projects.length > 0 ? renderProjectsList(projects) : null;
    const projectPreview = projects.length > 0 ? renderProjectPreview(projects) : null;

    return (
         <section className="portfolio" id="projects">
            <div className="container">
                <h2 className="portfolio__title title title_fz48">[02]</h2>
                <h3 className="portfolio__subtitle title">projects</h3>
                <div className="portfolio__content">
                    <ul className="portfolio__list">
                        {projectList}
                    </ul>



                    <div className="portfolio__preview">
                        {projectPreview}
                    </div>

                </div>
            </div>
    </section>

    )
}