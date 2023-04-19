import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Botao = ({titulo, acao}) => {
    return (
        <TouchableOpacity style={estilo.botao} onPress={ acao }>
            <Text style={estilo.texto}>{ titulo }</Text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    botao: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        elevation: 1,
        padding: 10,
        flexBasis: '48%',
    },
    texto: {
        fontSize: "1.3em",
        fontFamily: "Trebuchet MS",
        fontWeight: 'bold',
        color: "#00a",
    }
});

export default Botao;
{/* <Botao titulo="Sobre" acao={() => navigation.navigate("Sobre")} />; */}