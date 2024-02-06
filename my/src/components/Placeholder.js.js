import React from 'react';

const Placeholder = (props) => {
  const { name } = props;

  return (
    <>
      <div style={{ width: '1067', height: '63px', background: '#C4C4C4', borderRadius: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: "10px" }}>
        <div style={{ color: 'black', fontSize: 25, fontFamily: 'Krona One', fontWeight: '400', wordWrap: 'break-word', margin: '10px' }}>
          {name}
        </div>
        <button style={{ backgroundColor: '#0D5DDB', margin: "5px" }}>
          <div style={{ color: 'white', fontSize: 18, fontFamily: 'Krona One', fontWeight: '400', wordWrap: 'break-word' }}>
            Vote now
          </div>
        </button>
      </div>

    </>
  );
};

export default Placeholder;


