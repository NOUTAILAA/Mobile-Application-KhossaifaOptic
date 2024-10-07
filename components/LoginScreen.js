// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {/* Logo */}
      <Image 
        source={require('../assets/KHOSS.jpg')}
        style={styles.logo}
      />

      {/* Champ Username */}
      <Text style={styles.label}>Nom d'utilisateur</Text>
      <TextInput 
        style={styles.input}
        placeholder="Entrez votre nom d'utilisateur"
        placeholderTextColor="#ffffff"
      />

      {/* Champ Password */}
      <Text style={styles.label}>Mot de passe</Text>
      <TextInput 
        style={styles.input}
        placeholder="Entrez votre mot de passe"
        placeholderTextColor="#ffffff"
        secureTextEntry
      />

      {/* Bouton de Connexion */}
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#151514',
  },
  logo: {
    width: 300,
    height: 100,
    marginBottom: 60,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontSize: 16,
    color: '#EAEAEA',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#5A5A5A',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#FFD700', // Texte d'entrée en jaune
    backgroundColor: '#222222', // Couleur de fond des champs de texte
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  button: {
    backgroundColor: 'yellow', // Couleur de fond
    paddingVertical: 12,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
