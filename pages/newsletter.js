/*
page for newsletter
 */
import React from "react"
import Global from "../components/global.js"
import gstyles from "../styles/card.module.css"
import styles from "../styles/homebrew.module.css"
import {Link} from "gatsby";
import Follower from "../components/followers.js"
import Toolbar from "../components/toolbar";

export default () => (
    <Global>
        <div className={gstyles.card}>
            <div className={gstyles.cardTitle}>
                Share with a friend!
            </div>
            <div className={`${gstyles.cardText} ${styles.text1}`}>
                If you like what we’re up to please share with your friends, family and familiars. It helps a lot and the more feedback we get the better Planeshift will become.
            </div>
            <Follower/>
            <div className={gstyles.cardTitle} style={{top: "224px"}}>
                Ideas? Feedback?
            </div>
            <div className={`${gstyles.cardText} ${styles.text3}`} style={{top: "264px"}}>
                If you have any ideas for Planeshift, found a bug or just want to give us your thoughts, join us on Discord.
                <br/><br/>
                We’re a small team working in our spare time so encouragement is also welcome!
            </div>
            <Link to="/discord/" className={styles.button} style={{top: "400px"}}>
                <p className={styles.buttonText}>Join Discord</p>
            </Link>
        </div>
    </Global>
)




