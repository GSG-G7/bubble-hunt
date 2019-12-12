import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default ({units, className, onClick, id}) => (
  <View
    style={{
      width: 30,
      height: 30,
      backgroundColor: 'red',
      borderRadius: '50%',
    }}>
    <TouchableOpacity>
      <Text>f</Text>
    </TouchableOpacity>
  </View>
);
