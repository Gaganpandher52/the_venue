import React from 'react';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import Header from '../header_footer/header';
import Featured from '../featured';
import Zoom from 'react-reveal/Zoom'

const VenueInfo = () => {
  return (
    <div className='bck_black' >
      
      <div className='center_wrapper'>
        <div className='vn_wrapper'>
          <Zoom durtion={500}>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className='vn_inner'>
                  <div className='vn_icon_square bck_red'></div>
                  <div 
                    className='vn_icon'
                    style={{
                      background:`url(${icon_calendar})`
                    }}
                  ></div> 
                  <div className='vn_title'>
                    Event Date & Time
                  </div>        
                  <div className='vn_desc'>
                    15 August 2019 @10.00 pm  
                  </div> 

                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className='vn_item'>
              <div className='vn_outer'>
                <div className='vn_inner'>
                  <div className='vn_icon_square bck_yellow'></div>
                  <div 
                    className='vn_icon'
                    style={{
                      background:`url(${icon_location})`
                    }}
                  ></div> 
                  <div className='vn_title'>
                    Event Location
                  </div>        
                  <div className='vn_desc'>
                    100 St 9 Ave SW Calgary AB
                  </div> 

                </div>
              </div>
            </div> 
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;