import React from 'react';
import { View, StyleSheet } from 'react-native';
import TimeLineContent from './timeLineContent';
import { Text } from '..'
import { colors, size } from '../styles.js';

type Props = {
    data?: ?any,
    lineColor?: ?string,
    pointContainerSize?: number,
    pointTextColor?: ?string,
    pointTextSize?: number,
    contentTextColor?: ?string,
    contentTextSize?: number,
    margin?: number,
    pointCustomStyle?: any,
    contentTitleStyle?: any,
    contentDescriptionStyle?: any,
    containerItemStyle?: ?any,
};

const TimeLine = (props: Props) => {
  if (!props.data || props.data.lenght === 0) return null;

  return (
  props.data.map((item, index) => (
        <View style={styles.container(props.margin)} key={index}>
            <View style={styles.pointContainer}>
                { index === (props.data.length -1) ? null : <View style={styles.verticalLine(props.lineColor)}></View> }
                 <View style={styles.pointWrap(props.lineColor)}>
                    <Text color='white' fontSize='small' textAlign='center'> {item.time} </Text>
                 </View>
            </View>

            <TimeLineContent icon={item.icon} title={item.title} description={item.description}/>
        </View>
  ))
  );
}

const styles = StyleSheet.create({
  container: (margin) => ({
    marginTop: size[margin] || 0,
    flexDirection: 'row'
  }),
  verticalLine: (color) => ({
    backgroundColor: colors[color] || colors.midBlue,
    width: size.line,
    height: '100%',
    position: 'absolute',
    marginTop: size.defaultMargin,
  }),
  pointContainer: {
    width: size.smallContainer,
    alignItems: 'center',
  },
  pointWrap: (color) => ({
    backgroundColor: colors[color] || colors.midBlue,
    paddingVertical: size.smallPadding,
    paddingHorizontal: size.mediumPadding,
    borderRadius: size.largeRadius,
    alignItems: 'center',
  }),
})

export default TimeLine