import React from "react";
import "./clickItem.css"


const ClickItem = (props) => {
    return (
        <div
            onClick={() => props.handleItemClick(props.letter)}
            className="clickItem"
        >
            {props.letter}
            <img
                src={props.src}
                alt=""
            />
        </div>
    )
};

export default ClickItem;