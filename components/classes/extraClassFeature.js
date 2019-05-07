import React from "react"
import styles from "../../styles/classes/classFeatures.module.css"

export default (props) => (
    <div className={styles.background}>
        <div style={{height: "24px", top: "16px"}}/>
        <div> {props.children} </div>
    </div>
)