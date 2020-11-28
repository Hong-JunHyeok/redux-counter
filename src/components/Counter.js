import React from "react";
import propTypes from "prop-types";
import "./Counter.css";

const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => {
    return (
        <div
            className="Counter"
            onClick={onIncrement}
            onContextMenu={(e) => {
                e.preventDefault();
                onDecrement();
            }}
            onDoubleClick={onSetColor}
            style={{
                backgroundColor: color,
            }}
        >
            {number}
        </div>
    );
};

Counter.propTypes = {
    number: propTypes.number,
    color: propTypes.string,
    onIncrement: propTypes.func,
    onDecrement: propTypes.func,
    onSetColor: propTypes.func,
};

Counter.defaultProps = {
    number: 0,
    color: "black",
    onIncrement: () => console.warn("onIncrement is not defined"),
    onDecrement: () => console.warn("onDecrement is not defined"),
    onSetColor: () => console.warn("onSetColor is not defined"),
};

export default Counter;
