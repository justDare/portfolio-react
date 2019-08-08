import React from "react";
import TimeLineItem from './TimeLineItem';

const TimeLine = () => {

    const experiences = [
        {
            place: 'University of Victoria',
            dates: '2014-Present',
            icon: 'fas fa-graduation-cap',
            indicator: 'school',
            info: 'After pursuing a degree in commerce for 2 years, I came across the world of software and technology and immediately shifted in that direction. I\'m expected to graduate from UVIC in December of 2019 with a BCs in Computer Science and minor in Commerce.'
        },
        {
            place: 'Freelance Web Developer',
            dates: '2016-2017',
            icon: 'fas fa-network-wired',
            indicator: 'freelance',
            info: 'I branched out from my Computer Science studies and began learning web development in my spare time. During this time I worked on personal projects and took contracts for custom websites.'
        },
        {
            place: 'Partner / Full Stack Developer at UrsaSol',
            dates: '2018-Present',
            icon: 'fas fa-code',
            indicator: 'fullstack',
            info: 'In the spring of 2018 I began my position at UrsaSol designs, a local web development startup as a Fullstack Developer and UI/UX designer. This position required everyone on the team to take on many roles and adapt quickly. Outside of technological experience, I was able to broaden my horizons to client interactions and project management.'
        }
    ];

    const renderedList = experiences.map((experience, index) => {
        let position;
        if ((index + 1) % 2 === 0)
            position = 'right';
        else
            position = 'left';

        return <TimeLineItem key={index} experience={experience} position={position} />;
    });

    return (
        <div className="container">
            <div id="experience">
                <div className="content">
                    <h2 className="project-name" data-aos="fade-down-right" data-aos-duration="500">Experience</h2>
                    <div id="timeline">
                        {renderedList}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default TimeLine;