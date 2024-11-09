import React from 'react'
import cssStyle from "./service.module.css"

console.log(cssStyle,"CSS-Style")

const ServicePage = () => {
  return (
    <div>
      <h2 className={cssStyle.blue}>What Value Do We Offer?</h2>
      <ul className={cssStyle.green}>
        <li>
          <b>
          We develop concept, define basic ideas and then convert it into a reality
           by incorporating key marketing and event management tolls. We develop basic 
           plan and formulate strategy to convert define objectives into measured goals.
            Our Pre and Post Event Analysis helps us to make the event more successful. 
            We promote the event to Target Exhibitors and Sponsors and mobilize resources
             for Event Executions and Supplementary Programs. Our main focus is to make 
             the event financially viable for the Organizers, while enhancing the Event 
             Image and Brand Value.
          </b>
        </li>
        <li>
          <b>
          We always start by basic ideas and let our customers tell us what they want. 
          For us customer satisfaction is the most important aspect while organizing and 
          executing any event. We let our customers dream and provide them with what they
           want. We provide smooth execution from concept to the arranging and organizing
            each aspect of the event. We provide One Window Solution for every Event needs.

          </b>
        </li>
        <li>
          <b>
          As the amount of B2B and B2C events are growing rapidly, we provide the best 
          services for our clients to pull off any event as per their wish. We arrange
           the events to make our clients reach their targeted market in a very short time
            and in a very innovative and attractive way. Our efforts are always top notch 
            so that our customers can enjoy and see their business grow.
          </b>
        </li>
      </ul>
    </div>
  )
}

export default ServicePage