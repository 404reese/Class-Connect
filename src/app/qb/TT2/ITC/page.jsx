import React from 'react';

const ITCTT2 = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  };

  return (
    <div>
      <div style={{ ...containerStyle }}>
        <h1 className="middleTitle">ITC QB TT2</h1>
      </div>
      
      <div style={{ ...containerStyle, textAlign: 'center', fontSize: '16px', fontFamily: 'monospace' }}>
        
      </div>
      <div style={containerStyle}>
      <iframe src="https://internal-territory-dee.notion.site/ebd/28f2d17d894280c0aaa1f04e7a285345" width="100%" height="1000" frameborder="0" allowfullscreen />
      </div>
    </div>
  );
};

export default ITCTT2;
