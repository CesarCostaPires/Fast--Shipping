import React, { useState } from 'react';
import { View, StyleSheet, TextInput,Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ANTT() {
  const [url, setUrl] = useState('');
  const [go, setGo] = useState(false);


    return(
      
      <WebView
      
        source={{ uri: 'https://consultapublica.antt.gov.br/Site/ConsultaRNTRC.aspx'}}
        style={{ marginTop: 35}}
      />
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 80,
  },
  text: {
    borderWidth: 2,
    margin: 5
    
  },
});