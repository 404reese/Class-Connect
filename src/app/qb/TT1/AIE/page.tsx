import React from 'react';
import Image from 'next/image';

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
        <h1 className="middleTitle">AIE QB TT1</h1>
      </div>
      <div style={containerStyle}>
        <h3>For AI-DS Department</h3>
      </div>
      <div style={{ ...containerStyle, textAlign: 'center', fontSize: '16px', fontFamily: 'monospace' }}>
        
        </div>
        <div style={{ ...containerStyle, textAlign: 'center', fontSize: '16px', fontFamily: 'monospace' }}>
        <Image src="/rotate-phone.png" alt="p" style={{width: '30px'}}/>

        <p>
            Rotate phone for better experience
        </p>
      </div>
      <div style={containerStyle}>
      <iframe
          src="https://appflowy.com/06d5df1f-1c4d-4d92-8138-2d09beb3d7ae/DAA-TT1-5849a32a-a302-47bf-ae74-74b8d6aacadc"
          frameBorder="0"
          style={{ maxWidth: '830px', height: '1200px', width: '100%', display: 'block' }} // Adjust height as needed
          title="DSA Document"
        />
      </div>
    </div>
  );
};

export default AIE;
