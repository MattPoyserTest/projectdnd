/*
same as classDropdown component, except no dropdown arrow
will be used for individual class' pages.
 */
import styles from "../../styles/classes/classHeader.module.css";
import React from "react";


// in ../classes/x
// this affects the title (e.g. Bard).
// different from classDropdown.js since a) no arrow
// b)
export default (props) => {
    return (
        <div className={styles.dropdownDiv}>
            <img className={styles.dropdownIcon} src={props.iconpath} alt=""/>
            <p className={styles.dropdownText}>{props.name}</p>
        </div>
    )
}