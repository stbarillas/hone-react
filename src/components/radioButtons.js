import React from 'react';
import {RadioGroup, Radio} from 'react-mdl';


class RadioButtons extends React.Component {
    render() {
        return (
            <RadioGroup name="demo" value="30">
                <Radio value="30">30 Days</Radio>
                <Radio value="15">15 Days</Radio>
                <Radio value="7" >7 Days</Radio>
                <Radio value="3" >3 Days</Radio>
            </RadioGroup>
        );
    }
}


export default (RadioButtons);