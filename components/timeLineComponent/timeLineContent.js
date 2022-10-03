import React from 'react';
import { Image, View, StyleSheet } from 'react-native'
import { Text } from '..'
import { colors, size } from '../styles.js';

const TimeLineContent = ({ icon, title, description }) => {
  return (
    <View style={styles.container}>
        <Image source={icon}/>
        <View>
            <Text fontSize='medium' style={styles.titleTextStyle}> {title} </Text>
            <Text fontSize='medium'> {description} </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: size.defaultMargin,
    flexDirection: 'row'
  },
  titleTextStyle: {
    fontWeight: 'bold',
  },
})

export default TimeLineContent