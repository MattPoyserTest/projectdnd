/*
component to render class features dropdown for data
//passed through props
 */

import React from "react"
import styles from "../../styles/classes/classFeatures.module.css"
import shortid from "shortid"

/*div style: height 16 is hacky solution, combined with anything else tagged: jkl;*/
export default (props) => {
    return (
        <div className={styles.background}>
            <div style={{height: "16px"}}/>
            <HeaderText>Hit Points</HeaderText>
            <SubText name={"Hit Dice:"}>{props.hd} </SubText>
            <SubText name={"Hit Points at 1st Level:"}>{props.hd} </SubText>
            <SubText name={"Hit Points at Higher Levels:"}>{props.hd} </SubText>
            <HeaderText> Proficiencies </HeaderText>
            <SubText name={"Armour:"}>{props.armour} </SubText>
            <SubText name={"Weapons:"}>{props.weapons} </SubText>
            <SubText name={"Tools:"}>{props.tools} </SubText>
            <SubText name={"Saving Throws:"}>{props.savingThrows} </SubText>
            <SubText name={"Skills:"}>{props.skills} </SubText>
            <HeaderText> Equipment </HeaderText>
            <SubText> {props.equipment} </SubText>
            <SubText> {props.alternative} </SubText>
        </div>
    )
}

export const HeaderText = (props) => {
    return (
        <div className={styles.headerText} key={shortid.generate()}>
            {props.children.toString()}
        </div>
    )
}

export const SubText = (props) => {
    return (
        <div className={styles.text} key={shortid.generate()}>
            <b> {props.name} </b>
            <span> {props.children.toString()} </span>
        </div>
    )
}