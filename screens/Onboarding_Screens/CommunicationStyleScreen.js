import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const COMMUNICATION_STYLES = ['Leader', 'Listener', 'Innovator', 'Supporter'];

const CommunicationStyleScreen = () => {
  const [selectedStyle, setSelectedStyle] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicatorContainer}>
        <View style={[styles.dotBase, styles.filledDot]} />
        <View style={[styles.dotBase, styles.filledDot]} />
        <View style={[styles.dotBase, styles.partialDot]} />
        <View style={styles.dotBase} />
        <View style={styles.dotBase} />
      </View>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Communication Style</Text>
        <Text style={styles.title}>Which role fits you the best?</Text>
      </View>

      <View style={styles.buttonsContainer}>
        {COMMUNICATION_STYLES.map((style) => (
          <TouchableOpacity
            key={style}
            style={[
              styles.styleButton,
              selectedStyle === style && styles.selectedButton,
            ]}
            onPress={() => setSelectedStyle(style)}
          >
            <Text
              style={[
                styles.styleButtonText,
                selectedStyle === style && styles.selectedButtonText,
              ]}
            >
              {style}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommunicationStyleScreen;

const DOT_SIZE = 12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
    alignItems: 'flex-start', // Changed to align content to the left
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginBottom: 40,
  },
  dotBase: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: '#EEE',
    marginHorizontal: 5,
  },
  filledDot: {
    backgroundColor: '#1EA896',
  },
  partialDot: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#1EA896',
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  styleButton: {
    width: '45%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  styleButtonText: {
    color: '#333',
    textAlign: 'center',
  },
  selectedButton: {
    backgroundColor: '#1EA896',
    borderColor: '#1EA896',
  },
  selectedButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  nextButton: {
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: '#1EA896',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
