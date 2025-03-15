import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const HelpScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Need Help?</Text>
      <View style={styles.helpOption}>
        <Button title="Chat with Us" onPress={() => alert('Opening chat...')} />
      </View>
      <View style={styles.helpOption}>
        <Button title="Call Us" onPress={() => alert('Calling support...')} />
      </View>
      <View style={styles.helpOption}>
        <Button title="Get More Help" onPress={() => alert('Redirecting to more help...')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  helpOption: {
    marginBottom: 15,
  },
});

export default HelpScreen;

