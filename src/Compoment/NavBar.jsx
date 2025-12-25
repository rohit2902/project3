import React from 'react'

const NavBar = () => {
  return (
    <nav className='text-white flex items-center justify-between  py-5'>
        <h1 className='text-lg font-medium'>DV$Y</h1>
        <div className='text-xs rounded-sm flex items-center justify-center gap-3'>
            <div className="link px-4 py-2 rounded-xs bg-white/10 backdrop-blur-xl cursor-pointer hover:bg-orange-500 transition">
                <h3>DESIGNERS</h3>
            </div>
             <div className="link px-4 py-2 rounded-xs bg-white/10 backdrop-blur-xl cursor-pointer hover:bg-orange-500 transition">
                <h3>COLLABS</h3>
            </div>
             <div className="link px-4 py-2 rounded-xs bg-white/10 backdrop-blur-xl cursor-pointer hover:bg-orange-500 transition">
                <h3>EVENTS</h3>
            </div>
             <div className="link px-4 py-2 rounded-xs bg-white/10 backdrop-blur-xl cursor-pointer hover:bg-orange-500 transition">
                <h3>BLOGS</h3>
            </div>
            <div className="link px-4 py-2 rounded-xs bg-white/10 backdrop-blur-xl cursor-pointer hover:bg-orange-500 transition">
                <h3>CARDS</h3>
            </div>
            <div className="link px-4 py-2 rounded-xs bg-white/10 backdrop-blur-xl cursor-pointer hover:bg-orange-500 transition">
                <h3>GET IN TOUCH</h3>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
