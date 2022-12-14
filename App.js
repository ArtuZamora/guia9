import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{uri: 'file:///android_asset/Arsha/index.html'}} //Funciona solo con android
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
