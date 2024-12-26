import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import SvgComponent from '../../assets/svg/tickSvg';
import PlaySvg from '../../assets/svg/playSvg';

const TimelineCard = ({ stepNumber, title, isActive, isCompleted, participants }) => {
  const renderIcon = () => {
    if (isCompleted) {
      return (
        <View style={[styles.iconCircle, styles.completedCircle]}>
          <SvgComponent />
        </View>
      );
    }
    if (isActive) {
      return (
        <View style={[styles.iconCircle, styles.activeCircle]}>
          <PlaySvg />
        </View>
      );
    }
    return (
      <View style={[styles.iconCircle, styles.inactiveCircle]}>
        <View style={{opacity:0.5}}>
          <PlaySvg />
          </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.participantsContainer}>
        {participants.map((participant, index) => (
          <Image
            key={index}
            source={{ uri: participant }}
            style={styles.participantImage}
          />
        ))}
      </View>
      <View style={styles.timelineConnector} />
      <View style={styles.cardContent}>
        {renderIcon()}
        <View style={styles.textContent}>
          <Text style={styles.stepNumber}>{`0${stepNumber}`}</Text>
          <Text numberOfLines={2} style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '70%',
  },
  participantsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: '#1C1C1E',
    paddingVertical: 10,
    paddingRight: 25,
    borderRadius: 40,
  },
  participantImage: {
    width: 24,
    height: 24,
    borderRadius: 20,
    marginRight: -10,
  },
  timelineConnector: {
    width: 2,
    backgroundColor: '#252525',
    flexGrow: 1,
    marginHorizontal: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedCircle: {
    backgroundColor: '#00A6FF',
  },
  activeCircle: {
    backgroundColor: '#0057C0',
  },
  inactiveCircle: {
    backgroundColor: '#333333',
  },
  iconText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContent: {
    marginLeft: 10,
  },
  stepNumber: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.6,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

export default TimelineCard;
