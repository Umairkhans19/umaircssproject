import React from 'react'
import cssStyle from "./contact-us.module.css"

console.log(cssStyle,"CSS-Style")

const page = () => {
  return (
    <div>
      <h3 className={cssStyle.brown}>
        <p>
              Contact Us.
          </p>
          <p>
           0332-2416891
        </p>

      </h3>
    </div>
  )
}

export default page