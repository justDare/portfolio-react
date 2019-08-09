import React from 'react';
import Project from './Project';
import './Portfolio.scss';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.categories = [
            'HTML+CSS',
            'React',
            'JavaScript',
            'Python',
            'CMS'
        ];
        this.projects = [
            {
                name: 'DareToProgram',
                url: 'https://www.daretoprogram.ca/',
                summary: 'My personal blog built with Django. Test it out yourself by signing up and interacting with the posts!',
                category: 'Python',
                class: 'daretoprogram'
            },
            {
                name: 'Animikii Social Impact Report',
                url: 'http://2018.animikii.com/',
                summary: 'The 2018 Animikii impact report, built with JS, SCSS, and Yarn.',
                category: 'JavaScript / SCSS',
                class: 'impact'
            },
            {
                name: 'Gathering Our Voices',
                url: 'https://gatheringourvoices.ca/',
                summary: 'This site was built on WordPress at request of the customer. GOV is currently being maintained by UrsaSol. ',
                category: 'CMS',
                class: 'gov'
            }
        ]
    }

    componentDidMount() {

    }

    getLists() {
        const renderedList = this.projects.map((project, index) => {
            return <Project key={index} project={project} />;
        });

        return renderedList;
    }

    render() {

        return (
            <div className="container" id="portfolio">
                <h2>Portfolio</h2>
                <div className="portfolioContainer row">
                    {this.getLists()}
                </div>
            </div>
        );
    }
}

export default Portfolio;