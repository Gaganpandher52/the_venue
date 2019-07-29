import React, { Component } from 'react';

class Pricing extends Component {
  state = {
    prices:[100,150,250],
    positions:['Baclcony','Medium','Star'],
    desc:[
      'This is some random text',
      'This is some more random text',
      'This is some more more random text'
    ]

  }


  render() {
    return (
      <div className='bck_black'>
        <div className='center_wrapper pricing_section'> 
          <h2>Pricing</h2>
            <div className='pricing_wrapper'>
              boxes

            </div>

        </div>
        
      </div>
    );
  }
}

export default Pricing;