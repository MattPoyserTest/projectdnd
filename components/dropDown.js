/*
class that provides conditional render on dropdown arrow click
 */
import React from "react";


export default class DropDown extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
        this.children = props.children
        this.header = props.header
        this.arrow = props.arrow
        this.className = props.classname
        this.dropdownContent = props.childrenStyle
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render(){
        return (
            <div>
                <div className={this.className}>
                    {this.header}
                    <div onClick={this.toggle}>
                        {this.arrow}
                    </div>
                </div>
                {
                    this.state.dropdownOpen ? (
                            <div style={this.dropdownContent}>
                                {this.children}
                            </div>
                        )
                        :   (
                            null
                        )
                }
            </div>
        )
    }
}