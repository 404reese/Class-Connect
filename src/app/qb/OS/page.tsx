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
        <h1 className="middleTitle">OS QB TT1</h1>
      </div>
      <div style={containerStyle}>
        <h3>For AI-DS Department</h3>
      </div>
        <div style={{ ...containerStyle, textAlign: 'center', fontSize: '16px', fontFamily: 'monospace' }}>
        <img src="/rotate-phone.png" alt="p" style={{width: '30px'}}/>
        <p>
            Rotate phone for better experience
        </p>
      </div>
      <div style={containerStyle}>
      <iframe
          src="https://appflowy.com/06d5df1f-1c4d-4d92-8138-2d09beb3d7ae/OS-TT1-QB-7aaebf50-2973-43e9-b7e4-bca2a0653e1a"
          frameBorder="0"
          style={{ maxWidth: '830px', height: '1200px', width: '100%', display: 'block' }} // Adjust height as needed
          title="DSA Document"
        />
      </div>
    </div>
  );
};

export default OS;
