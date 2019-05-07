import React from "react"
import shortid from "shortid";
import {FeatureDropDown} from "./class";
import Spellcasting from "./spellcasting"
import ExtraClassFeature from "./extraClassFeature"

export default (props) => (
    <div>
        {getClasses(props.data)}
    </div>
)


function getClasses(data){
    const featuresArray = []
    data.forEach(datum => {
        datum.forEach(item => {
            if (item.name == "Spellcasting"){
                featuresArray.push(<FeatureDropDown name="Spellcasting">
                    <Spellcasting key={shortid.generate()}>
                        {item.entries}
                    </Spellcasting>
                </FeatureDropDown>)
            }
            else {
                featuresArray.push(<FeatureDropDown
                        name={item.name}
                        key={shortid.generate()}
                    >
                    <ExtraClassFeature>
                        {item.entries}
                    </ExtraClassFeature>
                </FeatureDropDown>)
            }
        })
    })
    return featuresArray
}