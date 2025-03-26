'use client'

import React from "react";


const Header =()=>{
    return(
<header className="bg-black text-white">
    <div>
        <h1 className="text-3xl text-center font-extrabold tracking-wide uppercase text-white glow-effect">
            The Nail House
        </h1>
    </div>
    <style jsx>{`
        .glow-effect {
          text-shadow: 0 0 10px rgba(255, 105, 180, 0.8), 
                       0 0 20px rgba(255, 105, 180, 0.6), 
                       0 0 30px rgba(255, 105, 180, 0.4);
        }
      `}</style>
</header>
    );
};

export default Header;