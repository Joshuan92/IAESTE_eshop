import React from 'react';
import ProjectInfo from './ProjectInfo.jsx';
import projectInformation from './projectInformation.js';

export default class Project extends React.Component {
    render() {
        return (
            <>
                <section className="container">
                    <h1>Project Information</h1>
                    <div className="row">
                        {
                            projectInformation.map(info =>
                                <ProjectInfo key={info.id}
                                    title={info.title}
                                    text={info.text}
                                    updated={info.updated}
                                    url={info.url}
                                />)
                        }
                    </div>
                </section>
            </>
        )
    }
}
