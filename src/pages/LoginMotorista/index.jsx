import React, { useState, useEffect} from "react";
import {ImageBackground,TextInput, Text, TouchableOpacity, View, StyleSheet, Alert,Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler'; 
import {useNavigation} from '@react-navigation/native'; 
import {BotaoCriar, BotaoLogin, CaixaTexto, ContainerLogin, TextoBotaoLogin,TextoStart, TextoCriar, ViewBotoes, ViewCaixas } from "../Style";
import api from '../../services/api';

const image = { uri: "https://i.pinimg.com/564x/81/01/ed/8101ed6108e46eda140a7bbeaab3ed14.jpg" };

//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
export default function Login(){
    let[senhaMoto, setSenhaMoto] = useState('');
    let[emailMoto, setEmailMoto] = useState('');
    //let[senhaMotorista, setsenha] = useState('');
    //let[emailMotorista, setemail] = useState('');

    const navigation = useNavigation();
    async function Logar(){ 
  

        console.log("clicou"); 
        
        let response = await api.post('loginMoto.php', { 
        
           
        emailMoto: emailMoto, 
        senhaMoto: senhaMoto 
        }) 
        
        .then(function (response) { 
          
        
        //Verificando o valor da variavel mensagem enviada pelo php 
        if(response.data == 'Logado com Sucesso!'){ 
        Alert.alert("Login realizado com sucesso!"); 
        navigation.navigate('Motorista'); 
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
    //function goEmpresaMotorista(){
        //navigation.navigate('EmpresaMotorista');
    //}
    

    return(
        <ContainerLogin>
             <ImageBackground source={image} resizeMode="cover" style={styles.image}>
             <Image style={{width:180, height:160}} source={require('../../assets/novo1.png')}/>
             <ViewCaixas>
             <TextoStart>Motorista</TextoStart>
                <CaixaTexto placeholder="Digite seu email" autoCorrect={false} onChangeText={setEmailMoto} />
                <CaixaTexto placeholder="Digite sua senha" autoCorrect={false} onChangeText={setSenhaMoto} />
                
            </ViewCaixas>
            <ViewBotoes>
                <BotaoLogin onPress={Logar}>
                    <TextoBotaoLogin>Login</TextoBotaoLogin>
                </BotaoLogin>
                
            </ViewBotoes>
            </ImageBackground>
        </ContainerLogin>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#135ced'
    },
    image: {
    flex:1,
    justifyContent: "center",
    width:"100%",
    alignItems: "center"
  },
 
    viewcaixas:{
        justifyContent:"space-around",
        width:'80%',
        alignContent:'center'
    },
    CaixaTexto:{
        
        height: 50,
        borderRadius:10,
        backgroundColor:'#f5f5f5',
        margin:10,
        width:'100%',
        color:'#135ced',
        fontSize:15,
        paddingLeft:20
        
    },
    botaoLogin:{
        backgroundColor:'#f5f5f5',
        padding:10,
        borderRadius:9,
        width:250,
        margin:5,
        alignSelf:'center'
    },
    textoBotaoLogin:{
        textAlign:'center'
    }
});