// import React, { Component } from 'react';
// import Executives from './Executives';
// import Hero from './Hero';
// import Api from '../Api';
import './executives.css';
import React from 'react';

export default function ExecutivesPage() {
    return (
        <div className="Executive-team">

            <div className="Executive-box">
                <a href={`/president`}>
                    <img className="Executive-image" alt="Logo" src="/exec/president.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/secretary`}>
                    <img className="Executive-image" alt="Logo" src="/exec/secretary.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/partnerships-manager-01`}>
                    <img className="Executive-image" alt="Logo" src="/exec/partnerships-01.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/partnerships-manager-02`}>
                    <img className="Executive-image" alt="Logo" src="/exec/partnerships-02.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/treasurer-qut`}>
                    <img className="Executive-image" alt="Logo" src="/exec/treasurer-qut.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/treasurer-uq`}>
                    <img className="Executive-image" alt="Logo" src="/exec/treasurer-uq.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/schools-manager-01`}>
                    <img className="Executive-image" alt="Logo" src="/exec/schools-01.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/schools-manager-02`}>
                    <img className="Executive-image" alt="Logo" src="/exec/schools-02.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/deputy-schools-manager`}>
                    <img className="Executive-image" alt="Logo" src="/exec/schools-deputy.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/marketing-manager-01`}>
                    <img className="Executive-image" alt="Logo" src="/exec/marketing-01.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/marketing-manager-02`}>
                    <img className="Executive-image" alt="Logo" src="/exec/marketing-02.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/deputy-marketing-manager`}>
                    <img className="Executive-image" alt="Logo" src="/exec/marketing-deputy.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/training-manager`}>
                    <img className="Executive-image" alt="Logo" src="/exec/training.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/deputy-training-manager`}>
                    <img className="Executive-image" alt="Logo" src="/exec/training-deputy.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/chief-returning-officer`}>
                    <img className="Executive-image" alt="Logo" src="/exec/returning.png" />
                </a>
            </div>

            <div className="Executive-box">
                <a href={`/webmaster`}>
                    <img className="Executive-image" alt="Logo" src="/exec/webmaster.png" />
                </a>
            </div>

        </div>
    );
}


//   render() {
//     return (
//       <div>
//         <Hero title={"Executive Team" />
//         <h3 className="click-execs-text">Learn more about our Executives by clicking on their images!</h3>
//         {this.renderExecutives()}
//       </div>
//     );
//   }
// }
