import React, { useEffect, useState, useRef } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';

const Profile = () => {
  const modules = [
    { id: '01', title: 'Introduction to Law and Legal System in India' },
    { id: '02', title: 'Introduction to Law and Legal System in India' },
    { id: '03', title: 'Introduction to Law and Legal System in India' },
    { id: '04', title: 'Introduction to Law and Legal System in India' },
    { id: '05', title: 'Introduction to Law and Legal System in India' },
    { id: '06', title: 'Introduction to Law and Legal System in India' },
    { id: '07', title: 'Introduction to Law and Legal System in India' },
  ];

  const [visibleModules, setVisibleModules] = useState([]);
  const animations = useRef(modules.map(() => new Animated.Value(0))).current; // Initialize all animation values

  useEffect(() => {
    modules.forEach((_, index) => {
      setTimeout(() => {
        setVisibleModules((prev) => [...prev, modules[index]]);
        Animated.timing(animations[index], {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, index * 700); // Delay each card by 700ms
    });
  }, []);

  const renderModule = ({ item, index }) => {
    const isBlueCard = index >= 3; // Determine if it's a blue card
    return (
      <Animated.View
        style={{
          opacity: animations[index], // Fade-in effect
          transform: [
            {
              scale: animations[index].interpolate({
                inputRange: [0, 1],
                outputRange: [0.8, 1], // Scaling effect
              }),
            },
          ],
        }}
      >
        <TouchableOpacity
          style={[
            styles.moduleCard,
            isBlueCard ? styles.blueCard : styles.whiteCard,
          ]}
        >
          <View style={styles.moduleContainer}>
            <Text style={[styles.moduleNumber, isBlueCard && styles.whiteText]}>
              {item.id}
            </Text>
            <Text style={[styles.moduleLabel, isBlueCard && styles.whiteText]}>
              Module
            </Text>
          </View>
          <View style={[styles.separator, isBlueCard && styles.whiteSeparator]} />
          <Text style={[styles.moduleTitle, isBlueCard && styles.whiteText]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <View style={{flexDirection:'row'}}> */}
        <Text style={styles.headerTitle}>Syllabus</Text>
        {/* </View> */}
        <Text style={styles.subtitle}>(BLE) Business Laws and Ethics</Text>
        <Text style={styles.category}>CMA INTERMEDIATE</Text>
        <View style={styles.headerLine} />
      </View>

      <FlatList
        data={visibleModules}
        renderItem={renderModule}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0057C0',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginTop: 8,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginTop: 4,
  },
  headerLine: {
    marginTop: 12,
    height: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  listContainer: {
    padding: 16,
  },
  moduleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  whiteCard: {
    backgroundColor: '#fff',
  },
  blueCard: {
    backgroundColor: '#004B97',
  },
  moduleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moduleNumber: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
  },
  moduleLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
    marginLeft: 4,
    opacity: 0.6,
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: '#000',
    marginHorizontal: 12,
  },
  moduleTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  whiteText: {
    color: '#fff', // White text color for blue cards
  },
  whiteSeparator: {
    backgroundColor: '#fff', // White separator for blue cards
  },
});
