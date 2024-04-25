import { DarkModeToggleProps } from '@/app/_types/types';
import React from 'react';


const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="darkSwitch"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label className="custom-control-label" htmlFor="darkSwitch">Dark Mode</label>
    </div>
  );
}

export default DarkModeToggle;
