
/*
component for row of buttons to click to follow us
*/


import {Link} from "gatsby";
import styles from "../styles/followers.module.css";
import React from "react";
import facebookbutton from "../images/facebookcta.png";
import messengerbutton from "../images/messengercta.png";
import whatsappbutton from "../images/whatsappcta.png";
import twitterbutton from "../images/twittercta.png";

const Follower = props => (
    <div className={styles.icon} style={{left: props.left}}>
        <Link to={props.to}>
            <img src={props.iconpath} alt=""/>
        </Link>
    </div>
)

export default () => (
    <div>
        <Follower to="/facebook/" iconpath={facebookbutton} left="8px"/>
        <Follower to="/messenger/" iconpath={messengerbutton} left="88px"/>
        <Follower to="/whatsapp/" iconpath={whatsappbutton} left="168px"/>
        <Follower to="/twitter/" iconpath={twitterbutton} left="248px"/>
    </div>
)