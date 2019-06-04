import React from 'react';
import {RadioGroup, Radio} from 'react-mdl';
import "./radioButtons.css";

// Takes props.onclick and renders radio group and buttons
// When onClick is called, passes its value to a function that injects this value to setDays method
function RadioButtons(props){
     return (
            <div id={"radioContainer"}>
                <h1 id={"radioTitle"}>Day Filter</h1>
                <RadioGroup name="demo" value="30">
                    <Radio className={"radioButtons"} value="3" onClick={() => props.onClick(3)}>3 Days</Radio>
                    <Radio className={"radioButtons"} value="7" onClick={() => props.onClick(7)}>7 Days</Radio>
                    <Radio className={"radioButtons"} value="15" onClick={() => props.onClick(15)}>15 Days</Radio>
                    <Radio className={"radioButtons"} value="30" onClick={() => props.onClick(30)}>30 Days</Radio>
                </RadioGroup>
            </div>
        );
}

export default (RadioButtons);