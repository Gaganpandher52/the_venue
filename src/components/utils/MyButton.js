import React from 'react';
import Button from '@material-ui/core/Button'
import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = () => {
  return (
    <div>
      <Button
        href='http://google.com'
        variant='contained'
        size='small'
        style={{
          background:'red',
          color:'white'
        }}
      >
        <img 
          src={TicketIcon}
          className='iconImage'
          alt='icon_button'
        />
        Button
      </Button>
      
    </div>
  );
};

export default MyButton;