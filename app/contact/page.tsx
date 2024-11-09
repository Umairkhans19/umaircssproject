import React from 'react'
import cssStyle from "./contact.module.css"

console.log(cssStyle,"CSS-Style")

const ContactPage = () => {
  return (
    <div>
       <h2 className={cssStyle.yellow}> Contact us</h2>
       <p className={cssStyle.black}>

            <b>
            We are located at Shah Faisal, Karachi, Pakistan.
            contact no # 0332-2416891
            </b>
          
       </p>
    </div>
  )
}

export default ContactPage