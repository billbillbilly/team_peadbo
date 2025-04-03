import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Icon } from '@rneui/themed';

// Peadbo color scheme
const PEADBO_COLORS = {
  primary: '#1EA896', // Peadbo teal
  secondary: '#FF715B', // Peadbo coral
  background: '#F9F9F9',
  text: '#333333',
  lightText: '#777777',
  border: '#DDDDDD',
  white: '#FFFFFF'
};

const newsletterData = [
  {
    id: '1',
    title: 'Weekly Update',
    status: 'Draft',
    recipients: 120,
    delivered: 0,
    opened: 0,
    clicked: 0,
    bounced: 0,
    scheduled: '2025-04-01 10:00'
  },
  {
    id: '2',
    title: 'Product Launch',
    status: 'Sent',
    recipients: 450,
    delivered: 445,
    opened: 320,
    clicked: 210,
    bounced: 5,
    scheduled: '2025-03-15 09:00'
  }
];

export default function NewsletterScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.newsletterItem}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={[styles.statusBadge, 
          item.status === 'Sent' ? styles.sentBadge : styles.draftBadge]}>
          {item.status}
        </Text>
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.stat}>Recipients: {item.recipients}</Text>
        <Text style={styles.stat}>Delivered: {item.delivered}</Text>
        <Text style={styles.stat}>Opened: {item.opened}</Text>
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.stat}>Clicked: {item.clicked}</Text>
        <Text style={styles.stat}>Bounced: {item.bounced}</Text>
        <Text style={styles.stat}>Scheduled: {item.scheduled}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Newsletters</Text>
      
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color={PEADBO_COLORS.lightText} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search newsletters..."
          placeholderTextColor={PEADBO_COLORS.lightText}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('CreateNewsletter')}
      >
        <Icon name="add" size={24} color={PEADBO_COLORS.white} />
        <Text style={styles.createButtonText}>Create Newsletter</Text>
      </TouchableOpacity>

      <FlatList
        data={newsletterData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No newsletters found</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: PEADBO_COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
    color: PEADBO_COLORS.text,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PEADBO_COLORS.white,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: PEADBO_COLORS.border,
  },
  searchInput: {
    flex: 1,
    height: 48,
    paddingLeft: 8,
    color: PEADBO_COLORS.text,
  },
  createButton: {
    flexDirection: 'row',
    backgroundColor: PEADBO_COLORS.primary,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  createButtonText: {
    color: PEADBO_COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  listContainer: {
    paddingBottom: 16,
  },
  newsletterItem: {
    backgroundColor: PEADBO_COLORS.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: PEADBO_COLORS.border,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: PEADBO_COLORS.text,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 14,
    fontWeight: '600',
  },
  sentBadge: {
    backgroundColor: '#E3FCEF',
    color: '#006644',
  },
  draftBadge: {
    backgroundColor: '#DEEBFF',
    color: '#0747A6',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  stat: {
    fontSize: 14,
    color: PEADBO_COLORS.lightText,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 24,
    color: PEADBO_COLORS.lightText,
  },
});