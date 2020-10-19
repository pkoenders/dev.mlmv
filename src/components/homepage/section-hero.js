import React from "react"
import { Link } from "gatsby"
import SectionHeroStyles from "./section-hero.module.scss"

import IconCreativeTech from "../../images/svg/icon-creative-tech.inline.svg"
import IconCreativeTechAnd from "../../images/svg/icon-creative-tech-and.inline.svg"


const SectionHero = () => (
    <section className='section-layout'>
        <div className={SectionHeroStyles.hero}>
            <div>
                <IconCreativeTech />


            </div>
        </div>
    </section>
)

export default SectionHero
