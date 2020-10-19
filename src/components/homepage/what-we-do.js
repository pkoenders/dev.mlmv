import React from 'react'
import whatWeDoStyles from './what-we-do.module.scss'
import IconCreativeTech from "../../images/svg/logo-pixl.inline.svg"
import IconDevelopment from "../../images/svg/icon-development.inline.svg"
import Pkoenders from "../../images/svg/pkoenders.inline.svg"
//import Pkoenders from "../../images/svg/pkoenders-anim.inline.svg"

const WhatWeDo = () => {

    return (
        <>
            <section className={whatWeDoStyles.sectionHeroImg + ' section-layout-wide'}>

                {/* <canvas id="canv" width="32" height="32" /> */}

                <div className={whatWeDoStyles.intro}>
                    <div className={whatWeDoStyles.introWrapper}>
                        <h1><strong> <IconCreativeTech />Tēnā koe, </strong><span>Welcome to my portfolio.</span></h1>
                    </div>
                </div>

                <span>

                    <canvas className="headAnim" width="32" height="32" />
                    <Pkoenders />
                </span>
                {/* <Img
                    alt={'Web designer'}
                    fluid={dataWhatWeDo.webDesigner.childImageSharp.fluid}
                /> */}
            </section>

            <section className={whatWeDoStyles.whatWeDoWrapper + ' section-layout-wide contentStart'}>

                <div className={whatWeDoStyles.whatWeDo}>

                    <div className={whatWeDoStyles.aboutMe}>
                        <div>
                            <p>I’m a versatile UI/UX designer with over 20 years of all-round industry experience. I originally trained in traditional Graphic Design and transitioned into Digital and Web Design. I have worked with small and large organisations.  I am fastidious in work flow; definition and planning, research, design, technical, management and review.</p>
                        </div>

                        <span>
                            {/* <p>I cover and range of design tasks.</p> */}
                            <ul>
                                <li>Implementation of the UI/UX design process</li>
                                <li>Estimating &amp; proposal review</li>
                                <li>Iterative wire-framing, prototypes &amp; design</li>
                                <li>Pattern libraries &amp; style guides</li>
                                <li>HTML templates &amp; components</li>
                                <li>Graphic design</li>
                            </ul>
                        </span>
                    </div>

                    <div className={whatWeDoStyles.technical}>
                        <div>
                            <p>I am curious, interested in web accessibility and enjoy working with creative teams on diversified digital projects.</p>
                        </div>
                        <span>
                            <IconDevelopment />
                            <p>With professionalism, integrity and care, I work in a collaborative manner to plan, design and deliver crafted solutions with best practices in mind.</p>
                            <a href="/peter-koenders-resumé.pdf" className="buttonPrimary" >View my resumé</a>
                        </span>

                    </div>


                </div>
            </section>
        </>
    )
}

export default WhatWeDo

