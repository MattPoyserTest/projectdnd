/*
page from hello world tutorial
 */
import React from "react"
import Global from "../components/global.js"
import Toolbar from "../components/toolbar";
import styles from "../styles/card.module.css";

export default () => (
    <Global>
        <div className={styles.card}>
            <div>Wiki</div>
        </div>
    </Global>
)




