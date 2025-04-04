import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Icon } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PEADBO_COLORS = {
  primary: '#1EA896',
  secondary: '#FF715B',
  background: '#F9F9F9',
  text: '#333333',
  lightText: '#777777',
  border: '#DDDDDD',
  white: '#FFFFFF'
};

const STORAGE_KEY = 'newsletters';

export default function NewsletterScreen({ navigation, route }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    const loadNewsletters = async () => {
      try {
        const savedNewsletters = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedNewsletters) {
          setNewsletters(JSON.parse(savedNewsletters));
        }
      } catch (error) {
        console.error('Failed to load newsletters', error);
      }
    };

    loadNewsletters();
  }, []);

  useEffect(() => {
    if (route.params?.newNewsletter) {
      const updatedNewsletters = route.params.newNewsletter.id 
        ? newsletters.map(n => n.id === route.params.newNewsletter.id ? route.params.newNewsletter : n)
        : [...newsletters, {...route.params.newNewsletter, id: Date.now().toString()}];
      
      setNewsletters(updatedNewsletters);
      saveNewsletters(updatedNewsletters);
    }
  }, [route.params?.newNewsletter]);

  const saveNewsletters = async (newslettersToSave) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newslettersToSave));
    } catch (error) {
      console.error('Failed to save newsletters', error);
    }
  };

  const filteredNewsletters = newsletters.filter(newsletter => 
    newsletter.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.newsletterItem}
      onPress={() => navigation.navigate('CreateNewsletter', { newsletter: item })}
    >
      <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={[styles.statusBadge, 
          item.status === 'sent' ? styles.sentBadge : styles.draftBadge]}>
          {item.status}
        </Text>
      </View>
      <Text style={styles.dateText}>
        Created: {new Date(item.createdAt).toLocaleDateString()}
      </Text>
      {item.schedule && (
        <Text style={styles.dateText}>
          Scheduled: {item.schedule}
        </Text>
      )}
      {item.recipients.length > 0 && (
        <Text style={styles.dateText}>
          Recipients: {item.recipients.length}
        </Text>
      )}
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
        data={filteredNewsletters}
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
  dateText: {
    fontSize: 14,
    color: PEADBO_COLORS.lightText,
    marginTop: 4,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 24,
    color: PEADBO_COLORS.lightText,
  },
});