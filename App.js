import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';

class App extends Component {
  
  componentDidMount() {
  if (Platform.OS === 'web') {
    document.documentElement.lang = 'pt-BR';
    document.documentElement.setAttribute('translate', 'no');
    document.title = 'Conexão Divina';
  }
}

  constructor(props) {
    super(props);
    this.state = {
      frase: 'Existe uma palavra especial para você hoje.',
      referencia: '',
      img: require('./src/biblia.png'),
      indice: -1
    };
    this.frases = [
      { texto: 'Tudo posso naquele que me fortalece.', ref: 'Filipenses 4:13' },
      { texto: 'O Senhor é o meu pastor; nada me faltará.', ref: 'Salmos 23:1' },
      { texto: 'Orai sem cessar.', ref: '1 Tessalonicenses 5:17' },
      { texto: 'O amor jamais acaba.', ref: '1 Coríntios 13:8' },
      { texto: 'O Senhor é a minha luz e a minha salvação.', ref: 'Salmos 27:1' },
      { texto: 'Entrega o teu caminho ao Senhor; confia nele.', ref: 'Salmos 37:5' },
      { texto: 'Para Deus tudo é possível.', ref: 'Mateus 19:26' },
      { texto: 'Alegrai-vos sempre no Senhor.', ref: 'Filipenses 4:4' },
      { texto: 'Andamos por fé e não pelo que vemos.', ref: '2 Coríntios 5:7' },
      { texto: 'Lâmpada para os meus pés é a tua palavra.', ref: 'Salmos 119:105' }
    ];
    this.receberPalavra = this.receberPalavra.bind(this);
  }

  receberPalavra() {
    let numero = Math.floor(Math.random() * this.frases.length);
    while (numero === this.state.indice) {
      numero = Math.floor(Math.random() * this.frases.length);
    }
  
    this.setState({
      frase: this.frases[numero].texto,
      referencia: this.frases[numero].ref,
      img: require('./src/biblia_aberta.png'),
      indice: numero
    });
  }

  render() {
    return (
      <ScrollView style={styles.fundo} contentContainerStyle={styles.container}>
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Conexão Divina</Text>
          <Text style={styles.subtitulo}>Uma palavra para o seu coração</Text>
          <Image source={this.state.img} style={styles.imagem} />
          <View style={styles.mensagem}>
            <Text style={styles.frase}>{this.state.frase}</Text>
            <Text style={styles.referencia}>{this.state.referencia}</Text>
          </View>
          <TouchableOpacity style={styles.botao} onPress={this.receberPalavra}>
            <Text style={styles.textoBotao}>Receber uma palavra</Text>
          </TouchableOpacity>
          <Text style={styles.rodape}>Fé • Esperança • Amor</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: '#F9F3E8' },
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 25, paddingVertical: 55 },
  conteudo: { width: '100%', maxWidth: 420, alignItems: 'center' },
  titulo: { fontSize: 32, fontWeight: 'bold', color: '#785C32', textAlign: 'center' },
  subtitulo: { fontSize: 16, color: '#8E795B', textAlign: 'center', marginTop: 8 },
  
  imagem: {
  width: '100%',
  maxWidth: 300,
  height: 300,
  resizeMode: 'contain',
  marginVertical: 15
},
  mensagem: { width: '100%', minHeight: 125, justifyContent: 'center', marginBottom: 24 },
  frase: { fontSize: 21, color: '#6C5436', textAlign: 'center', fontStyle: 'italic' },
  referencia: { fontSize: 15, color: '#785C32', textAlign: 'center', marginTop: 12 },
  botao: { backgroundColor: '#94713D', padding: 16, borderRadius: 12, width: '100%', alignItems: 'center' },
  textoBotao: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  rodape: { marginTop: 25, fontSize: 14, color: '#785C32' }
});
export default App;
