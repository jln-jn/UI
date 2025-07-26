import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function WelcomeScreen() {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      // Refinement 1: Simplified hex codes (removed 'ff')
      colors={['#808F58', '#043a61', '#022f4a']}
      // Refinement 2: Corrected locations array to have 3 values
      locations={[0, 0.6, 1]}
      style={styles.container}
    >
      <StatusBar style="light" />
      
      <SafeAreaView style={styles.safe}>
        <View style={styles.content}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />

          <Text style={styles.slogan}>
            stay on track. stay <Text style={styles.sloganHighlight}>RAILLAX</Text>
          </Text>

          <Link href="/login" asChild>
            <TouchableOpacity style={styles.primaryButton} activeOpacity={0.85}>
              <Text style={styles.primaryButtonText}>Get Started</Text>
            </TouchableOpacity>
          </Link>
        </View>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 357,
    height: 357,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  slogan: {
    fontSize: 21,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 50,
    letterSpacing: 0.5,
    fontFamily: 'Poppins-Bold', 
  },
  sloganHighlight: {
    fontFamily: 'Poppins-Bold',
    color: '#F9C864',
  },
  primaryButton: {
    backgroundColor: '#F9C864',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  primaryButtonText: {
    // Refinement 3: Matched text color to the new darkest gradient color
    color: '#022f4a', 
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});