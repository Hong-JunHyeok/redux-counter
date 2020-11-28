import React from "react";
import propTypes from "prop-types";
import "./Counter.css";

const Counter = ({
    number,
    color,
    onIncrement,
    onDecrement,
    onSetColor,
    index,
}) => {
    return (
        <>
            <div
                className="Counter"
                onClick={() => onIncrement(index)}
                onContextMenu={(e) => {
                    e.preventDefault();
                    onDecrement(index);
                }}
                onDoubleClick={() => onSetColor(index)}
                style={{
                    backgroundColor: color,
                }}
            >
                {number}
            </div>
        </>
    );
};

Counter.propTypes = {
    index: propTypes.number,
    number: propTypes.number,
    color: propTypes.string,
    onIncrement: propTypes.func,
    onDecrement: propTypes.func,
    onSetColor: propTypes.func,
};

Counter.defaultProps = {
    index: 0,
    number: 0,
    color: "black",
    onIncrement: () => console.warn("onIncrement is not defined"),
    onDecrement: () => console.warn("onDecrement is not defined"),
    onSetColor: () => console.warn("onSetColor is not defined"),
};

export default Counter;
