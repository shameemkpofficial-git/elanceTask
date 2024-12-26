import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ButtonWithIcon = ({ iconName, title, onPress, width }) => {
  return (
    <Pressable style={[styles.button, { width }]} onPress={onPress}>
      <View style={styles.iconContainer}>
        {iconName && <View style={styles.icon}>{iconName}</View>}
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0057C0',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8, // Space between the icon and the text
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});
