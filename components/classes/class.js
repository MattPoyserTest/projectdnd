/*
component to render individual class
 */
import React from "react"
import DropDown from "../dropDown";
import styles from "../../styles/classes/classFeaturesDropdown.module.css";
import arrow from "../../images/down-arrow.png";
import ClassFeature from "./classFeatures.js"
import MoreClassFeatures from "./moreClassFeatures"
import shortid from "shortid"

export default (props) => (
    <div className={styles.dropdownBackground}>
        <FeatureDropDown
            name={"Class Features"}
            key={shortid.generate()}
        >
            <ClassFeature
                hd={[props.data.hd.number, props.data.hd.faces]}
                armour={props.data.startingProficiencies.armor}
                weapons={props.data.startingProficiencies.weapons}
                tools={props.data.startingProficiencies.tools}
                skills={props.data.startingProficiencies.skills.choose}
                savingThrows={props.data.proficiency}
                alternative={props.data.startingEquipment.goldAlternative}
                equipment={props.data.startingEquipment.default}
            />
        </FeatureDropDown>
        <MoreClassFeatures data={props.data.classFeatures}/>
    </div>
)

export const FeatureDropDown = (props) => {
    return (
        <DropDown
            header={<FeatureHeader name={props.name}/>}
            arrow={<FeatureArrow/>}
            classname={styles.dropdown}
            childrenStyle={dropdownContent}
        >
            {props.children}
        </DropDown>
    )
}

const FeatureHeader = (props) => {
    return (
        <p className={styles.dropdownText}>{props.name}</p>
    )
}

const FeatureArrow = () => {
    return (
        <img src={arrow} alt="" className={styles.dropdownArrow}/>
    )
}

const dropdownContent = {
    position: "relative",
    width: "296px",
    top: "-24px", //hacky solution, combined with anything else tagged: jkl;
    marginBottom: "-24px", //hacky solution, combined with anything else tagged: jkl;

    background: "#4C5057",
    borderRadius: "10px",
};
