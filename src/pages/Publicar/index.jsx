import React, { useState, useEffect } from "react";
import {ImageBackground,TouchableOpacity, StyleSheet, Alert, Text} from 'react-native';
import { useNavigation} from '@react-navigation/native'; 
import { Header, Footer, Nome, Icones, TextoIconeSelecionado,TextoIcones, CampoPequeno1,CampoMedio, Botao, TextoBotao, CampoGrande, CampoPequeno, Scrollzinho, ContainerCadastro, TituloMotorista, TituloEntregas, TextoDadosMotorista, ViewCadastro, ViewCep, BotaoCep, Container } from "../Style";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import api from "../../services/api";
import axios from "axios"
//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };

export default function Publicar(){

    let [produto, setProduto] = useState();
    let [tipocarga, setTipoCarga] = useState();
    let [pesocarga, setPesoCarga] = useState();
    let [nomecliente, setNomeCliente] = useState();
    let [endereco, setEndereco] = useState();
    let [numero, setNumero] = useState();
    let [bairro, setBairro] = useState();
    let [cidade, setCidade] = useState();
    let [cep, setCEP] = useState();
    let [estado, setEstado] = useState();

    const[values, setValues] = useState({
        bairro: '',
        complemento: '',
        localidade: '',
        logradouro:'',
        uf:''
})

function getCEP(){
axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((data) => setValues(data.data))
}



    async function Publicar(){
        console.log("clicou");

        let response = await api.post('publicarEntregas.php', {
            produto:  produto,
            tipocarga: tipocarga,
            pesocarga:  pesocarga,
            nomecliente: nomecliente,
            endereco: endereco,
            numero: numero,
            bairro: bairro,
            cidade:  cidade,
            cep: cep,
            estado: estado

        }).then(function(response){Alert.alert("Usuario cadastrado com sucesso!");
    console.log(response);
        }).catch(function(error){
            Alert.alert("Erro ao cadastrar,tente mais tarde!");
            console.log(error);
        });

        
        navigation.navigate('Empresa');
    }
    const navigation = useNavigation()


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

    return(
        <Container>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Header>
                <Nome> Nome do usuario</Nome>
                <TouchableOpacity onPress={() => setVisivel(true)}>
                   
                </TouchableOpacity>
                
            </Header>
            <Scrollzinho  showsVerticalScrollIndicator={false}>
                <TituloEntregas>               Publique uma entrega</TituloEntregas>
                <TextoDadosMotorista>Nome do produto:</TextoDadosMotorista>
                <CampoMedio onChangeText={setProduto}/>
                <TextoDadosMotorista>Tipo de carga:</TextoDadosMotorista>
                <CampoMedio onChangeText={setTipoCarga}/>  
                <TextoDadosMotorista>Peso da carga:</TextoDadosMotorista>
                <CampoPequeno onChangeText={setPesoCarga}/>

                <TituloEntregas>Dados do cliente</TituloEntregas>
                <TextoDadosMotorista>Nome:</TextoDadosMotorista>
                <CampoMedio onChangeText={setNomeCliente}/>
                <TextoDadosMotorista>CEP:</TextoDadosMotorista>
                
                <ViewCep>
                        <CampoPequeno1 
                      
                        keyboardType='number-pad'
                        value={cep}
                         onChangeText={setCEP}
                         onBlur={()=>getCEP()} />
                        
                    </ViewCep>


                <TextoDadosMotorista>Endereço:</TextoDadosMotorista>
                <CampoGrande
                 value={values.logradouro} 
                onChangeText={setEndereco} />
                <TextoDadosMotorista>Número:</TextoDadosMotorista>
                <CampoPequeno onChangeText={setNumero}/>
                <TextoDadosMotorista>Bairro:</TextoDadosMotorista>
                <CampoGrande 
                value={values.bairro}
                onChangeText={setBairro}/>
                <TextoDadosMotorista>Cidade:</TextoDadosMotorista>
                <CampoMedio 
                value={values.localidade}
                onChangeText={setCidade}/>
                
                <TextoDadosMotorista>Estado:</TextoDadosMotorista>
                <CampoMedio 
                value={values.uf}
                onChangeText={setEstado}/>
                <Botao onPress={Publicar}>
                    <TextoBotao>Publicar</TextoBotao>
                </Botao>
            </Scrollzinho>
            <Footer>
                <Icones onPress={goHome}>
                    <AntDesign name="appstore1" size={30} color="#5f5f5f" />
                    <TextoIcones>Home</TextoIcones>
                </Icones>
                <Icones >
                    <Ionicons name="create" size={30} color="#135ced" />            
                    <TextoIconeSelecionado>Publicar</TextoIconeSelecionado>
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