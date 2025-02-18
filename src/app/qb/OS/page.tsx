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
        <h1 className="middleTitle">OS TT1</h1>
      </div>
      <div style={containerStyle}>
        <h3>Question Bank</h3>
      </div>
        <div style={{ ...containerStyle, textAlign: 'center', fontSize: '16px', fontFamily: 'monospace' }}>
        <img src="/rotate-phone.png" alt="p" style={{width: '30px'}}/>
        <p>
            Rotate phone for better experience, Scroll below QB to see notes.
        </p>
      </div>
      <div style={containerStyle}>
      <iframe
          src="https://appflowy.com/06d5df1f-1c4d-4d92-8138-2d09beb3d7ae/OS-TT1-QB-7aaebf50-2973-43e9-b7e4-bca2a0653e1a"
          frameBorder="0"
          style={{ maxWidth: '830px', height: '1000px', width: '100%', display: 'block' }} // Adjust height as needed
          title="DSA Document"
        />
      </div>
      <div style={containerStyle}>
        <h3>Handwritten Notes : Module 1</h3>
      </div>
      <div style={containerStyle}>
      
      <iframe src="https://drive.google.com/file/d/1qi2BO8G9YL3mSZBzVnZeDY1imsbqV-yd/preview" style={{ maxWidth: '830px', height: '1000px', width: '100%', display: 'block' }} // Adjust height as needed
          title="OS Document"></iframe>
      </div>
      <div style={containerStyle}>
        <h3>Handwritten Notes : Module 2</h3>
      </div>
      <div style={containerStyle}>
      
      <iframe src="https://drive.google.com/file/d/1pNdRixmpDP2-5kOn5pwVCKp60MTpMafl/preview" style={{ maxWidth: '830px', height: '1000px', width: '100%', display: 'block' }} 
          title="AIE Document"></iframe>
          
      </div>
    </div>
  );
};

export default OS;
