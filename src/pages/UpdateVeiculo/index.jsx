import React, { useState } from "react";
import {ImageBackground,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { useNavigation} from '@react-navigation/native'; 
import { Container, Footer, Header, Icones, Nome, TextoIcones, TextoIconeSelecionado, Botao, TextoBotao, TextoDadosMotorista, CampoGrande, CampoMedio, Scrollzinho } from "../Style";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };

export default function UpdateVeiculo(){
    const navigation = useNavigation();
    function goHome(){
        navigation.navigate('Motorista');
    }
    function goEmpresas(){
        navigation.navigate('BuscaEmpresas');
    }
    function goPerfil(){
        navigation.navigate('PerfilMotorista');
    }
    return(
        <Container>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Header>
                <Nome>Nome do Usuario</Nome>
                <TouchableOpacity onPress={() => setVisivel(true)}>
                    <SimpleLineIcons name="options-vertical" size={24} color="white" />
                </TouchableOpacity> 
            </Header>
            <Scrollzinho>
                    <TextoDadosMotorista>Placa:</TextoDadosMotorista>
                    <CampoMedio/>
                    <TextoDadosMotorista>Ano:</TextoDadosMotorista>
                    <CampoMedio/>
                    <TextoDadosMotorista>Modelo:</TextoDadosMotorista>
                    <CampoMedio/>
                    <TextoDadosMotorista>Capacidade:</TextoDadosMotorista>
                    <CampoMedio/>
                    <TextoDadosMotorista>Chassi:</TextoDadosMotorista>
                    <CampoGrande />
                    <Botao><TextoBotao>Atualizar veículo</TextoBotao></Botao>
            </Scrollzinho>
            <Footer>
            <Icones onPress={goHome}>
                    <AntDesign name="appstore1" size={30} color="#5f5f5f" />
                    <TextoIcones>Home</TextoIcones>
                </Icones>
                <Icones onPress={goEmpresas}>
                    <Ionicons name="business" size={30} color="#5f5f5f" />
                    <TextoIcones>Empresas</TextoIcones>
                </Icones>
                
                <Icones onPress={goPerfil}>
                    <FontAwesome name="user-circle" size={30} color="#135ced" />
                    <TextoIconeSelecionado>Perfil</TextoIconeSelecionado>
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
