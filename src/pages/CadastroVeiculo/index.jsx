import React, { useState } from "react";
import { useNavigation} from '@react-navigation/native'; 
import {ImageBackground,TextInput, Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import { CampoMedio, Botao, TextoBotao, CampoGrande, CampoPequeno, Scrollzinho, ContainerCadastro, TituloMotorista, TituloEntregas, TextoDadosMotorista, ViewCadastro, ViewCep, BotaoCep } from "../Style";
//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };

export default function CadastroVeiculo(){
    let [placaVeiculo, setPlaca] = useState();
    let [anoVeiculo, setAno] = useState();
    let [modeloVeiculo, setModelo] = useState();
    let [capaVeiculo, setCapacidade] = useState();
    let [chassiVeiculo, setChassi] = useState();
    const navigation = useNavigation();

    function goLogin(){
        navigation.navigate('Login');
    }
    return(
        <ContainerCadastro>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <ViewCadastro>
                <Scrollzinho showsVerticalScrollIndicator={false}>
                <TituloEntregas>Cadastre seu veículo</TituloEntregas>
                    <TextoDadosMotorista>Placa:</TextoDadosMotorista>
                    <CampoMedio onChangeText={setPlaca}/>
                    <TextoDadosMotorista>Ano:</TextoDadosMotorista>
                    <CampoMedio onChangeText={setAno}/>
                    <TextoDadosMotorista>Modelo:</TextoDadosMotorista>
                    <CampoMedio onChangeText={setModelo}/>
                    <TextoDadosMotorista>Capacidade:</TextoDadosMotorista>
                    <CampoMedio onChangeText={setCapacidade}/>
                    <TextoDadosMotorista>Chassi:</TextoDadosMotorista>
                    <CampoGrande onChangeText={setChassi}/>
                    <Botao onPress={goLogin}><TextoBotao>Cadastrar veículo</TextoBotao></Botao>
                </Scrollzinho>
            </ViewCadastro>
            </ImageBackground>
        </ContainerCadastro>
    );
}
const styles = StyleSheet.create({
    
    image: {
    flex:1,
    justifyContent: "center",
    width:"100%",
    alignItems: "center"
  
}});