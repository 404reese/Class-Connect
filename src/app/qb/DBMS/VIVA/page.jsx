import React from 'react';

const DBMSLMR = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  };

  return (
    <div>
      <div style={{ ...containerStyle }}>
        <h1 className="middleTitle">DBMS VIVA LMR</h1>
      </div>
      <div style={containerStyle}>
        <h3></h3>
      </div>
        <div style={{ ...containerStyle, textAlign: 'center', fontSize: '16px', fontFamily: 'monospace' }}>
        <img src="/rotate-phone.png" alt="p" style={{width: '30px'}}/>
        <p>
            Rotate phone for better experience.
        </p>
      </div>
      <div style={containerStyle}>
      <iframe
          src="https://any.coop/A9PiTECq5wcvcW2mpVNq9dW9bephteMLZFd4fwbSqetBnJgL/my-sql-lmr-sheet"
          frameBorder="0"
          style={{ height: '1000px', width: '100%', display: 'block' }} // Adjust height as needed
          title="DBMS Document"
        />
      </div>
      
    </div>
  );
};

export default DBMSLMR;
