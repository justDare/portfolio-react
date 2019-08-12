import React from 'react';
import Language from './Language';
import ProgressBar from 'progressbar.js';

class LanguagesDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
        this.languages = [
            { language: 'JavaScript', skill: 85 },
            { language: 'CSS/SCSS', skill: 90 },
            { language: 'HTML', skill: 95 },
            { language: 'Java', skill: 75 },
            { language: 'Django', skill: 60 },
            { language: 'React', skill: 60 },
            { language: 'Python', skill: 70 }
        ];
    }

    activateSkillBars() {
        var skillBars = [].slice.call(document.querySelectorAll(".skillbar"));
        // get value for circle
        var percentageDivs = document.querySelectorAll('[data-id]');
        let percentages = [];
        for (var index = 0; index < percentageDivs.length; index++) {
            percentages.push(parseInt(percentageDivs[index].getAttribute('data-id')));
        }

        for (var i = 0; i < skillBars.length; i++) {
            var bar = new ProgressBar.Circle(skillBars[i], {
                color: '#333',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 0,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#333',
                    width: 0
                },
                to: {
                    color: '#702fa8',
                    width: 4
                },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', '#702fa8');
                    circle.path.setAttribute('stroke-width', 4);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "%");
                    }
                }
            });
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '2rem';

            var percentage = percentages[i] * .01;
            bar.animate(percentage); // Number from 0.0 to 1.0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onWindowScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onWindowScroll);
    }

    onWindowScroll = () => {
        if (!this.state.loaded) {
            var el = document.querySelector('#languages');
            var position = el.getBoundingClientRect();
            // checking for partial visibility
            if (position.top < window.innerHeight && position.bottom >= 0) {
                this.activateSkillBars();
                this.setState({ loaded: true });
            }
        }
    }

    getLists() {
        const renderedList = this.languages.map((language, index) => {
            return <Language key={index} language={language} />;
        });

        return renderedList;
    }

    render() {
        return (
            <div id="languages" className="container">
                <div className="content">
                    <h2 data-aos="fade-right" data-aos-duration="1000">Languages Spoken</h2>
                    <div className="row">
                        {this.getLists()}
                    </div>
                </div>
            </div>
        );
    }
}

export default LanguagesDisplay;