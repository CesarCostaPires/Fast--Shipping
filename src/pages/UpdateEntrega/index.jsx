import React, { useState } from "react";
import {ImageBackground,TouchableOpacity, StyleSheet, Text} from 'react-native';
import { useNavigation} from '@react-navigation/native'; 
import { Header, Footer, Nome, Icones, TextoIconeSelecionado,TextoIcones, CampoMedio, Botao, TextoBotao, CampoGrande, CampoPequeno, Scrollzinho, ContainerCadastro, TituloMotorista, TituloEntregas, TextoDadosMotorista, ViewCadastro, ViewCep, BotaoCep, Container } from "../Style";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };


export default function UpdateEntrega(){
    const navigation = useNavigation();

    function publicar(){
        alert('Publicado com sucesso!!');
        goHome();
    }
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
                <Nome>Nome do usuario</Nome>
                <TouchableOpacity onPress={() => setVisivel(true)}>
                    <SimpleLineIcons name="options-vertical" size={24} color="white" />
                </TouchableOpacity>
                
            </Header>
            <Scrollzinho  showsVerticalScrollIndicator={false}>
                <TituloEntregas>Modificar entrega</TituloEntregas>
                <TextoDadosMotorista>Nome do produto:</TextoDadosMotorista>
                <CampoMedio />
                <TextoDadosMotorista>Tipo de carga:</TextoDadosMotorista>
                <CampoMedio />  
                <TextoDadosMotorista>Peso da carga:</TextoDadosMotorista>
                <CampoPequeno />

                <TituloEntregas>Dados do cliente</TituloEntregas>
                <TextoDadosMotorista>Nome:</TextoDadosMotorista>
                <CampoMedio />
                <TextoDadosMotorista>Endereço:</TextoDadosMotorista>
                <CampoGrande />
                <TextoDadosMotorista>Número:</TextoDadosMotorista>
                <CampoPequeno />
                <TextoDadosMotorista>Bairro:</TextoDadosMotorista>
                <CampoGrande />
                <TextoDadosMotorista>Cidade:</TextoDadosMotorista>
                <CampoMedio />
                <TextoDadosMotorista>CEP:</TextoDadosMotorista>
                <CampoMedio />
                <TextoDadosMotorista>Estado:</TextoDadosMotorista>
                <CampoMedio/>
                <Botao onPress={publicar}>
                    <TextoBotao>Modificar</TextoBotao>
                </Botao>
            </Scrollzinho>
            <Footer>
                <Icones onPress={goHome}>
                    <AntDesign name="appstore1" size={30} color="#5f5f5f" />
                    <TextoIcones>Home</TextoIcones>
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

