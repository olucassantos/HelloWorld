import React from 'react';
import { View, Text, Button } from "react-native";

const Sobre = ({ navigation }) => {
    return (
        <View>
            <Text>Sobre mim</Text>
            <Text>
                Sou professor e progrador de aplicativos e 
                página para a web. Mas se pagar eu faço outros 
                programas.
            </Text>

            <Button 
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
        </View>
    );
}

export default Sobre;