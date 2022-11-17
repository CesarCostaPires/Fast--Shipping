import React, { useState } from "react";
import { useNavigation} from '@react-navigation/native'; 
import {ImageBackground,TouchableOpacity, StyleSheet, Text, Alert, Keyboard} from 'react-native';
import { CampoMedio, Botao, TextoBotao, CampoGrande,CampoPequeno1, CampoPequeno, Scrollzinho, ContainerCadastro, TituloMotorista, TituloEntregas, TextoDadosMotorista, ViewCadastro, ViewCep, BotaoCep } from "../Style";
import api from "../../services/api";
import axios from "axios"
//import api from "../../services/apicep";
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };

//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
export default function CadastroMotorista(){
    let [nomeEmpresa, setNome] = useState();
    let [cpfCnpj, setCpfCnpj] = useState();
    let [rgMoto, setRg] = useState();
    let [cnhMoto, setCnh] = useState();
    let [enderecoMotorista, setEndereco] = useState();
    let [numMotorista, setNum] = useState();
    let [bairroMotorista, setBairro] = useState();
    let [cidadeMotorista, setCidade] = useState();
    let [cepMotorista, setCep] = useState();
    let [estadoMotorista, setEstado] = useState();
    let [contatoMotorista, setContato] = useState();
    let [emailMoto, setEmailMoto] = useState();
    let [classMoto, setClas] = useState('0,0');
    let [senhaMoto, setSenhaMoto] = useState();
    let [antt, setAntt] = useState();

    const[values, setValues] = useState({
        bairro: '',
        complemento: '',
        localidade: '',
        logradouro:'',
        uf:''
})
function getCep(){
  axios.get(`https://viacep.com.br/ws/${cepMotorista}/json/`).then((data) => setValues(data.data))
}

    async function handleApi() {
       
              navigation.navigate('ANTT');
                   
      }


    async function CadastrarUsuario(){
        console.log("clicou");

        let response = await api.post('cadastromotorista.php', {
            nome: nomeEmpresa,
            cpf: cpfCnpj,
            rg: rgMoto,
            cnh: cnhMoto,
            endereco: enderecoMotorista,
            num: numMotorista,
            bairro: bairroMotorista,
            cidade: cidadeMotorista,
            cep: cepMotorista,
            estado: estadoMotorista,
            contato: contatoMotorista,
            emailMoto: emailMoto,
            class: classMoto,
            senhaMoto: senhaMoto
        }).then(function(response){Alert.alert("Usuario cadastrado com sucesso!");
    console.log(response);
        }).catch(function(error){
            Alert.alert("Erro ao cadastrar,tente mais tarde!");
            console.log(error);
        });
        navigation.navigate('CadastroVeiculo');
    }
    const navigation = useNavigation()
    
    
    return(
        <ContainerCadastro>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <ViewCadastro>
                <Scrollzinho showsVerticalScrollIndicator={false}>
                    <TituloEntregas>                  Seu cadastro</TituloEntregas>
                    <TextoDadosMotorista>Nome completo:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: Ana Maria" onChangeText={setNome}/>
                    <TextoDadosMotorista>Consulta ANTT:</TextoDadosMotorista>
                    <ViewCep>
                        
                        <BotaoCep >
                            
                            <TextoBotao onPress={handleApi}><TextoBotao>Consultar</TextoBotao></TextoBotao>
                        </BotaoCep>
                    </ViewCep>
                    <TextoDadosMotorista>CPF:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: 000.000.000-00" onChangeText={setCpfCnpj}/>
                    <TextoDadosMotorista>RG:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: 00.000.000-0" onChangeText={setRg}/>
                    <TextoDadosMotorista>CNH:</TextoDadosMotorista>
                    <CampoMedio placeholder="000000000" onChangeText={setCnh}/>
                    
                    <TextoDadosMotorista>CEP:</TextoDadosMotorista>
                    <ViewCep>
                    <CampoPequeno 
                    placeholder="Ex: 00000-000"
                    keyboardType='number-pad'
                    onChangeText={setCep}
                    value={cepMotorista}
                    onBlur={()=>getCep()}/>
                   </ViewCep>
                   <TextoDadosMotorista>Endereço:</TextoDadosMotorista>
                    <CampoGrande placeholder="Ex: Avenida Elisío Cordeiro de Siquiera" 
                    value={values.logradouro}
                    onChangeText={setEndereco}/>
                    <TextoDadosMotorista>Numero:</TextoDadosMotorista>
                    <CampoPequeno placeholder="Ex: 628"onChangeText={setNum}/>
                    <TextoDadosMotorista>Bairro:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: Jardim Santo Elías"
                    value={values.bairro}
                    onChangeText={setBairro}/>
                    <TextoDadosMotorista>Cidade:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: São Paulo"
                    value={values.localidade}
                    onChangeText={setCidade}/>
                    <TextoDadosMotorista>Estado:</TextoDadosMotorista>
                    <CampoPequeno placeholder="São Paulo"
                    value={values.uf}
                    onChangeText={setEstado}/>
                    <TextoDadosMotorista>Contato:</TextoDadosMotorista>
                    <CampoMedio placeholder="(00)00000-0000"onChangeText={setContato}/>
                    <TextoDadosMotorista>E-mail:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: anamaria@gmail.com"onChangeText={setEmailMoto}/>
                    <TextoDadosMotorista>Senha:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: 00000000000"onChangeText={setSenhaMoto}/>
                     
                     
                     
                     <Botao onPress={CadastrarUsuario}><TextoBotao>Cadastrar</TextoBotao></Botao>
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
      },
      image: {
        flex:1,
        justifyContent: "center",
        width:"100%",
        alignItems: "center"
      
    },

      TextoDadosMotorista:{
        
            backgroundColor:'#F8F8FF',
            color:'#F8F8FF',
            textAlign:'center'
}});
