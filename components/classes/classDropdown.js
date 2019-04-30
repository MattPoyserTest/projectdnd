/*
wrapper for dropDown.js that provides styling for class dropdowns
e.g. Bard, Barbarian
 */

import React from "react"
import styles from "../../styles/classDropDown.module.css"
import arrow from "../../images/down-arrow.png";
import DropDown from "../dropDown"


export default (props) => {
    return (
        <DropDown
            header={<ClassHeader
                iconpath={props.iconpath}
                name={props.name}/>}
            arrow={<ClassArrow/>}
            classname={styles.dropdown}
            childrenStyle={dropdownContent}
        >
            {props.children}
        </DropDown>
    )
}

const ClassHeader = (props) => {
    return (
        <div className={styles.dropdownDiv}>
            <img className={styles.dropdownIcon} src={props.iconpath} alt=""/>
            <p className={styles.dropdownText}>{props.name}</p>
        </div>
    )
}

class ClassArrow extends React.Component {
    constructor(props){
        super(props)
        this.state = {rotation: 0}
    }

    onClick = () => {
        this.setState({
            rotation: (this.state.rotation + 180) % 180
        })
    }

    render() {
        return (
            <img src={arrow} alt="" className={styles.dropdownArrow} onClick={this.onClick}/>
        )
    }
}

const dropdownContent = {
    position: "relative",
    width: "328px",

    left: "24px",
    background: "#4C5057",
    borderRadius: "10px",
};
