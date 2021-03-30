import React from 'react';
import Logo from '../../images/said-logo.png'
import RepoIcon from '../../images/logos/Repo-icon.png'
import ViewIcon from '../../images/logos/View-icon.png'
import projects from '../../utils/projects'
import picture from "../../images/projects/1-4_Project preivew-16.png"
import './style.css'

function Projects() {
    return <>
        <div>
            <img class="logoTop" src={Logo} alt="Said's logo" />
        </div>
        <div class="container fade-in" >
            <div class="row firstProject">
                {projects.slice(0, 3).map(project =>
                    <div class="col-lg-4 col-sm-12">
                        <div className={`card cardFix ${project.id === 3 ? 'thirdProject' : ''} `} key={project.id} >
                            <a target="_blank" rel="noreferrer" href={project.deployUrl}>
                                <img src={project.img} className={`card-img-top  ${project.id === 3 ? 'zooom2' : 'zooom'}`} alt="..." />
                            </a>
                            <div style={{ marginTop: '5%', marginLeft: '5%' }}>
                                <a target="_blank" rel="noreferrer" href={project.Url}
                                    class="card-text" style={{ color: 'white', fontFamily: 'gilroysemibold' }}>{project.name}</a>
                                <a target="_blank" rel="noreferrer" href={project.deployUrl}>
                                    <img className={`${project.id === 3 ? 'iconThirdProject' : ''}`} src={ViewIcon} alt="View Project" style={{ height: '20px', marginLeft: '20%' }} /></a>
                                <a target="_blank" rel="noreferrer" href={project.Url}>
                                    <img src={RepoIcon} alt="View Project" style={{ height: '20px', marginLeft: '3%' }} /></a>
                                <p style={{ color: 'grey', fontSize: '15px', fontFamily: 'gilroylight' }}>{project.details}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div class="row">
                {projects.slice(3, 7).map(project =>
                    <div class="col-lg-4 col-sm-12">
                        <div className={`card cardFix ${project.id === 4 ? 'secondProject' : ''} `} key={project.id} >
                            <a target="_blank" rel="noreferrer" href={project.deployUrl}>
                                <img src={project.img} className={`card-img-top  ${project.id === 4 ? 'zooom2' : 'zooom'}`} alt="..." />
                            </a>
                            <div className={`${project.id === 4 ? 'secondProjectMargin ' : 'projectMargin'}`}>
                                <a target="_blank" rel="noreferrer" href={project.Url}
                                    class="card-text" style={{ color: 'white', fontFamily: 'gilroysemibold' }}>{project.name}</a>
                                <a target="_blank" rel="noreferrer" href={project.deployUrl}>
                                    <img className={`${project.id === 4 ? 'iconSecondProject' : 'iconNormalProject'}`} src={ViewIcon} alt="View Project" /></a>
                                <a target="_blank" rel="noreferrer" href={project.Url}>
                                    <img src={RepoIcon} alt="View Project" style={{ height: '20px', marginLeft: '3%' }} /></a>
                                <p style={{ color: 'grey', fontSize: '15px', fontFamily: 'gilroylight' }}>{project.details}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
}

export default Projects;