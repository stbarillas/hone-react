import React from 'react';
import {RadioGroup, Radio} from 'react-mdl';


function RadioButtons(props){
    return (
        <RadioGroup name="demo" value="30">
            <Radio value="30" onClick={props.onClick}>30 Days</Radio>
            <Radio value="15" onClick={() => this.setDays(15)}>15 Days</Radio>
            <Radio value="7" onClick={() => this.setDays(7)}>7 Days</Radio>
            <Radio value="3" onClick={() => this.setDays(3)}>3 Days</Radio>
        </RadioGroup>
    );
}


export default (RadioButtons);