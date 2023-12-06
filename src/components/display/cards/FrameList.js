import React from 'react';


const FrameList = (props) => {
  return (
    <div style={{ display: 'flex', overflowX: 'auto', width: '97vw' }}>
      {props.data.map((frame) => (
        <div key={frame._id} style={{ flex: '0 0 auto', marginRight: '50px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '5px'
            }}
          >
            {frame.frames.map((image, index) => (
              <img
                key={index}
                src={image.thumbnail}
                alt={`${index + 1}`}
                style={{ maxWidth: '80px', height: 'auto', border:'solid black 1px' }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrameList;