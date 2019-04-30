/*
page that renders dropdown for all classes
 */

import React from "react"
import Global from "../components/global.js"
import ClassDropDown from "../components/classes/classDropdown.js"
import Class from "../components/classes/class.js"
import {graphql, StaticQuery} from "gatsby";
import shortid from "shortid";
import ClassFeature from "../components/classes/classFeatures";


export default () => (
    <Global>
        <div style={{top: "80px", position: "relative", height: "72px"}}/>
        <div style={{overflow: "scroll", height: "520px"}}>
            <StaticQuery query={
                graphql`
                    query{
                        allDataJson{
                            edges{
                                node{
                                    class{
                                        name
                                        proficiency
                                        startingEquipment {
                                            additionalFromBackground
                                            goldAlternative
                                            default
                                        }
                                        startingProficiencies{
                                            armor
                                            weapons
                                            tools
                                            skills {
                                                choose
                                            }
                                        }
                                        hd {
                                            number
                                            faces
                                        }
                                    }
                                }
                            }
                        }
                    }`
            }
            render={data => (
                <div>
                    {getClasses(data)}
                </div>
            )}
            />
        </div>
    </Global>
)

function getClasses(data){
    const featuresArray = []
    data.allDataJson.edges.forEach(datum => {
        const item = datum.node.class[0];
        featuresArray.push(<ClassDropDown
            name={item.name}
            key={shortid.generate()}
        >
        <Class data={item}/>
        </ClassDropDown>)
    })
    return featuresArray
}