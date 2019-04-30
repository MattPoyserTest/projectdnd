/*
page for homebrew
 */

import React from "react"
import {Link} from "gatsby";
import Global from "../components/global.js"
import gstyles from "../styles/card.module.css";
import styles from "../styles/homebrew.module.css";

import Toolbar from "../components/toolbar";

export default () => (
    <Global>
        <div className={gstyles.card}>
            <div className={gstyles.cardTitle}>
                Homebrew
            </div>
            <Link to="/subscribe/" className={styles.button} style={{top: "328px"}}>
                <p className={styles.buttonText}>
                    Subscribe
                </p>
            </Link>
            <div className={`${gstyles.cardText} ${styles.text1}`}>
                Hi there!
                <br/><br/>
                We’re hoping to build a community for sharing art, stories and creating and collaborating on homebrew projects.
                <br/><br/>
                We’re starting with a reference tool to help build the foundations of the homebrew project.
                <br/><br/>
                If you’d like to hear more about what we’re up to please subscribe to our mailing list below!
            </div>
            <Link to="/discord/" className={styles.button} style={{top: "504px"}}>
                <p className={styles.buttonText}>Join Discord</p>
            </Link>
            <div className={`${gstyles.cardText} ${styles.text2}`}>
                We’re a small team from London working on Planeshift in our spare time. If you have any ideas, feedback or just want to chat you can join our Discord server here.
            </div>
        </div>
    </Global>
)




