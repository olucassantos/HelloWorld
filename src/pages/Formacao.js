import React from 'react';
import { View, Text, Button } from 'react-native';

import Botao from '../components/Botao';

const Formacao = ({navigation}) => {
    return (
        <View>
            <Text>Formação</Text>


            <Button 
                title="Home"  
                onPress={ () => navigation.navigate('Home') }
            />
        </View>
    );
}

export default Formacao;