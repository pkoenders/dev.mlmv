import React from 'react'
import introStyles from './intro.module.scss'

const AboutMe = () => {

    return (
        <section className='section-layout'>
            <div className={introStyles.intro}>

                <article>
                    <h2>About me</h2>
                    <p>I’m a versatile UI/UX designer with 20+ years of all rounder industry experience. I originally trained in traditional and computer graphic design and transitioned into web. I have worked with small and large organisations. I apply attention to detail in all aspects of my workflow; definition &amp; planning, research, design, technical, management and review.</p>
                    <h3>Design</h3>
                    <p>I cover and range of design tasks and not shy to step up where needed.</p>
                    <ul>
                        <li>Implementation of UI/UX design process</li>
                        <li>Estimating &amp; proposal review</li
                        ><li>Iterative wire-framing, lo-fi prototypes &amp; concept design</li>
                        <li>Creating clean &amp; accessible UI designs</li><li>Template design</li>
                        <li>HTML prototypes &amp; templates</li>
                        <li>Style guides &amp; pattern libraries</li>
                        <li>Graphic design</li><li>Planning &amp; management of projects &amp; assets</li>
                    </ul>
                    <h3>UX/CX &amp; Marketing</h3>
                    <p>I assist UX/CX designers, practitioners and Marketing professionals with workshops, persona profiling and user flows. I have also supported those professionals by translating their research into wireframes, prototypes, concepts and designs.</p>
                    <h3>Technical</h3>
                    <p>I can markup HTML/SCSS. I write HTML to meet W3C validations and can create HTML prototypes and templates. I am interested in accessibility best practices which I apply where I can (adhering to <a href="https://www.w3.org/WAI/standards-guidelines/wcag" rel="noreferrer nofollow" title="Link to Web Content Accessibility Guidelines (WCAG) Overview" target="_blank">WCAG</a>). I am also familiar with task runners and JavaScript/jQuery. I work closely with integration teams across diversified technologies.</p>
                </article>
            </div>
        </section>
    )
}

export default AboutMe

