import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div id="about" className="container">
            <div className="content">
                <div className="row">
                    <h2 data-aos="fade-right" data-aos-duration="1000">About</h2>
                    <button>
                        <span>
                            <p data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
                                Hi I’m Darian Sampare. I’m a web developer… or I’m a software engineer… or errr my degree says I’m a computer scientist…
                                hmm I guess all you need to know is that I love to use my laptop to make cool things for people,
                                and I want you to enjoy what I make as much as I enjoy the process.
                            <br />
                                <br />
                                Really I'm a 23 year old creator wrapping up my degree at the University of Victoria and trying to make a dent in this crazy tech industry.
                                You can usually catch me in my laptop with a selection of 90's hip-hop and some sort of coffee aroma filling the air. If not, I'm probably
                                taking an hour to try and hit a new deadlift PR or finish my annual re-run of Dragan Ball Z.
                            <br />
                                <br />
                                Feel free to take look around and thanks for stopping by!
                            <br />
                                <br />
                                Doing my best,
                            <br />
                                <br />
                                Dare
                            </p>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;