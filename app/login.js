import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView, TouchableWithoutFeedback, Keyboard, LayoutAnimation, UIManager } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function LoginScreen() {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setKeyboardVisible(false);
    });
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleLogin = () => {
    console.log('--- Login Attempt ---');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      // Updated gradient to match the final Welcome Screen design
      colors={['#808F58', '#043a61', '#022f4a']}
      locations={[0, 0.6, 1]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.safe}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
              <View style={{flex: 1}}>
                <View style={styles.mainContent}>
                  <View style={styles.content}>
                    <Text style={styles.title}>Log In</Text>
                    <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#A9A9A9" value={username} onChangeText={setUsername} />
                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#A9A9A9" secureTextEntry value={password} onChangeText={setPassword} />
                    <TouchableOpacity style={styles.primaryButton} activeOpacity={0.85} onPress={handleLogin} >
                      <Text style={styles.primaryButtonText}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.85}><Text style={styles.forgotPasswordText}>Forgot Password?</Text></TouchableOpacity>
                  </View>
                  
                  {!isKeyboardVisible && (
                    <View style={styles.footer}>
                      <View style={styles.footerTextContainer}>
                        <Text style={styles.footerText}>Don't have an account? </Text>
                        <Link href="/signup" asChild><TouchableOpacity activeOpacity={0.85}><Text style={[styles.footerText, styles.linkText]}>Create Now!</Text></TouchableOpacity></Link>
                      </View>
                      <Link href="/signup" asChild><TouchableOpacity style={styles.secondaryButton} activeOpacity={0.85}><Text style={styles.secondaryButtonText}>Create New Account</Text></TouchableOpacity></Link>
                    </View>
                  )}
                </View>

                <View style={styles.header}>
                  <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                  />
                </View>
              </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    container: { 
      flex: 1,
    },
    safe: {
      flex: 1,
    },
    header: {
      position: 'absolute',
      top: 60, 
      left: 0,
      right: 0,
      alignItems: 'center',
    },
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 100,
    },
    logo: {
      width: 75,
      height: 75,
      resizeMode: 'contain',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 40,
    },
    title: {
      width: '100%',
      fontSize: 20,
      color: '#FFFFFF',
      marginBottom: 14,
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'left',
    },
    input: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      padding: 10,
      fontSize: 16,
      marginBottom: 20,
      fontFamily: 'Poppins-Regular',
    },
    primaryButton: {
      width: '100%',
      backgroundColor: '#F9C864',
      paddingVertical: 10,
      borderRadius: 30,
      alignItems: 'center',
      marginBottom: 15,
    },
    primaryButtonText: {
      // Updated text color to match the new darkest gradient color
      color: '#022f4a',
      fontSize: 16,
      fontFamily: 'Poppins-Bold',
    },
    forgotPasswordText: {
      width: '100%',
      textAlign: 'center',
      color: '#FFFFFF',
      fontSize: 14,
      fontFamily: 'Poppins-Regular',
    },
    footer: {
      paddingHorizontal: 30,
      paddingBottom: 60,
    },
    footerTextContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    footerText: {
      color: '#FFFFFF',
      fontSize: 13,
      textAlign: 'center',
      fontFamily: 'Poppins-Regular',
    },
    linkText: {
      fontFamily: 'Poppins-Bold',
    },
    secondaryButton: {
      width: '100%',
      backgroundColor: '#0B6C88',
      paddingVertical: 10,
      borderRadius: 30,
      alignItems: 'center',
    },
    secondaryButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontFamily: 'Poppins-Bold',
    }
});