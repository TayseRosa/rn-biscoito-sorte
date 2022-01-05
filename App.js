import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'

class Botao extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.styles = StyleSheet.create({
      botao: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor: props.color,
        backgroundColor: 'transparent',
        borderRadius: 25
      },
      botaoArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      botaoText: {
        color: props.color,
        fontSize: 14,
        fontWeight: 'bold'
      }
    })
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default class PrimeiroProjeto extends Component {
  constructor(props) {
    super(props)
    this.state = { texto: '' }

    this.frases = [
      'Acorde para viver o melhor da sua vida hoje',
      'Mude a si mesmo, e todo o mundo mundo mudará ao seu redor',
      'Acorde para realizar suas metas mais importantes e as menos importantes também - afinal elas são suas',
      'E tudo que não é abundância em sua vida é disfunção, e toda disfunção deve e merece ser tratada.',
      'Zona de conforto é a combinação de várias mentiras paralisantes com prazo de validade vencido.',
      'Tem poder quem age, e mais poder ainda quem age certo!',
      'Você é o único responsável pela vida que tem levado'
    ]

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this)
  }

  quebrarBiscoito() {
    let s = this.state

    let r = Math.floor(Math.random() * this.frases.length)

    s.texto = this.frases[r]
    this.setState(s)
  }

  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.titulo}> Frases motivacionais - Paulo Vieira </Text>

        <Image source={require('./images/biscoito.jpg')} />

        <Text style={styles.texto}>"{this.state.texto}"</Text>

        <Botao
          color="#B59619"
          text="Clique aqui e veja a frase de hoje"
          onPress={this.quebrarBiscoito}
        />

        <Text style={{ color: '#fff', marginTop: 100 }}>
          Developed by Tayse Rosa
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 20,
    color: 'black',
    margin: 30,
    textAlign: 'center'
  },
  texto: {
    fontSize: 17,
    color: '#B59619',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  }
})
