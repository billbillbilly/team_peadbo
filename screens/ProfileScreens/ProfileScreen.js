import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import { loadProfileSettings, updateProfileSetting } from '../../Reducer';
import { Icon } from '@rneui/themed';
import MyResumeSection from './MyResumeSection';
import { useTheme } from '../../ThemeContext';
import { handleSignOut } from '../../AuthManager';

function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const profileSettings = useSelector((state) => state.user.profileSettings);
  const currentUser = useSelector((state) => state.user.currentUser);
  const { theme, isDarkMode, setIsDarkMode } = useTheme();

  const [profileImage, setProfileImage] = useState(null);
  const [bio, setBio] = useState("I am a student at the University of Michigan, Ann Arbor. Passionate about technology, design, and project management. Always looking to collaborate on exciting new projects that challenge my skills and creativity.");
  const [editMode, setEditMode] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setIsDarkMode(!isDarkMode)} style={{ marginRight: 15 }}>
          <Icon 
            name={isDarkMode ? 'sun' : 'moon'} 
            type="feather" 
            color={isDarkMode ? '#FFD700' : '#333'} 
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, isDarkMode]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'We need camera roll permissions!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const MenuItem = ({ title, iconName, iconType = 'feather', onPress, isLogout }) => (
    <TouchableOpacity 
      style={[styles.menuItem, isLogout && styles.logout]} 
      onPress={onPress}
    >
      <View style={styles.menuItemRow}>
        <Icon 
          name={iconName} 
          type={iconType} 
          size={20} 
          color={isLogout ? 'red' : theme.text}
          style={{ marginRight: 10 }}
        />
        <Text style={[styles.menuText, { color: isLogout ? 'red' : theme.text }]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Profile Header */}
      <View style={[styles.profileHeader, { borderBottomColor: theme.border }]}>
        <TouchableOpacity onPress={pickImage}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={{ fontSize: 30, color: theme.text }}>＋</Text>
            </View>
          )}
        </TouchableOpacity>
        <Text style={[styles.profileName, { color: theme.text }]}>
          {currentUser.name || "User Name"}
        </Text>
        <Text style={[styles.profileEmail, { color: theme.placeholder }]}>
          {currentUser.email || "user@example.com"}
        </Text>
      </View>

      {/* About Section */}
      <View style={[styles.aboutSection, { borderBottomColor: theme.border }]}>
        <View style={styles.bioHeader}>
          <Text style={[styles.aboutTitle, { color: theme.text }]}>About</Text>
          <TouchableOpacity onPress={() => setEditMode(!editMode)}>
            <Text style={styles.editText}>{editMode ? 'Save' : 'Edit'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tagsContainer}>
          <Text style={[styles.tag, styles.uiDesignTag]}>UI Design</Text>
          <Text style={[styles.tag, styles.projectsTag]}>Projects</Text>
          <Text style={[styles.tag, styles.managementTag]}>Management</Text>
        </View>
        {editMode ? (
          <TextInput
            style={[styles.bioInput, { backgroundColor: theme.inputBackground, color: theme.text }]}
            value={bio}
            onChangeText={setBio}
            multiline
            placeholderTextColor={theme.placeholder}
          />
        ) : (
          <Text style={[styles.aboutText, { color: theme.text }]}>{bio}</Text>
        )}
      </View>

      {/* Resume Section */}
      <MyResumeSection />

      {/* Menu List */}
      <View style={styles.menuList}>
        <MenuItem title="Upgrade the Plan" iconName="trending-up" onPress={() => navigation.navigate('UpgradePlan')} />
        <MenuItem title="My Peadbo" iconName="user" />
        <MenuItem title="My Resume" iconName="file-text" onPress={() => navigation.navigate('ResumeLibrary')} />
        <MenuItem title="Settings" iconName="settings" onPress={() => navigation.navigate('Settings')} />
        <MenuItem title="Billing" iconName="credit-card" onPress={() => navigation.navigate('Billing')} />
        <MenuItem title="Notifications" iconName="bell" onPress={() => navigation.navigate('Notifications')} />
        <MenuItem title="Contact Support" iconName="help-circle" onPress={() => navigation.navigate('ContactSupport')} />
        <MenuItem title="Logout" iconName="log-out" isLogout onPress={async() => {
          await handleSignOut()
          navigation.navigate('Login')
        }}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D3D3D3',
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 14,
    marginTop: 5,
  },
  aboutSection: {
    padding: 20,
    borderBottomWidth: 1,
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bioHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  editText: {
    color: '#007BFF',
    fontSize: 14,
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
  },
  bioInput: {
    fontSize: 14,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
  },
  menuList: {
    padding: 10,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  menuItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
  },
  logout: {
    marginTop: 10,
  },
  logoutText: {
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
