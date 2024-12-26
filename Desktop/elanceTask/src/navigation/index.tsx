import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Home } from './screens/Home';
import { Updates } from './screens/Updates';
import { Settings } from './screens/Settings';
import { NotFound } from './screens/NotFound';
import BtmSheetRadio from '../components/BtmSheetRadio';
import DownArrowSvg from '../assets/svg/downArrowSvg';
import Separator from '../components/Separator';
import Profile from './screens/Profile';

const TopTabs = createMaterialTopTabNavigator();

// Top Tab Navigator
const HomeTabs = () => {
  const [isSheetVisible, setSheetVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('(BLE) Business Laws and Ethics');

  const options = [
    '(BLE) Business Laws and Ethics',
    '(ACC) Accounting Basics',
    '(MKT) Marketing',
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSheetVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.dropdownHeader}>
        <TouchableOpacity style={{backgroundColor:"#25252599", paddingVertical:12, paddingHorizontal:14.5, borderRadius:40, flexDirection:'row', alignItems:'center'}} onPress={() => setSheetVisible(true)}>
          <Text style={styles.dropdownText}>
            {selectedOption}
          </Text>
          <Separator width={10}/>
          <DownArrowSvg/>
        </TouchableOpacity>
      </View>

      {/* Tab Navigator */}
      <TopTabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#585858',
          tabBarIndicatorStyle: {
            backgroundColor: 'black',
            // height: 3,
          },
          tabBarStyle: {
            backgroundColor: '#000',
          },
          tabBarLabelStyle: {
            fontSize: 14,
            textTransform: 'capitalize',
          },
        }}
      >
        <TopTabs.Screen name="Home" component={Home} />
        <TopTabs.Screen name="Updates" component={Updates} />
      </TopTabs.Navigator>

      {/* Bottom Sheet Radio */}
      <BtmSheetRadio
        isVisible={isSheetVisible}
        onClose={() => setSheetVisible(false)}
        header="Choose paper"
        options={options}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
      />
    </View>
  );
};

// Root Stack Navigator
const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <RootStack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
      <RootStack.Screen
        name="Settings"
        component={Settings}
        options={({ navigation }) => ({
          presentation: 'modal',
          headerRight: () => (
            <Text
              onPress={() => navigation.goBack()}
              style={{ marginRight: 10, color: 'blue' }}
            >
              Close
            </Text>
          ),
        })}
      />
      <RootStack.Screen
        name="NotFound"
        component={NotFound}
        options={{
          title: '404 - Not Found',
        }}
      />
    </RootStack.Navigator>
  );
};

// Main Navigation Export
export const Navigation = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dropdownHeader: {
    backgroundColor: '#000',
    paddingVertical: 14.5,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  dropdownText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    lineHeight:16
  },
});
