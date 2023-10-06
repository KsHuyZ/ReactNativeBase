import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import type {TextInputProps} from 'react-native-paper';

const CustomTextInput = (props: TextInputProps) => {
  return (
    <TextInput
      style={{backgroundColor: 'transapent', ...props.style}}
      underlineColor={'#3BCCBB'}
      activeUnderlineColor={'#3BCCBB'}
      {...props}
    />
  );
};

export default CustomTextInput;
