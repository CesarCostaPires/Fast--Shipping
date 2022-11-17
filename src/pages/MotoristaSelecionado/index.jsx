import React, { useState } from "react";
import { ImageBackground,Text, ScrollView, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import { Container, Footer, Header, Icones, Nome, TextoIcones, TextoIconeSelecionado, ViewDadosMotorista, TituloMotorista, TextoDadosMotorista, ViewCep, Botao, TextoBotao } from "../Style";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };

export default function MotoristaSelecionado(){
    const navigation = useNavigation();
   

    function goHome(){
        navigation.navigate('Empresa');
    }
    function goPerfil(){
        navigation.navigate('PerfilEmpresa');
    }
    function goPublicar(){
        navigation.navigate('Publicar');
    }
    return(
        <Container>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Header>
                <Nome>Nome do usuário</Nome>
                <TouchableOpacity onPress={() => setVisivel(true)}>
                    
                </TouchableOpacity> 
            </Header>

            <ScrollView showsVerticalScrollIndicator={false}>
                <ViewDadosMotorista>
                    <TituloMotorista>Dados do motorista</TituloMotorista>
                    <TextoDadosMotorista>Nome completo</TextoDadosMotorista>
                    <TextoDadosMotorista>00000000000</TextoDadosMotorista>
                    <TextoDadosMotorista>000000000</TextoDadosMotorista>
                    <TextoDadosMotorista>000000000</TextoDadosMotorista>
                </ViewDadosMotorista>
                <ViewDadosMotorista>
                    <TituloMotorista>Veículo cadastrado</TituloMotorista>
                    <TextoDadosMotorista>Placa: 000000</TextoDadosMotorista>
                    <TextoDadosMotorista>Ano:0000</TextoDadosMotorista>
                    <TextoDadosMotorista>Modelo: asdasdasdasda</TextoDadosMotorista>
                    <TextoDadosMotorista>Capacidade: </TextoDadosMotorista>
                    <TextoDadosMotorista>Chassi: 000000</TextoDadosMotorista>
                </ViewDadosMotorista>
                <ViewDadosMotorista>
                    <TituloMotorista>Nota</TituloMotorista>
                </ViewDadosMotorista>
                <ViewCep>
                    <FontAwesome name="star" size={24} color="#f5cb45" />
                    <TextoDadosMotorista>5,0</TextoDadosMotorista>
                </ViewCep>
                <Botao onPress={goHome}>
                    <TextoBotao>Aceitar motorista</TextoBotao>
                </Botao>
                    
                
            </ScrollView>
            <Footer>
            <Icones onPress={goHome}>
                    <AntDesign name="appstore1" size={30} color="#135ced" />
                    <TextoIconeSelecionado>Home</TextoIconeSelecionado>
                </Icones>
                <Icones onPress={goPublicar}>
                    <Ionicons name="create" size={30} color="#5f5f5f" />            
                    <TextoIcones>Publicar</TextoIcones>
                </Icones>
                <Icones onPress={goPerfil}>
                    <FontAwesome name="user-circle" size={30} color="#5f5f5f" />
                    <TextoIcones>Perfil</TextoIcones>
                </Icones>
            </Footer>
            </ImageBackground>
        </Container>
    );
}

const styles = StyleSheet.create({
    
    image: {
    flex:1,
    justifyContent: "center",
    width:"100%",
    alignItems: "center"
  
}});
