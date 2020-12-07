import React from "react"
import userCommentsStyles from '../homepage/userComments.module.scss'

const UserCommentsSection = () => {
  return (
    <section className={userCommentsStyles.sectionWrapper + ' section-layout-wide'}>


      <div className={userCommentsStyles.sectionInner}>
        <h3>What some of our disabled community have to say about us</h3>
        <ul>
          <li>
            <p>Jenny</p>
            <p>User feedback, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </li>
          <li>
            <p>Rachel</p>
            <p>User feedback, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          </li>

          <li>
            <p>Jack</p>
            <p>User feedback, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
          </li>

          <li>
            <p>Paul</p>
            <p>User feedback, Proin id urna aliquet velit ornare fermentum quis eu magna.</p>
          </li>

          <li>
            <p>MDA</p>
            <p>User feedback, . Duis nec ultricies velit. In vitae vestibulum ante..</p>
          </li>

        </ul>

      </div>
    </section >
  )
}

export default UserCommentsSection
