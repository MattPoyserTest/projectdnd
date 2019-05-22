import React from "react"
import styles from "../../styles/classes/classFeatures.module.css"
import {HeaderText, SubText} from "./classFeatures";

export default (props) => (
    <div className={styles.background}>
        <div style={{height: "24px", top: "16px"}}/>
        <SubText> {props.children} </SubText>
    </div>
)