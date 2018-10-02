import React from "react";
import "./clickItem.css"


const ClickItem = (props) => {

    return (
        <div
            onClick={() => props.handleItemClick(props.letter)}
            className="clickItem"
        >
            <img
                classname="clickImg"
                src={props.src}
                alt={props.letter}
            />
        </div>
    )
};

export default ClickItem;