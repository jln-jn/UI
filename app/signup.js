import React, { useState } from 'react'; // Step 1: Import useState
import { Feather } from '@expo/vector-icons'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';

export default function SignUpScreen() {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  const router = useRouter();

  // Step 2: Create state variables for each input field
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Step 5: Create a function to handle the sign-up button press
  const handleSignUp = () => {
    console.log('--- Sign Up Attempt ---');
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <LinearGradient
      colors={['#808F58', '#043a61', '#022f4a']}
      locations={[0, 0.6, 1]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.safe}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Feather name="arrow-left" size={28} color="white" />
        </TouchableOpacity>

        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={styles.container}
        >
          <ScrollView 
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled" // Added for better keyboard UX
          >
            <Text style={styles.title}>Create an Account</Text>
            
            {/* Step 3: Connect state variables to each TextInput */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#A9A9A9" value={name} onChangeText={setName} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username</Text>
              <TextInput style={styles.input} placeholder="Enter your username" placeholderTextColor="#A9A9A9" value={username} onChangeText={setUsername} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.input} placeholder="Enter your email address" placeholderTextColor="#A9A9A9" keyboardType="email-address" value={email} onChangeText={setEmail} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput style={styles.input} placeholder="Enter your password" placeholderTextColor="#A9A9A9" secureTextEntry value={password} onChangeText={setPassword} />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Confirm</Text>
              <TextInput style={styles.input} placeholder="Confirm your password" placeholderTextColor="#A9A9A9" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
            </View>

            {/* Step 4: Call the handleSignUp function when pressed */}
            <TouchableOpacity style={styles.primaryButton} activeOpacity={0.85} onPress={handleSignUp}>
              <Text style={styles.primaryButtonText}>Create Account</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}

// ALL OF YOUR STYLES ARE UNCHANGED.
const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  safe: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
  },
  content: {
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
  title: {
    fontSize: 26,
    color: '#FFFFFF',
    marginBottom: 30,
    paddingTop: 20,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Poppins-SemiBold',
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#F9C864',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  primaryButtonText: {
    color: '#02263F',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});