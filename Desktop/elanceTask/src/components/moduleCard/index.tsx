import React, { useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import Separator from '../../components/Separator';
import ThreeLineSvg from '../../assets/svg/three-line';
import { useNavigation } from '@react-navigation/native';

const ModuleCard = ({ moduleNumber, sectionTitle }) => {
  const navigation = useNavigation();
  const scale = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.timing(scale, {
      toValue: 1.2, 
      duration: 300, 
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Profile');
      scale.setValue(1); // Reset scale for future interactions
    });
  };

  const animatedStyle = {
    transform: [{ scale }], // Apply scaling to the entire view
  };

  return (
    <Animated.View style={[styles.rowContainer, animatedStyle]}>
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row', width:'100%' ,alignContent:'center', justifyContent:'center'}} onPress={handlePress}>
        <View style={styles.moduleContainer}>
          <View>
            <Text style={styles.moduleNumber}>{moduleNumber}</Text>
            <Text style={styles.moduleText}>Module</Text>
          </View>
          <Separator width={12} />
          <View style={styles.separatorLine} />
          <Separator width={12} />
        </View>
        <View>
          <Text style={styles.sectionTitle}>{sectionTitle}</Text>
        </View>
        <Separator width={12} />
        <View style={styles.menuContainer}>
          <ThreeLineSvg />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#0057C0CC',
    paddingVertical: 19,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    borderRadius: 12,
  },
  moduleContainer: {
    flexDirection: 'row',
  },
  moduleNumber: {
    fontSize: 28,
    lineHeight: 34,
    color: '#fff',
    fontWeight: '400',
  },
  moduleText: {
    fontSize: 12,
    lineHeight: 16,
    color: '#fff',
    fontWeight: '400',
    opacity: 0.5,
  },
  separatorLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#25252599',
  },
  sectionTitle: {
    fontSize: 17,
    lineHeight: 22,
    color: '#fff',
    fontWeight: '600',
  },
  menuContainer: {
    justifyContent: 'center',
  },
});

export default ModuleCard;
