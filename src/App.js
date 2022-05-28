import React from 'react';

import { View, StyleSheet, SafeAreaView, StatusBar, Image, Text, Linking } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

const colorGit = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const colorBgSquares = '#45B25C';
const colorHighlightedSquare = '#00C647';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/78429537?v=4';
const urlToMyGithub = 'https://github.com/LeticiaBarbosa-dev';

const App = () => {

  const handlePressGoToGithub = async () => {
    console.log('Verificando Link...');
    const res = await Linking.canOpenURL(urlToMyGithub);

    if (res) {
      console.log('Link Aprovado');
      await Linking.openURL(urlToMyGithub);
      console.log('Abrindo o link');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGit} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel='Uma mulher com camiseta laranja e cabelos soltos'
          style={style.avatar}
          source={{ uri: imageProfileGithub }}
        />
        <Text accessibilityLabel='Nome: Letícia Barbosa' style={[style.defaultText, style.name]}>Letícia Barbosa</Text>
        <Text accessibilityLabel='Nickname: LetíciaBarbosa-dev' style={[style.defaultText, style.nickname]}>LeticiaBarbosa-dev</Text>
        <Text accessibilityLabel='Descrição: Desenvolvedora FrontEnd Júnior com mais de dois anos de experiência. @leticiapereiraab' style={[style.defaultText, style.description]}>Desenvolvedora FrontEnd Júnior com mais de dois anos de experiência. @leticiapereiraab</Text>

        <View style={style.divSquare}>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
        </View>
        <View style={style.divSquare}>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
        </View>

        <View style={style.divSquare}>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
        </View>

        <View style={style.divSquare}>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
        </View>

        <View style={style.divSquare}>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
        </View>

        <View style={style.divSquare}>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.highlightedSquare}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
        </View>

        <View style={style.divSquare}>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
          <View style={style.square}></View>
        </View>

        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGit,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGitHub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGitHub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
  },
  divSquare: {
    flexDirection: 'row',
    marginTop: 3,
  },
  square: {
    height: 15,
    width: 15,
    marginLeft: 3,
    borderRadius: 3,
    backgroundColor: colorBgSquares,
    opacity: 0.76,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  highlightedSquare: {
    backgroundColor: colorHighlightedSquare,
    marginLeft: 3,
    borderRadius: 3,
    height: 15,
    width: 15,
  }
});

export default App;
