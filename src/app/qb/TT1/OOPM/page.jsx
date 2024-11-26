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
        <span style={{fontWeight:'bold'}}>Hard-refresh</span> page for updated content
        </p>
      </div>
      <div style={containerStyle}>
      <iframe style={{width: '100%', height: '1200px', border: '2px solid #ccc', borderRadius: '10px'}} src="https://v2-embednotion.com/818588d0d2b4456bbae163237f0f52f0"></iframe>
      </div>
    </div>
  );
};

export default Dsa;

