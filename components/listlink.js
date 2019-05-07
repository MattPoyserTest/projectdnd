/*
clickable icon that drops down on hover.
large commented sections were for experimenting with removing gap between
primary toolbar and content, depending on whether drop down was active
 */
import React, {useState, useEffect} from "react"
import {Link} from "gatsby";
import styles from "../styles/toolbar.module.css";


// n.b. gatsby link is cool - makes low priority request (with network?)
// when a link component is on the page. if mousehover over, makes
// high priority request. use only for internal navigation, however.
// also can use navigate instead, to send information.

//    <Link to={props.to} className={`${props.specStyle}`} style={{left: props.left, width: "70px", height: "64px", position: "absolute"}} style={`${props.specStyle}`}>
// <Link to={props.to} className={`${styles.icon} ${props.specStyle}`} style={{left: props.left}}><Link to={props.to} className={`${props.specStyle}`} style={{left: props.left, width: "70px", height: "64px", position: "absolute"}} style={`${props.specStyle}`}>

export const ListLink = props => (
    <Link to={props.to} className={styles.icon} style={{left: props.left}}>
        <img src={props.iconpath} alt=""/>
    </Link>
)

class DropLink extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: true
            // bugs when refreshing while hovering over this component
        };
        this.to = props.to;
        this.iconpath = props.iconpath;
        this.specstyle = props.specstyle;
        this.children = props.children;
        this.left = props.left;
        // this.hookFunction = props.hookFunction;
    }

    toggle() {
        // this.hookFunction();
        this.setState(prevState => ({
            // dropdownOpen: !prevState.dropdownOpen
        }));

        // const is_toggled = window.localStorage.getItem("is_toggled")
        // if is_toggled is set, re-set as negated
        // window.localStorage.setItem("is_toggled", is_toggled.toString() ? !(is_toggled === 'true') : false)

        // console.log("storage", window.localStorage.getItem("is_toggled"))
    }

    render() {
        console.log(this.state.dropdownOpen);
        return (
            <div className={styles.icon} onClick={this.toggle} style={{left: this.left}} onMouseEnter={this.toggle} onMouseLeave={this.toggle}>
                <ListLink to={this.to} iconpath={this.iconpath} left="0px" specstyle={this.specstyle}/>
                {
                    this.state.dropdownOpen && (
                        <div>
                            {this.children}
                        </div>
                    )
                }
            </div>
        )
    }
}

//function should start with "use"
// function useToggle(){
//     //determine whether toggled or not
//     const init_is_toggled = window.localStorage.getItem("is_toggled") || null;
//     console.log("init_log", init_is_toggled)
//
//     //set init usestate
//     const [is_toggled, is_toggled_func] = useState(init_is_toggled);
//
//     //if toggle_state is set, unset and vice versa.
//     const toggle_state_func = () => {
//         is_toggled ?  is_toggled_func(null) : is_toggled_func(1);
//     };
//
//     //send to local storage
//     useEffect(() => {
//         window.localStorage.setItem("is_toggled", is_toggled);
//         console.log("calling use effect");
//     });
//
//     return toggle_state_func;
// }

// function withToggle(Component) {
//     return function WrappedComponent(props) {
//         const hook = useToggle();
//         return <Component {...props} hookFunction={hook} />;
//     }
// }
// export default withToggle(DropLink);

export default DropLink;