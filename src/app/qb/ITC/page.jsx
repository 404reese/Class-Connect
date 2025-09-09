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
        <h1 className="middleTitle">ITC QB TT1</h1>
      </div>
      
      <div style={{ ...containerStyle, textAlign: 'center', fontSize: '16px', fontFamily: 'monospace' }}>
        
      </div>
      <div style={containerStyle}>
      <iframe src="https://internal-territory-dee.notion.site/ebd/2632d17d89428089a0feed6332f99bb1" width="100%" height="1000" frameborder="0" allowfullscreen />
      </div>
    </div>
  );
};

export default Dsa;
