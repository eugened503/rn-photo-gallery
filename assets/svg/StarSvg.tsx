import Svg, {Path} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const StarSvg = ({color}) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          flex: 1,
          //justifyContent: 'center',
          //alignItems: 'center',
          marginLeft: '65%',
          //borderColor: 'red',
          //borderWidth: '1',
        },
      ]}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M5.3717 24C5.10876 24 4.84764 23.9144 4.6248 23.7463C4.20969 23.4323 4.01578 22.8927 4.12875 22.3721L5.67274 15.275L0.436524 10.4833C0.0516271 10.1326 -0.0954101 9.57738 0.0626138 9.06931C0.220638 8.5622 0.65058 8.20317 1.15963 8.15407L8.08777 7.49773L10.8269 0.808815C11.0289 0.317373 11.4889 0 11.9999 0C12.511 0 12.971 0.317373 13.1729 0.807668L15.9121 7.49773L22.8391 8.15407C23.3493 8.20203 23.7792 8.5622 23.9372 9.06931C24.0952 9.57642 23.9491 10.1326 23.5642 10.4833L18.328 15.274L19.872 22.3709C19.9852 22.8927 19.7911 23.4323 19.3761 23.7453C18.9621 24.0583 18.4101 24.0824 17.9741 23.8089L11.9999 20.0836L6.02577 23.811C5.8238 23.9362 5.59876 24 5.3717 24ZM11.9999 18.4787C12.227 18.4787 12.4518 18.5424 12.654 18.6675L18.2921 22.1863L16.8349 15.4879C16.7309 15.0111 16.886 14.5134 17.2391 14.1909L22.1832 9.66623L15.642 9.04638C15.171 9.00148 14.766 8.69251 14.582 8.23967L11.9999 1.92736L9.41477 8.24063C9.23276 8.69041 8.82772 8.99938 8.35786 9.04428L1.81571 9.66412L6.75968 14.1887C7.11381 14.5122 7.26872 15.009 7.1638 15.4869L5.70771 22.1852L11.3459 18.6675C11.5478 18.5424 11.7729 18.4787 11.9999 18.4787ZM8.03486 7.62709C8.03486 7.62709 8.03486 7.62823 8.03376 7.62919L8.03486 7.62709ZM15.963 7.62403L15.9641 7.62613C15.9641 7.62499 15.9641 7.62499 15.963 7.62403Z"
          fill={color}
        />
      </Svg>
      <View>
        <Text
          style={[
            styles.text,
            color === '#A10D99' ? styles.textActive : styles.textInactive,
          ]}>
          Избранное
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: -18,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 16,
  },
  textActive: {
    color: '#A10D99',
  },
  textInactive: {
    color: '#94949D',
  },
});
