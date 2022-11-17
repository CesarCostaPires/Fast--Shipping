import React, { useState } from "react";
import {ImageBackground,TouchableOpacity,StyleSheet,Image,Alert} from 'react-native';
import { useNavigation} from '@react-navigation/native'; 
import { Container, Footer, Header, Icones, Nome, TextoIcones, TextoIconeSelecionado, Botao, TextoBotao, TextoDadosMotorista, CampoGrande, CampoMedio, Scrollzinho } from "../Style";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import api from "../../services/api";
//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };

export default function UpdateVeiculo(){
    
        let [placaVeiculo, setPlaca] = useState();
        let [anoVeiculo, setAno] = useState();
        let [modeloVeiculo, setModelo] = useState();
        let [capaVeiculo, setCapacidade] = useState();
        let [chassiVeiculo, setChassi] = useState();
        async function CadastrarUsuario(){
            console.log("clicou");
    
            let response = await api.post('UpdateVeiculo.php', {
                placaVeiculo: placaVeiculo,
                anoVeiculo: anoVeiculo,
                modeloVeiculo: modeloVeiculo, 
                capaVeiculo: capaVeiculo,  
                chassiVeiculo:chassiVeiculo
            }).then(function(response){Alert.alert("Usuario cadastrado com sucesso!");
        console.log(response);
            }).catch(function(error){
                Alert.alert("Erro ao cadastrar,tente mais tarde!");
                console.log(error);
            });
    
            
            navigation.navigate('Inicial');
        }
       

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
                    
                </TouchableOpacity> 
            </Header>
            <Scrollzinho>
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
                    <Botao onPress={CadastrarUsuario}><TextoBotao>Cadastrar veículo</TextoBotao></Botao>
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
