/*
secondary toolbar component
 */
import React from "react"
import styles from "../styles/toolbar.module.css"

import characterbutton from "../images/characterbutton.png"
import classesbutton from "../images/classesbutton.png"
import spellsbutton from "../images/spellsbutton.png"
import rulesbutton from "../images/rulesbutton.png"
import monsterbutton from "../images/monsterbutton.png"
import {Link} from "gatsby";

export default () => (
    <div className={styles.subheader}>
        <SubIcon to="/character" iconpath={characterbutton} left="16px" style={{backgroundColor: "blueviolet"}}/>
        <SubIcon to="/classes" iconpath={classesbutton} left="85px"/>
        <SubIcon to="/spells" iconpath={spellsbutton} left="154px"/>
        <SubIcon to="/rules" iconpath={rulesbutton} left="223px"/>
        <SubIcon to="/monster" iconpath={monsterbutton} left="291px"/>
    </div>
)
export const SubIcon = props => (
    <Link to={props.to} className={styles.subicon} style={{left: props.left}}>
        <img src={props.iconpath} alt="" style={{backgroundColor: "transparent"}}/>
    </Link>
)