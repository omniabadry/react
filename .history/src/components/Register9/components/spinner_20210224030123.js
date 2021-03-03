import React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import { Transition } from "react-transition-group";

export const Spinner = ({ isOpen }) => {
    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        // zIndex: 1000,
    };

    const transitionStyles = {
        entering: { opacity: 0.7 },
        entered: { opacity: 0.7 },
        exiting: { opacity: 0 },
        exited: { opacity: 0, display: "none" },
    };

    return ( <
        Transition in = { isOpen }
        timeout = { 300 } > {
            (state) => ( <
                >
                <
                div className = "spinner-body"
                style = {
                    {...defaultStyle, ...transitionStyles[state] } } >
                <
                div className = "spinner-inner" >
                <
                Loader type = "TailSpin"
                color = "#01385f"
                height = { 100 }
                width = { 100 }
                /> <
                /div> <
                /div> <
                />
            )
        } <
        /Transition>
    );
};

Spinner.propTypes = {
    isOpen: PropTypes.bool.isRequired,
};