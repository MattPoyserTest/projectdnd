/*
component for global styling of every page.
base background, top toolbar, etc.
 */
import React from "react"
import styles from "../styles/global.module.css"
import Toolbar from "../components/toolbar.js"


export default ({ children }) => (
    <div className={styles.baseBackground}>
         <Toolbar/>
         {children}
     </div>
    // (window.localStorage.getItem("is_toggled") === 'true') ? (
    //     <div className={styles.baseBackground}>
    //         <Toolbar/>
    //         <div className={styles.dropped}>
    //             {children}
    //         </div>
    //     </div>
    // ): (
    //     <div className={styles.baseBackground}>
    //         <Toolbar/>
    //         <div className={styles.undropped}>
    //             {children}
    //         </div>
    //     </div>
    // )
)