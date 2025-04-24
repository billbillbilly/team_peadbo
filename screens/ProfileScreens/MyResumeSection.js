import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, ActivityIndicator } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Storage, DataStore } from 'aws-amplify';
// import { ResumeData } from '../../models';

export default function ResumeSection({ currentUser }) {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // uncomment this line to fetch resumes when the component mounts
    // fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const result = await DataStore.query(ResumeData, (r) => r.userId.eq(currentUser?.uid));
      setResumes(result);
    } catch (err) {
      console.error('❌ Error loading resumes:', err);
    }
  };

  const handleUpload = async () => {
    if (resumes.length >= 5) {
      Alert.alert('Limit Reached', 'You can upload up to 5 resumes.');
      return;
    }
    try {
      const file = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });
      if (file.type === 'success') {
        setLoading(true);
        const fileKey = `resumes/${currentUser?.uid}_${Date.now()}_${file.name}`;
        const response = await fetch(file.uri);
        const blob = await response.blob();

        await Storage.put(fileKey, blob, {
          contentType: 'application/pdf'
        });

        const fileUrl = await Storage.get(fileKey);
        const resumeRecord = await DataStore.save(
          new ResumeData({
            userId: currentUser?.uid,
            fileName: file.name,
            fileUrl: fileUrl,
            createdAt: new Date().toISOString()
          })
        );
        setResumes((prev) => [...prev, resumeRecord]);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      Alert.alert('Upload failed', 'Could not upload resume');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.resumeSection}>
      <View style={styles.resumeHeader}>
        <Text style={styles.resumeTitle}>My Resume</Text>
        <TouchableOpacity onPress={handleUpload} style={styles.uploadBtn}>
          <Text style={styles.uploadText}>+ Upload</Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size="small" color="#1EA896" style={{ marginVertical: 10 }} />}
      {resumes.length === 0 ? (
        <Text style={styles.emptyText}>No resumes uploaded yet.</Text>
      ) : (
        <FlatList
          data={resumes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.resumeItem}>
              <Text style={styles.resumeFileName}>{item.fileName}</Text>
              <Text style={styles.resumeDate}>{new Date(item.createdAt).toLocaleDateString()}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  resumeSection: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
  },
  resumeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  resumeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  uploadBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#1EA896',
    borderRadius: 6,
  },
  uploadText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  emptyText: {
    color: '#999',
    fontStyle: 'italic',
  },
  resumeItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  resumeFileName: {
    fontSize: 14,
    fontWeight: '600',
  },
  resumeDate: {
    fontSize: 12,
    color: '#777',
  },
});
