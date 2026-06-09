import React from 'react';
import "./header.css";

const Header = () => {
  return (  
    <div>
      <div className="header">
       <div className="header-contents">
            <h2 className="header-title">GeeFood Delivery</h2>
            <p className="header-subtitle">From freshly prepared meals to irresitable treats, we bring your favorite food experiences together in one place.
                Explore a world of flavors, discover new dishes and enjoy seamless ordering designed to satisfy your cravings. 
                Whether you're in the mood for a quick bite or a gourmet feast, we've got you covered with a diverse selection of restaurants and cuisines at your fingertips.
            </p>
            <p>Good food isn't just a meal -- It's an experience. Start yours today.</p>
            <button className="header-btn">View Menu</button>
       </div>
      </div>
    </div>
  )
}

export default Header;
