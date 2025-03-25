import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadProfileSettings, updateProfileSetting } from '../../Reducer';

function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const profileSettings = useSelector((state) => state.user.profileSettings);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    dispatch(loadProfileSettings());
  }, [dispatch]);

  // Logout Handler Function
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => {
            dispatch(updateProfileSetting(null));  // Clear user state
            navigation.replace('Login');  // Redirect to LoginScreen
        }}
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} /* Replace with actual user image */
          style={styles.profileImage} 
        />
        <Text style={styles.profileName}>{currentUser?.displayName || "User Name"}</Text>
        <Text style={styles.profileEmail}>{currentUser?.email || "user@example.com"}</Text>
      </View>

      {/* About Section with Tags */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About</Text>
        <View style={styles.tagsContainer}>
          <Text style={[styles.tag, styles.uiDesignTag]}>UI Design</Text>
          <Text style={[styles.tag, styles.projectsTag]}>Projects</Text>
          <Text style={[styles.tag, styles.managementTag]}>Management</Text>
        </View>
        <Text style={styles.aboutText}>
          I am a student at the University of Michigan, Ann Arbor. Passionate about technology, design, and project management. Always looking to collaborate on exciting new projects that challenge my skills and creativity.
        </Text>
      </View>

      {/* Profile Menu List */}
      <View style={styles.menuList}>
        <MenuItem title="Upgrade the Plan" onPress={() => navigation.navigate('UpgradePlan')} />
        <MenuItem title="My Peadbo" />
        <MenuItem title="Settings" onPress={() => navigation.navigate('Settings')} />
        <MenuItem title="Billing" onPress={() => navigation.navigate('Billing')} />
        <MenuItem title="Notifications" onPress={() => navigation.navigate('Notifications')} />
        <MenuItem title="Contact Support" onPress={() => navigation.navigate('ContactSupport')} />
        
        {/* Logout Button */}
        <MenuItem title="Logout" isLogout onPress={handleLogout} />
      </View>
    </ScrollView>
  );
}

// Menu Item Component for reusability
const MenuItem = ({ title, onPress, isLogout }) => (
  <TouchableOpacity 
    style={[styles.menuItem, isLogout && styles.logout]} 
    onPress={onPress}
  >
    <Text style={[styles.menuText, isLogout && styles.logoutText]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D3D3D3',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  aboutSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tag: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
    fontSize: 12,
    color: '#fff',
  },
  uiDesignTag: {
    backgroundColor: '#FF6347',
  },
  projectsTag: {
    backgroundColor: '#4682B4',
  },
  managementTag: {
    backgroundColor: '#32CD32',
  },
  aboutText: {
    fontSize: 14,
    color: '#777',
  },
  menuList: {
    padding: 10,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  logout: {
    marginTop: 10,
  },
  logoutText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
