import React, { useState } from "react";
import { ImageBackground,ScrollView, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import {CurrentRenderContext, useNavigation} from '@react-navigation/native'; 
import { Container, Footer, Header, Icones, Nome, TextoIcones, TextoIconeSelecionado, Modalzinho, Botao, TextoBotao, TextoDadosMotorista, ViewDadosMotorista, TituloMotorista, BotaoEditar, ViewFormulario, CampoGrande, CampoPequeno, CampoMedio, Scrollzinho } from "../Style";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };

export default function UpdateEmpresa(){
    const navigation = useNavigation();
    function goHome(){
        navigation.navigate('Empresa');
    }
    function goPublicar(){
        navigation.navigate('Publicar');
    }
    function goPerfil(){
        navigation.navigate('PerfilEmpresa');
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
                    <TextoDadosMotorista>Nome:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: Ana Maria"/>
                    <TextoDadosMotorista>CPF ou CNPJ:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: 000.000.000-00"/>
                    <TextoDadosMotorista>Endere??o:</TextoDadosMotorista>
                    <CampoGrande placeholder="Ex: Avenida Elis??o Cordeiro de Siquiera"/>
                    <TextoDadosMotorista>Numero:</TextoDadosMotorista>
                    <CampoPequeno placeholder="Ex: 628"/>
                    <TextoDadosMotorista>Bairro:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: Jardim Santo El??as"/>
                    <TextoDadosMotorista>Cidade:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: S??o Paulo"/>
                    <TextoDadosMotorista>CEP:</TextoDadosMotorista>
                    <CampoPequeno placeholder="Ex: 00000-000"/>
                    <TextoDadosMotorista>Estado:</TextoDadosMotorista>
                    <CampoPequeno placeholder="S??o Paulo"/>
                    <TextoDadosMotorista>Contato:</TextoDadosMotorista>
                    <CampoMedio placeholder="0000000-0000"/>
                    <TextoDadosMotorista>E-mail:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: anamaria@gmail.com"/>
                    <Botao>
                        <TextoBotao>Atualizar</TextoBotao>
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
