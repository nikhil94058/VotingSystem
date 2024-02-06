import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
    alignItems: 'center',
  };

  const navListStyle = {
    listStyleType: 'none',
    display: 'flex',
  };

  const navItemStyle = {
    marginRight: '15px',
    cursor: 'pointer',
  };

  return (
    <nav style={navbarStyle}>
      <div>EZ Vote</div>
      <ul style={navListStyle}>
        <li style={navItemStyle}>ORGs</li>
        <li style={navItemStyle}>Candidates</li>
        <li style={navItemStyle}>Elections</li>
        <li style={navItemStyle}>Past Elections</li>
        <div><div style={{ width: '100%', height: '100%', background: '#D9D9D9', borderRadius: 9999 }} /> profile</div>
      </ul>

    </nav>
  );
};

export default Navbar;
