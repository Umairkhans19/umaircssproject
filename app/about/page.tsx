import React from 'react'
import cssStyle from "./about.module.css"

console.log(cssStyle,"CSS-Style")

const AboutPage = () => {
  return (
    <div>
        <h2 className={cssStyle.black}>About Al-Falah Event Management</h2>
      <p className={cssStyle.blue}>
      Al-Falah Event Management has been in business in Pakistan for the past 30 years.
       We have been an established and popular company with an excellent track record 
       for the best customer satisfaction. We never compromise on the quality and the 
       services provided to the customer. We have an excellent staff who will guide you
        with their best ideas to make your company stand out in the industry.
        </p>
    </div>
  )
}

export default AboutPage