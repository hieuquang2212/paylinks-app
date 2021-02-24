import React, { Component } from 'react'
import { View } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
var radio_props = [
    {label: 'Quét mã QR', value: 0 },
    {label: 'Sinh mã QR', value: 1 }
  ];
export default class RadioGroup extends Component {
    state = {
        value: 0
    }
    render() {
        return (
            <View style={{ height: 50}}>
            <RadioForm
            formHorizontal={true}
            animation={true}
            >
            {
                radio_props.map((obj, i) => (
                <View style={{ flex: 1}} key={i}>
                <RadioButton labelHorizontal={true} >
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={this.state.value === i}
                    onPress={(value) => {this.setState({value:value})}}
                    borderWidth={1}
                    buttonInnerColor={'#51E0FF'}
                    buttonOuterColor={this.state.value === i ? '#2196f3' : '#000'}
                    buttonSize={14}
                    buttonOuterSize={20}
                    buttonStyle={{}}
                    buttonWrapStyle={{marginLeft: 10}}
                    />
                    <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    labelStyle={{fontSize: 15, color: '#000'}}
                    labelWrapStyle={{}}
                    />
                </RadioButton>
                </View>
                ))
            }  
            </RadioForm>
            </View>
        )
    }
}
