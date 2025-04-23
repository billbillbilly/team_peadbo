import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed'; // Ensure you have @rneui/themed installed

const RenderTask = ({ item, onDelete }) => (
    <View style={styles.taskCard}>
      <View style={styles.taskContent}>
        <View>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <Text style={styles.taskDescription}>{item.description}</Text>
          <Text style={styles.taskStatus}>
            {item.status ? item.status : 'No Status Available'}
          </Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteButton}>
          <Icon name="trash" type="font-awesome" size={20} color="#FF715B" />
        </TouchableOpacity>
      </View>
    </View>
  );

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  taskContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  taskDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  taskStatus: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  deleteButton: {
    padding: 5,
  },
});

export default RenderTask;