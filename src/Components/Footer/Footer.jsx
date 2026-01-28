import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentTime = new Date();
  return (

    <footer>
      <div className="copyRightDiv">

        {/* <!-- <i class="fa-regular fa-copyright"></i> --> */}
        © {currentTime.getFullYear()} BlogVerse. All rights reserved.

      </div>
    </footer>

  )
}

export default Footer