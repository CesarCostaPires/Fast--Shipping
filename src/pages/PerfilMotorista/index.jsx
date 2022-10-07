import React, { useState } from "react";
import { ImageBackground,ScrollView, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import { Container, Footer, Header, Icones, Nome, TextoIcones, TextoIconeSelecionado, Modalzinho, Botao, TextoBotao, TextoDadosMotorista, ViewDadosMotorista, TituloMotorista, BotaoEditar } from "../Style";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };


export default function PerfilMotorista(){
    const navigation = useNavigation();

    function goHome(){
        navigation.navigate('Motorista');
    }
    function goEmpresas(){
        navigation.navigate('BuscaEmpresas');
    }
    function goUpdateMotorista(){
        navigation.navigate('UpdateMotorista');
    }
    function goUpdateVeiculo(){
        navigation.navigate('UpdateVeiculo');
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <ViewDadosMotorista>
                    <TituloMotorista>Dados Pessoais</TituloMotorista>
                    <TextoDadosMotorista>Nome completo</TextoDadosMotorista>
                    <TextoDadosMotorista>00000000000</TextoDadosMotorista>
                    <TextoDadosMotorista>000000000</TextoDadosMotorista>
                    <TextoDadosMotorista>000000000</TextoDadosMotorista>
                </ViewDadosMotorista>
                <ViewDadosMotorista>
                    <TituloMotorista>Endereço</TituloMotorista>
                    <TextoDadosMotorista>Endereco Endereco Endereco Endereco Endereco</TextoDadosMotorista>
                    <TextoDadosMotorista>000</TextoDadosMotorista>
                    <TextoDadosMotorista>Endereco Endereco</TextoDadosMotorista>
                    <TextoDadosMotorista> Endereco </TextoDadosMotorista>
                    <TextoDadosMotorista>00000000</TextoDadosMotorista>
                    <TextoDadosMotorista>Endereco</TextoDadosMotorista>
                    <TextoDadosMotorista> 00000000000</TextoDadosMotorista>
                    <TextoDadosMotorista>EnderecoEnderecoEndereco</TextoDadosMotorista>
                    <TextoDadosMotorista>Endereco</TextoDadosMotorista>
                    <BotaoEditar onPress={goUpdateMotorista}>
                        <AntDesign name="edit" size={25} color="white" />
                    </BotaoEditar>
                </ViewDadosMotorista>
                

                
                <ViewDadosMotorista>
                    <TituloMotorista>Veículo cadastrado</TituloMotorista>
                    <TextoDadosMotorista>Placa: 000000</TextoDadosMotorista>
                    <TextoDadosMotorista>Ano:0000</TextoDadosMotorista>
                    <TextoDadosMotorista>Modelo: asdasdasdasda</TextoDadosMotorista>
                    <TextoDadosMotorista>Capacidade: </TextoDadosMotorista>
                    <TextoDadosMotorista>Chassi: 000000</TextoDadosMotorista>
                    <BotaoEditar onPress={goUpdateVeiculo}>
                        <AntDesign name="edit" size={25} color="white" />
                    </BotaoEditar>
                </ViewDadosMotorista>
            </ScrollView>
            <Footer>
            <Icones onPress={goHome}>
                    <AntDesign name="appstore1" size={30} color="#5f5f5f" />
                    <TextoIcones>Home</TextoIcones>
                </Icones>
                <Icones onPress={goEmpresas}>
                    <Ionicons name="business" size={30} color="#5f5f5f" />
                    <TextoIcones>Empresas</TextoIcones>
                </Icones>
                
                <Icones>
                    <FontAwesome name="user-circle" size={30} color="#135ced" />
                    <TextoIconeSelecionado>Perfil</TextoIconeSelecionado>
                </Icones>
            </Footer>
            </ImageBackground>
        </Container>
    )
}
const styles = StyleSheet.create({
   
    image: {
    flex:1,
    justifyContent: "center",
    width:"100%",
    alignItems: "center"
  
}});
