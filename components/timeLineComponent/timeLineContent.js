import React from 'react';
import { Image, View, StyleSheet } from 'react-native'
import { Text } from '..'
import { colors, size } from '../styles.js';

const TimeLineContent = ({ icon, title, description }) => {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Image source={icon}/>
            <Text fontSize='medium' style={styles.titleTextStyle}> {title} </Text>
        </View>
        <Text fontSize='medium'> {description} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: size.defaultMargin,
  },
  titleContainer: {
    flexDirection: 'row'
  },
  titleTextStyle: {
    fontWeight: 'bold',
  },
})

export default TimeLineContent