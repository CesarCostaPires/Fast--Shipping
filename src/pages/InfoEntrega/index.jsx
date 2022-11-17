import React, { useState } from "react";
import { ImageBackground,Text, ScrollView, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import { Container, Footer, Header, Icones, Nome, TextoIcones, TextoIconeSelecionado, Modalzinho, Botao, TextoBotao, TextoDadosEntrega, ViewDadosProduto, TituloEntregas, BotaoEditar } from "../Style";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";
//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };

export default function InfoEntrega(){

    const navigation = useNavigation();

    function goUpdateEntrega(){
        navigation.navigate('UpdateEntrega');
    }
    function goHome(){
        navigation.navigate('Empresa');
    }

    function goLista(){
        navigation.navigate('ListaMotorista');
    }
    function goPublicar(){
        navigation.navigate('Publicar');
    }
    function goPerfil(){
        navigation.navigate('PerfilEmpresa');
    }

    let[visivel, setVisivel] = useState(false);
    return(
        <Container>
             <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Header>
                <Nome>Nome do usuario</Nome>
                <TouchableOpacity onPress={() => setVisivel(true)}>
                    
                </TouchableOpacity> 
            </Header>
            <Modal animationType='slide' transparent={true} visible={visivel}>
                <Modalzinho>
                    
                </Modalzinho>
            </Modal>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ViewDadosProduto>
                    <TextoDadosEntrega>codigo: #0000</TextoDadosEntrega>
                    <TextoDadosEntrega>Produto: geladeira</TextoDadosEntrega>
                    <TextoDadosEntrega>Empresa: Casas Bahia</TextoDadosEntrega>
                    <TextoDadosEntrega>Tipo de Carga: grande</TextoDadosEntrega>
                    <TextoDadosEntrega>Peso: </TextoDadosEntrega>    
                
                
                    <TituloEntregas>Informções da empresa</TituloEntregas>
                    <TextoDadosEntrega>Tel: 1192323-3232</TextoDadosEntrega>
                    <TextoDadosEntrega>Avenida não sei qual de não sei da onde</TextoDadosEntrega>
                    <TextoDadosEntrega>Bairro: Jardim Santo Elias</TextoDadosEntrega>
                    <TextoDadosEntrega>Cep: 00000-000</TextoDadosEntrega>
            
                
                    <TituloEntregas>Endereço do cliente</TituloEntregas>
                    <TextoDadosEntrega>Nome do cliente: Jackson</TextoDadosEntrega>
                    <TextoDadosEntrega>Avenida Elisio Cordeiro de Siqueira</TextoDadosEntrega>
                    <TextoDadosEntrega>Bairro: Jardim Santo Elias</TextoDadosEntrega>
                    <TextoDadosEntrega>Cep: 05136-000</TextoDadosEntrega>
                    <BotaoEditar onPress={goUpdateEntrega}>
                        <AntDesign name="edit" size={25} color="white" />
                    </BotaoEditar>

                    <TituloEntregas>Status: Nenhum Pedido recebido</TituloEntregas>
                    <Botao onPress={goLista}>
                        <TextoBotao>Ver Opções</TextoBotao>
                    </Botao>
                </ViewDadosProduto>
                
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
