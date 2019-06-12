import React from 'react';
import {RadioGroup, Radio} from 'react-mdl';
import "./radioButtons.css";

// Takes props.onclick and renders radio group and buttons
// When onClick is called, passes its value to a function that injects this value to setDays method
function GraphRadioButtons(props){
     return (
            <div id={"radioContainer"}>
                <RadioGroup name="GraphRadioButtons" value="1095">
                    <Radio className={"radioButtons"} value="30" onClick={() => props.onClick(30)}>1 Month</Radio>
                    <Radio className={"radioButtons"} value="91" onClick={() => props.onClick(91)}>3 Months</Radio>
                    <Radio className={"radioButtons"} value="182" onClick={() => props.onClick(182)}>6 Months</Radio>
                    <Radio className={"radioButtons"} value="365" onClick={() => props.onClick(365)}>1 Year</Radio>
                    <Radio className={"radioButtons"} value="730" onClick={() => props.onClick(730)}>2 Years</Radio>
                    <Radio className={"radioButtons"} value="1095" onClick={() => props.onClick(1095)}>3 Years</Radio>
                </RadioGroup>
            </div>
        );
}

function TableRadioButtons(props){
    return (
        <div id={"radioContainer"}>
            <RadioGroup name="TableRadioButtons" value="USD">
                <Radio className={"radioButtons"} value="USD" onClick={() => props.onClick('USD')}>USD</Radio>
                <Radio className={"radioButtons"} value="EUR" onClick={() => props.onClick('EUR')}>EUR</Radio>
                <Radio className={"radioButtons"} value="GBP" onClick={() => props.onClick('GBP')}>GBP</Radio>
            </RadioGroup>
        </div>
    );
}

export {GraphRadioButtons, TableRadioButtons};