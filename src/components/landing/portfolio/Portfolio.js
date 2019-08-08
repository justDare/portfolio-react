import React from 'react';
import Project from './Project';
import './Portfolio.scss';
import simpleParallax from 'simple-parallax-js';

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
                imgSrc: '../../../assets/landing/portfolio/daretoprogram.png',
                summary: 'My personal blog built with Django. Test it out yourself by signing up and interacting with the posts!',
                category: 'Python'
            },
            {
                name: 'DareToProgram',
                url: 'https://www.daretoprogram.ca/',
                imgSrc: '../../../assets/landing/portfolio/daretoprogram.png',
                summary: 'My personal blog built with Django. Test it out yourself by signing up and interacting with the posts!',
                category: 'Python'
            },
            {
                name: 'DareToProgram',
                url: 'https://www.daretoprogram.ca/',
                imgSrc: '../../../assets/landing/portfolio/daretoprogram.png',
                summary: 'My personal blog built with Django. Test it out yourself by signing up and interacting with the posts!',
                category: 'Python'
            }
        ]
    }

    componentDidMount() {
        var images = document.querySelectorAll('.gallery-item');
        new simpleParallax(images);
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