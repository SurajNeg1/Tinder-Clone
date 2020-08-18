import React from 'react';
import {Link, useHistory} from "react-router-dom";
import "./header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({backbutton}) {
  const history = useHistory();
  return (
    <div className="header" >
      {backbutton?(
        <IconButton onClick={()=>history.replace(backbutton)}>
            <ArrowBackIosIcon className="header__backicon" fontSize="large" />    
        </IconButton>
      ):(    
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />    
        </IconButton>
      )}
    
        <Link to="/">
          <img 
              className="header__logo"
              src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
              alt="logo"/>
        </Link>
        <Link to="/chat">
          <IconButton>
              <ForumIcon className="header__icon"  fontSize="large"/>
          </IconButton>
        </Link>
    </div> 
  );
}

export default Header;
