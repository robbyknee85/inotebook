import React from 'react'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
         <div className='side-menu'>
             <ul>
              <li><a href=""><i className="fa-solid fa-house-user"></i> Dashbord</a><i className="fa-solid fa-arrow-right" style={{color:"white"}} ></i></li>
              <li><a href=""><i className="fa-solid fa-cloud"></i> Notes</a><i className="fa-solid fa-arrow-right" style={{color:"white"}} ></i></li>
              <li><a href=""><i className="fa-solid fa-user"></i> Profile</a><i className="fa-solid fa-arrow-right" style={{color:"white"}} ></i></li>
             </ul>
         </div>
         <div className='icons'>
          <a href=""><i className="fa-brands fa-facebook"></i></a>
          <a href=""><i className="fa-brands fa-github"></i></a>
          <a href=""><i className="fa-brands fa-twitter"></i></a>
         </div>
    </div>
  )
}
