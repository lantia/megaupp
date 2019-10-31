import React from 'react';
import {Text} from 'react-native';

export default function MegaText(props) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Text style={{fontFamily: 'Montserrat'}}>
      <Text style={props.style}>{props.children}</Text>
    </Text>
  );
}
