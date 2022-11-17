import React, {useState,useEffect,useRef} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {css} from '../assets/css/Css';

export default function Checkout(props) {

    return (
        <View style={css.container}>
            <Text>O valor da corrida é {props.route.params.price}</Text>
        </View>
    );
}