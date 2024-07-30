import React from 'react';
import '../styles/sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="keywords-section">
        <h5>Keywords</h5>
        <div className="keywords">
          <span className="keyword">Spring</span>
          <span className="keyword">Smart</span>
          <span className="keyword">Modern</span>
        </div>
      </div>

      <div className="filter-section">
        <h6>Label</h6>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> Spring
          </label>
          <label>
            <input type="checkbox" /> Smart
          </label>
          <label>
            <input type="checkbox" /> Modern
          </label>
        </div>
      </div>

      <div className="price-section">
        <h6>Price</h6>
        <input type="range" min="0" max="100" />
      </div>

      <div className="filter-section">
        <h6>Color</h6>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> Black
          </label>
          <label>
            <input type="checkbox" /> Orange
          </label>
          <label>
            <input type="checkbox" /> Blue
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h6>Size</h6>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> 40
          </label>
          <label>
            <input type="checkbox" /> 41
          </label>
          <label>
            <input type="checkbox" /> 42
          </label>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
