import React from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';
import './About.scss';
import aboutImg from '../../assets/landing/portfolio/daretoprogram.png';

setDefaultProps({
    bounce: false,
    visibleClassName: 'visible',
    percent: 20
});

class About extends React.Component {

    state = { visible: false };

    addKeyframe = () => {
        this.state.visible ? this.setState({ visible: false }) : this.setState({ visible: true });
    }

    render() {

        let rev, revFull;
        if (this.state.visible) {
            rev = 'rev-block';
            revFull = 'rev-block-full';
        }

        return (
            <OnVisible onChange={this.addKeyframe} id="about">
                <div className="content">
                    <div className="container">
                        <h1 className={rev}>
                            <span>About</span>
                        </h1>
                        <h1 className={"rev-second " + rev}>
                            <span>- Get To Know Your Developer -</span>
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-6 about-text">
                            <div className={revFull}>
                                <span>
                                  
                                        Hi I’m Darian Sampare. I’m a web developer… or I’m a software engineer… or errr my degree says I’m a computer scientist…
                                        hmm I guess all you need to know is that I love to use my laptop to make cool things for people,
                                        and I want you to enjoy what I make as much as I enjoy the process.
                                <br />
                                        Feel free to take look around and thanks for stopping by!
                                <br />
                                        <br />
                                        Doing my best,
                                <br />
                                        <br />
                                        Dare
                               
                                </span>
                            </div>

                        </div>
                        <div className="col-6 about-img">
                            <div className={rev}><span>
                                <img src={aboutImg} />
                            </span></div>
                        </div>
                    </div>

                </div>
            </OnVisible>
        );
    }
}

export default About;