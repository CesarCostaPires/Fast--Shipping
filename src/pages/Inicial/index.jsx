import React, { useState } from "react";
import { ImageBackground, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import { useNavigation} from '@react-navigation/native'; 
import {ContainerLogin,BotaoLogin,TextoBotaoLogin,BotaoCriar,TextoCriar, IconesStart,ViewBotoes, Buisness, TextoStart1,TextoStart2 } from "../Style";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';
//const image = { uri: "https://i.pinimg.com/564x/e2/b4/62/e2b462a5f7e83b6ba7c7c9c9ace6ff34.jpg" };
const image = { uri: "https://i.pinimg.com/564x/81/01/ed/8101ed6108e46eda140a7bbeaab3ed14.jpg" };
//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };

export default function EmpresaMotorista(){
    const navigation = useNavigation();
    async function Logar(){ 
  

        console.log("clicou"); 
        
        let response = await api.post('login.php', { 
        
           
        email: emailEmpresa, 
        senha: senhaEmpresa 
        }) 
        
        .then(function (response) { 
          
        
        //Verificando o valor da variavel mensagem enviada pelo php 
        if(response.data == 'Logado com Sucesso!'){ 
        Alert.alert("Login realizado com sucesso!"); 
        navigation.navigate('Empresa'); 
        } 
         else if(response.data == 'Erro ao logar') 
         Alert.alert("E-mail ou senha incorreto, tente novamente"); 
        console.log(response); 
        }); }
    //function Logar(){ 

        //Alert.alert("Login efetuado com sucesso!"); 
        //navigation.navigate('Empresa') 
     //} 
    //function Logar(){
        //if(senha == " "){
            //navigation.navigate('Motorista');
        //}
      // else if(senha == " "){
            //navigation.navigate('Empresa');
       // }
    //}
    function goEmpresaMotorista(){
        navigation.navigate('EmpresaMotorista');
    }
    function goLogin(){
        navigation.navigate('Login');
    }
    function gologin(){
        navigation.navigate('Login');
    }
    function goCadastroEmpresa(){
        navigation.navigate('LoginMotorista');
    }
    function goCadastroMotorista(){
        navigation.navigate('EmpresaMotorista');
    }
    return(
        <ContainerLogin>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Image style={{width:190, height:180}} source={require('../../assets/novo1.png')}/>
            <TextoStart2></TextoStart2>
            <IconesStart>
                
                <RectButton style={styles.Botao} onPress={goLogin}>
                    <Buisness>
                        <Ionicons name="business" size={30} color="#f5f5f5" />
                    </Buisness>
                    <Text style={styles.textoBotao}>  Cliente</Text>
                </RectButton>
                <TextoStart1></TextoStart1>
                <RectButton style={styles.Botao} onPress={goCadastroEmpresa}>
                    <Buisness>
                    <FontAwesome name="truck" size={24} color="#f5f5f5" />
                    </Buisness>
                    <Text style={styles.textoBotao}>Motorista</Text>
                </RectButton>
                <ViewBotoes>
                <BotaoCriar onPress={goEmpresaMotorista}>
                    <TextoCriar>Criar conta</TextoCriar>
                </BotaoCriar>
            </ViewBotoes>
                
                
                </IconesStart>
                
            </ImageBackground> 
        </ContainerLogin>
    );
}

const styles = StyleSheet.create({
    Botao:{
        flexDirection: 'row',
        width: '80%',
        height: '12%',
        justifyContent:'flex-start',
        backgroundColor:'#f5f5f5',
        borderRadius:9,
        margin:50,
        alignItems:'center',
        marginBottom: 280,
        marginTop: 450, 
        alignSelf:'center'
        
        
    },
    image: {
        flex:1,
        justifyContent: "center",
        width:"100%",
        alignItems: "center"
      },
    textoBotao:{
        marginLeft:60,
        fontSize:17,
        color: '#135ced'
        
        
    }
});