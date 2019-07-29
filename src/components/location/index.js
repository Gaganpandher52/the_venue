import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5016.6704030711035!2d-114.06289823182455!3d51.046898144500105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ffb86200597%3A0x10c42af1e7df241e!2sDowntown%2C+Calgary%2C+AB!5e0!3m2!1sen!2sca!4v1564434752626!5m2!1sen!2sca" 
      width="100%" 
      height="500px" 
      frameBorder="0" 
      allowFullScreen></iframe>
      <div className='location_tag'>
        <div>Location</div>

      </div>
       
    </div>
  );
};

export default Location;