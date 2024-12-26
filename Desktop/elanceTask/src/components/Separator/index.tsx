import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface SeparatorProps {
    height?: number;
    width?: number;
    style?: ViewStyle;
}

const Separator: React.FC<SeparatorProps> = ({ height = 0, width = 0, style, ...extraProps }) => (
    <View style={[styles.separator, { height, width }, style]} {...extraProps} />
);

const styles = StyleSheet.create({
    separator: {
        height: 0,
        width: 0,
    },
});

export default Separator;
