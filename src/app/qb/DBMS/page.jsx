import React from 'react';

const OS = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  };

  return (
    <div>
      <div style={{ ...containerStyle }}>
        <h1 className="middleTitle">DBMS TT1</h1>
      </div>
      <div style={containerStyle}>
        <h3>Question Bank</h3>
      </div>
        <div style={{ ...containerStyle, textAlign: 'center', fontSize: '16px', fontFamily: 'monospace' }}>
        <img src="/rotate-phone.png" alt="p" style={{width: '30px'}}/>
        <p>
            Rotate phone for better experience.
        </p>
      </div>
      <div style={containerStyle}>
      <iframe
          src="https://appflowy.com/06d5df1f-1c4d-4d92-8138-2d09beb3d7ae/DBMS-TT1-QB-4bdadc2c-cb1b-4f1b-b9d6-d3e275f4f77d"
          frameBorder="0"
          style={{ maxWidth: '830px', height: '1000px', width: '100%', display: 'block' }} // Adjust height as needed
          title="DBMS Document"
        />
      </div>
      
    </div>
  );
};

export default OS;
