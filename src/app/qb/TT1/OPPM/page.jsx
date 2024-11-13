import React from 'react';

const Dsa = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  };

  return (
    <div>
      <div style={{ ...containerStyle }}>
        <h1 className="middleTitle">OOPM QB TT1</h1>
      </div>
      <div style={containerStyle}>
        <h3>For AI-DS Department</h3>
      </div>
      <div style={{ ...containerStyle, textAlign: 'center', fontSize: '16px', fontFamily: 'monospace' }}>
        <p>
          ⚠️ I&apos;ve solved these questions, but no guarantee of accuracy or marks. Review carefully and verify with other sources!
        </p> 
        </div>
        <div style={{ ...containerStyle, textAlign: 'center', fontSize: '16px', fontFamily: 'monospace' }}>
        <p>
        🔃  <span style={{fontWeight:'bold'}}>Hard-refresh</span> page for updated content
        </p>
      </div>
      <div style={containerStyle}>
      <iframe
          src="https://appflowy.com/06d5df1f-1c4d-4d92-8138-2d09beb3d7ae/OOPM-TT1-a1f9e997-d6bb-460f-b10f-bee9554d1da9"
          frameBorder="0"
          style={{ maxWidth: '830px', height: '1200px', width: '100%', display: 'block' }} // Adjust height as needed
          title="DSA Document"
        />
      </div>
    </div>
  );
};

export default Dsa;
