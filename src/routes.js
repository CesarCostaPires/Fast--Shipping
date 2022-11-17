import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Inicial from "./pages/Inicial";
import Login from "./pages/Login";
import LoginMotorista from "./pages/LoginMotorista";
import Motorista from "./pages/Motorista";
import Entrega from "./pages/Entrega";
import MapaMotorista from "./pages/MapaMotorista";
import BuscaEmpresas from "./pages/BuscaEmpresas";
import DetalhesEmpresas from "./pages/DetalhesEmpresas";
import PerfilMotorista from "./pages/PerfilMotorista";
import UpdateMotorista from "./pages/UpdateMotorista";
import UpdateVeiculo from "./pages/UpdateVeiculo";
import EmpresaMotorista from "./pages/EmpresaMotorista";
import CadastroEmpresa from "./pages/CadastroEmpresa";
import CadastroMotorista from "./pages/CadastroMotorista";
import CadastroVeiculo from "./pages/CadastroVeiculo";
import Empresa from "./pages/Empresa";
import InfoEntrega from "./pages/InfoEntrega";
import ListaMotorista from "./pages/ListaMotoristas";
import MotoristaSelecionado from "./pages/MotoristaSelecionado";
import Publicar from "./pages/Publicar";
import PerfilEmpresa from "./pages/PerfilEmpresa";
import UpdateEmpresa from "./pages/UpdateEmpresa";
import UpdateEntrega from "./pages/UpdateEntrega";
import Cep from "./pages/Cep";
import ANTT from "./pages/ANTT";
import Pagamento from "./pages/Pagamento";


const appStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <appStack.Navigator headerMode="none" screenOptions={{
                cardStyle:{backgroundColor:'#f0f0f5'}
            }}>
                <appStack.Screen name="Inicial" component={Inicial}/>
                <appStack.Screen name="Login" component={Login}/>
                <appStack.Screen name="LoginMotorista" component={LoginMotorista}/>
                <appStack.Screen name="Empresa" component={Empresa}/>
                <appStack.Screen name="EmpresaMotorista" component={EmpresaMotorista}/>
                <appStack.Screen name="Motorista" component={Motorista}/>
                <appStack.Screen name="Entrega" component={Entrega}/>
                <appStack.Screen name="MapaMotorista" component={MapaMotorista}/>
                <appStack.Screen name="BuscaEmpresas" component={BuscaEmpresas}/>
                <appStack.Screen name="PerfilMotorista" component={PerfilMotorista}/>
                <appStack.Screen name="DetalhesEmpresas" component={DetalhesEmpresas}/>
                <appStack.Screen name="UpdateMotorista" component={UpdateMotorista}/>
                <appStack.Screen name="UpdateVeiculo" component={UpdateVeiculo}/>
                <appStack.Screen name="CadastroEmpresa" component={CadastroEmpresa}/>
                <appStack.Screen name="CadastroMotorista" component={CadastroMotorista}/>
                <appStack.Screen name="CadastroVeiculo" component={CadastroVeiculo}/>
                <appStack.Screen name="InfoEntrega" component={InfoEntrega}/>
                <appStack.Screen name="ListaMotorista" component={ListaMotorista}/>
                <appStack.Screen name="MotoristaSelecionado" component={MotoristaSelecionado}/>
                <appStack.Screen name="Publicar" component={Publicar}/>
                <appStack.Screen name="PerfilEmpresa" component={PerfilEmpresa}/>
                <appStack.Screen name="UpdateEmpresa" component={UpdateEmpresa}/>
                <appStack.Screen name="UpdateEntrega" component={UpdateEntrega}/>
                <appStack.Screen name="Cep" component={Cep}/>
                <appStack.Screen name="Pagamento" component={Pagamento}/>
                <appStack.Screen name="ANTT" component={ANTT}/>
            
                 

            </appStack.Navigator>
        </NavigationContainer>
    );
}