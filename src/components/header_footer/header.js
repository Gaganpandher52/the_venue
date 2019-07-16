import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './sideDrawer'; 

class Header extends Component {
  state = {
      drawOpen:false
  }
  toggleDrawer = (value ) => {
    this.setState({
      drawOpen: value
    })
  }

  render() {
    return (
      <div>
        <AppBar
        position='fixed'
        style={{  
          backgroundColor:'#2f2f2f',
          boxShadow:'none',
          padding:'10px 0px'
          
        }}
        >

        <ToolBar>
          <div className='header_logo'>
            <div className='font_righteous header_logo_venue'>The Venue</div>
            <div className='header_logo_title'>Musical events</div>
          </div>
          <IconButton
            aria-label='Menu'
            color='inherit'
            onClick={()=> this.toggleDrawer(true)}
          
          >
            <MenuIcon>
              
            </MenuIcon>
          
          </IconButton>
          <SideDrawer
            open={this.state.drawOpen}
            onClose={(value)=> this.toggleDrawer(value)}
          />
        </ToolBar>
        
        </AppBar>
        
       
        
      </div>
    );
  }
}

export default Header;