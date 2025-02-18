import React from 'react';

const AIE = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  };

  return (
    <div>
      <div style={{ ...containerStyle }}>
        <h1 className="middleTitle">AIE TT1</h1>
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
          src="https://appflowy.com/06d5df1f-1c4d-4d92-8138-2d09beb3d7ae/AIE-TT1-QB-b1e61d93-ef66-4a93-941b-16c749c4f587"
          frameBorder="0"
          style={{ maxWidth: '830px', height: '1200px', width: '100%', display: 'block' }} // Adjust height as needed
          title="DSA Document"
          // https://appflowy.com/06d5df1f-1c4d-4d92-8138-2d09beb3d7ae/AIE-TT1-QB-b1e61d93-ef66-4a93-941b-16c749c4f587
        />
      </div>
      
      <div style={containerStyle}>
        <h3>Handwritten Notes : Module 1</h3>
      </div>
      <div style={containerStyle}>
      
      <iframe src="https://drive.google.com/file/d/1K_x_1N2WeJ2WJN7gnf2mMe9gHfhq_I8n/preview" style={{ maxWidth: '830px', height: '1000px', width: '100%', display: 'block' }} 
          title="AIE Document"></iframe>
         
      </div>
    </div>
  );
};

export default AIE;
