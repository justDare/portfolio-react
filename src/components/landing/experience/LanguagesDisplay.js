import React from 'react';
import Language from './Language';

class LanguagesDisplay extends React.Component {
    constructor(props) {
        super(props);
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

    getLists() {
        const renderedList = this.languages.map((language, index) => {
            return <Language key={index} />;
        });

        return renderedList;
    }

    render() {
        return (
            <div className="container">
                {this.getLists()}
            </div>
        );
    }
}

export default LanguagesDisplay;