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
        <h1 className="middleTitle">Maths TT2 QB</h1>
      </div>
      <div style={containerStyle}>
        <h3>For All Departments</h3>
      </div>
      <div style={{ ...containerStyle, textAlign: 'center', fontSize: '16px', fontFamily: 'monospace' }}>
        <p>
          ⚠️ I&apos;ve solved these questions, but no guarantee of accuracy or marks. Review carefully and verify with other sources!
        </p> 
        </div>
        {/* <div style={{ ...containerStyle, textAlign: 'center', fontSize: '16px', fontFamily: 'monospace' }}>
        <img src="/rotate-phone.png" alt="p" style={{width: '30px'}}/>
        <p>
            Rotate phone for better experience
        </p>
      </div> */}
      <div style={containerStyle}>
      <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vTO2NbeqHB6G_AdKWHXFbEdBEYczfbse1_1bcgx5mCyk8Q4xGgLc6UB3VHi_kv8uakpJwwCAqn-kh2H/pub?embedded=true"
          frameBorder="0"
          style={{ maxWidth: '830px', height: '1200px', width: '100%', display: 'block' }} // Adjust height as needed
          title="maths Document"
        />
      </div>
    </div>
  );
};

export default Dsa;
