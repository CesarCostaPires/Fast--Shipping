import React, { useState } from "react";
import {ImageBackground,View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import { Container, Footer, Header, Icones, Nome, TextoFlat, TextoIcones, TextoIconeSelecionado, TextoTitulo, Titulo, ViewFlat, Modalzinho, Botao, TextoBotao, TextoDadosEntrega, ViewDadosProduto, TituloEntregas, MapContainer, MapMarkerContainer, MapMarkerTitle, ViewMapa, TextoViewMapa, Linha } from "../Style";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import MapView, { Marker } from "react-native-maps";
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };


export default function MapaMotorista(){

    const navigation = useNavigation();

    function goEmpresas(){
        navigation.navigate('BuscaEmpresas');
    }
    function goPerfil(){
        navigation.navigate('PerfilMotorista');
    }
    return(
        <>
        <Container>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Header>
                <Nome>Nome do usuario</Nome>
                <TouchableOpacity onPress={() => setVisivel(true)}>
                    <SimpleLineIcons name="options-vertical" size={24} color="white" />
                </TouchableOpacity> 
            </Header>

            <View style={styles.mapContainer}> 
           <MapView style={styles.map} initialRegion={{ 
               latitude:-23.4460282, 
               longitude:-46.9172153, 
               latitudeDelta: 0.014, 
               longitudeDelta: 0.014 
           }}> 

                          
           </MapView> 
       </View> 
       <ViewMapa>
           <Linha></Linha>
           <TextoViewMapa>Tempo Previsto: 00:00</TextoViewMapa>
           <TextoViewMapa>Endereço: Avinida Elisio Cordeiro de Siqueira</TextoViewMapa>
           <TextoViewMapa>Bairro: Jardim Santo Elias</TextoViewMapa>
       </ViewMapa>
            <Footer>
            <Icones>
                    <AntDesign name="appstore1" size={30} color="#135ced" />
                    <TextoIconeSelecionado>Home</TextoIconeSelecionado>
                </Icones>
                <Icones onPress={goEmpresas}>
                    <Ionicons name="business" size={30} color="#5f5f5f" />
                    <TextoIcones>Empresas</TextoIcones>
                </Icones>
                
                <Icones onPress={goPerfil}>
                    <FontAwesome name="user-circle" size={30} color="#5f5f5f" />
                    <TextoIcones>Perfil</TextoIcones>
                </Icones>
            </Footer>
            </ImageBackground>
        </Container>
        </>
    );
}

const styles = StyleSheet.create({ 
    mapContainer: { 
        width: '93%', 
        height: '91%', 
        overflow: 'hidden', 
        marginTop:-18,
      }, 
      map: {
        width: '100%', 
        height: '70%', 
      }, 
      mapMarker: { 
        width: 90, 
        height: 80, 
      }, 
      mapMarkerContainer: { 
        width: 120, 
        height: 70, 
        backgroundColor: '#34CB79', 
        flexDirection: 'column', 
        borderRadius: 8, 
        overflow: 'hidden', 
        alignItems: 'center' 
      }, 
      mapMarkerImage: { 
        width: 120, 
        height: 45, 
        resizeMode: 'cover', 
      }, 
      mapMarkerTitle: { 
        flex: 1, 
        color: '#FFF', 
        fontSize: 10, 
        lineHeight: 23, 
      }, 
      image: {
        flex:1,
        justifyContent: "center",
        width:"100%",
        alignItems: "center"
}});