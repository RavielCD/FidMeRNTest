import React, { useCallback } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { colors, size, opacity } from './styles.js';

const Button = ({ title, styleParam, onPress }) => {

  const _style = useCallback(
    ({ pressed }) => [{ opacity: pressed ? opacity.semiTran : opacity.opaque }, styles.buttonStyle && styles.buttonStyle],
    [styles.buttonStyle]
  );

  return (
    <Pressable style={styles.buttonStyle} onPress={onPress}>
        <Text> {title} </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.mainOrange,
    padding: size.mediumPadding,
    alignSelf: 'flex-start',
    borderRadius: size.largeRadius,
  },
})

export default Button