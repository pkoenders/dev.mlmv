import React from 'react'
import ourVisionMissionStyles from './vision-mission.module.scss'

const VisionMissiom = () => {

    return (
        <section className={ourVisionMissionStyles.ourVisionMission + ' section-layout-wide'}>
            <div className={ourVisionMissionStyles.ourVisionMissionWrapper}>
                <div>
                    <h2>A UI/UX designer at work</h2>
                    <p>Recently I was as a contractor for <a href="https://www.vodafone.co.nz" rel="noreferrer nofollow" title="Link to Vodafone New Zealand" target="_blank">Vodafone New Zealand</a> and prior to that I had a permanent role with <a href="https://www.datacom.co.nz" rel="noreferrer nofollow" title="Link to Datacom Systems Limited" target="_blank">Datacom Systems Limited</a>. I developed indispensable skills within these organisations. I worked with multiple teams and was accountable for a range of design tasks and had a hand in front-end development.</p>
                    <p>I work closely and collaboratively with clients, stakeholders. I am accountable for my work and manage my tasks and assets. I keep my colleagues, teams and stakeholders involved and up to date throughout projects.</p>
                </div>
            </div>

            <hr />

            <div className={ourVisionMissionStyles.ourVisionMissionWrapper}>
                <div>
                    <h2>My toolbox</h2>
                    <p>My toolbox of preference is the design process, Sketch/InVision but I am just as comfortable using Adobe Creative Cloud and HTML/SCSS. Tools to assist with keeping organised and on track like Asana and Slack.</p>
                    <p>I am inspired by articles on <a href="https://ello.co" rel="noreferrer nofollow" title="Link to Ello" target="_blank">Ello</a>, <a href="https://medium.com" rel="noreferrer nofollow" title="Link to Medium" target="_blank">Medium</a> and <a href="https://alistapart.com/" rel="noreferrer nofollow" title="Link to A List Apart" target="_blank">A List Apart</a>. Posts by <a href="https://www.zeldman.com" rel="noreferrer nofollow" title="Link to Jeffrey Zeldman" target="_blank">Jeffrey Zeldman</a> and design by <a href="https://www.happycog.com" rel="noreferrer nofollow" title="Link to Happy Cog studios" target="_blank">Happy Cog studios</a>. TED, <a href="https://www.designbetter.co/" rel="noreferrer nofollow" title="Link to Design Better" target="_blank">Design Better</a> and variety of industry podcasts.</p>
                </div>
            </div>
        </section>
    )
}

export default VisionMissiom

