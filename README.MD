# Como fazer um sistema de navegação em uma aplicação React Native

## 1. Instalação

Para utilizar o react navigation precisamos de alguns pacotes:

- @react-navigation/native
- react-native-screens 
- react-native-safe-area-context

Para instalar os pacotes, basta rodar o comando:

    npm install @react-navigation/native react-native-screens react-native-safe-area-context

    npm install @react-navigation/native-stack

## 2. Configuração do App.js

O arquivo App.js é o arquivo principal da aplicação, onde é feito a configuração do react navigation.

Primeiro, importamos o createStackNavigator do react navigation:

    import { createStackNavigator } from '@react-navigation/native-stack';

Depois, importamos o NavigationContainer do react navigation:

    import { NavigationContainer } from '@react-navigation/native';

Depois, criamos uma constante chamada Stack, que é responsável por criar as rotas da aplicação:

    const Stack = createStackNavigator();

Por fim, criamos a função App, que é responsável por renderizar as rotas da aplicação:

    function App() {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

## 3. Chamando as rotas
