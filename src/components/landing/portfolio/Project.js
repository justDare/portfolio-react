import React from 'react';

const Project = (props) => {
    return (
        <div className="project col-lg-6 col-sm-12">
            <div className={"hovereffect " + props.project.name} data-aos="fade-up" data-aos-duration="1000">
                <div className="overlay">
                    <h4>{props.project.name}</h4>
                    <p>
                        {props.project.summary}
                        <br />
                        <br />
                        <a href={props.project.url} target="_blank" rel="noopener noreferrer">VISIT SITE</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;