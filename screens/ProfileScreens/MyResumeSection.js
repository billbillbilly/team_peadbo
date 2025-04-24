// This screen is used for managing resumes, as of now, it is commented out from the profile screen,
// Currently, it is not configured to work with the database -- it will require a proper configuration to the 
// schema in place.

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, ActivityIndicator } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Storage, DataStore } from 'aws-amplify';
// import { ResumeData } from '../../models'; // Uncomment when the ResumeData model is available

export default function ResumeSection({ currentUser }) {
  // State to store the list of resumes
  const [resumes, setResumes] = useState([]);

  // State to track the loading status during uploads
  const [loading, setLoading] = useState(false);

  // Fetch resumes when the component mounts
  useEffect(() => {
    // Uncomment this line to fetch resumes from the database
    // fetchResumes();
  }, []);

  // Function to fetch resumes from the database
  const fetchResumes = async () => {
    try {
      // Query the DataStore for resumes associated with the current user
      const result = await DataStore.query(ResumeData, (r) => r.userId.eq(currentUser?.uid));
      setResumes(result); // Update the state with the fetched resumes
    } catch (err) {
      console.error('❌ Error loading resumes:', err); // Log any errors
    }
  };

  // Function to handle uploading a new resume
  const handleUpload = async () => {
    // Limit the number of resumes to 5
    if (resumes.length >= 5) {
      Alert.alert('Limit Reached', 'You can upload up to 5 resumes.');
      return;
    }

    try {
      // Open the document picker to select a PDF file
      const file = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });
      if (file.type === 'success') {
        setLoading(true); // Set loading state to true

        // Generate a unique file key for the uploaded resume
        const fileKey = `resumes/${currentUser?.uid}_${Date.now()}_${file.name}`;
        const response = await fetch(file.uri); // Fetch the file from the URI
        const blob = await response.blob(); // Convert the file to a blob

        // Upload the file to AWS S3 using Amplify Storage
        await Storage.put(fileKey, blob, {
          contentType: 'application/pdf', // Set the content type to PDF
        });

        // Get the public URL of the uploaded file
        const fileUrl = await Storage.get(fileKey);

        // Save the resume record to the database
        const resumeRecord = await DataStore.save(
          new ResumeData({
            userId: currentUser?.uid, // Associate the resume with the current user
            fileName: file.name, // Store the file name
            fileUrl: fileUrl, // Store the file URL
            createdAt: new Date().toISOString(), // Store the creation timestamp
          })
        );

        // Update the state with the new resume
        setResumes((prev) => [...prev, resumeRecord]);
      }
    } catch (error) {
      console.error('Upload failed:', error); // Log any errors
      Alert.alert('Upload failed', 'Could not upload resume'); // Show an error alert
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <View style={styles.resumeSection}>
      {/* Header Section */}
      <View style={styles.resumeHeader}>
        <Text style={styles.resumeTitle}>My Resume</Text>
        <TouchableOpacity onPress={handleUpload} style={styles.uploadBtn}>
          <Text style={styles.uploadText}>+ Upload</Text>
        </TouchableOpacity>
      </View>

      {/* Loading Indicator */}
      {loading && <ActivityIndicator size="small" color="#1EA896" style={{ marginVertical: 10 }} />}

      {/* Display Resumes or Empty State */}
      {resumes.length === 0 ? (
        <Text style={styles.emptyText}>No resumes uploaded yet.</Text>
      ) : (
        <FlatList
          data={resumes} // List of resumes
          keyExtractor={(item) => item.id} // Use the resume ID as the key
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
    padding: 20, // Padding around the section
    borderTopWidth: 1, // Top border for separation
    borderColor: '#E5E5E5', // Light gray border color
  },
  resumeHeader: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space between the title and upload button
    alignItems: 'center', // Vertically center items
    marginBottom: 10, // Space below the header
  },
  resumeTitle: {
    fontSize: 16, // Font size for the title
    fontWeight: 'bold', // Bold font weight for emphasis
  },
  uploadBtn: {
    paddingVertical: 6, // Vertical padding inside the button
    paddingHorizontal: 12, // Horizontal padding inside the button
    backgroundColor: '#1EA896', // Green background color for the button
    borderRadius: 6, // Rounded corners for the button
  },
  uploadText: {
    color: '#fff', // White text color for the button
    fontSize: 14, // Font size for the button text
    fontWeight: '500', // Medium font weight for the button text
  },
  emptyText: {
    color: '#999', // Gray color for the empty state text
    fontStyle: 'italic', // Italic font style for the empty state text
  },
  resumeItem: {
    paddingVertical: 10, // Vertical padding inside each resume item
    borderBottomWidth: 1, // Bottom border for separation
    borderColor: '#eee', // Light gray border color
  },
  resumeFileName: {
    fontSize: 14, // Font size for the file name
    fontWeight: '600', // Semi-bold font weight for emphasis
  },
  resumeDate: {
    fontSize: 12, // Font size for the date
    color: '#777', // Gray color for the date text
  },
});