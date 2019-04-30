/*
component for primary toolbar
 */

import React from "react"
import DropLink, {ListLink} from "../components/listlink.js"
import styles from "../styles/toolbar.module.css"
import SubHeader from "../components/libraryheader"

import wikibutton from "../images/wikibutton.png"
import homebrewbutton from "../images/homebrewbutton.png"
import newsletterbutton from "../images/newsletterbutton.png"
import menubutton from "../images/menubutton.png"

export default ({ children }) => (
    <div className={styles.bar}>
        <DropLink to="/" iconpath={wikibutton} left={"16px"}><SubHeader/></DropLink>
        <ListLink to="/homebrew/" iconpath={homebrewbutton} left={"102px"}/>
        <ListLink to="/newsletter/" iconpath={newsletterbutton} left={"188px"}/>
        <ListLink to="/menu/" iconpath={menubutton} left={"274px"}/>
        {children}
    </div>
)
