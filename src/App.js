import React, { Component } from 'react'
import ListWrapper from './components/ListWrapper/ListWrapper'
import Form from './components/Form/Form'

const initialStateItems = [
    {
        image: 'https://raw.githubusercontent.com/eduwebpl/kurs-react-od-podstaw/03.10-finish/03/src/assets/images/danabramov.jpg',
        name: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    // {
    //     image: 'https://raw.githubusercontent.com/eduwebpl/kurs-react-od-podstaw/03.10-finish/03/src/assets/images/kentcdodds.jpg',
    //     name: 'Ryan Florence',
    //     description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
    //     twitterLink: 'https://twitter.com/ryanflorence',
    // },
    // {
    //     image: 'https://raw.githubusercontent.com/eduwebpl/kurs-react-od-podstaw/03.10-finish/03/src/assets/images/michaeljackson.jpg',
    //     name: 'Michael Jackson',
    //     description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
    //     twitterLink: 'https://twitter.com/mjackson',
    // },
]
class App extends Component {

  state = {
    items: [...initialStateItems]
  }

  handleAddItem = e => {
    e.preventDefault()
    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    }
    this.setState(prevState =>({
      items: [...prevState.items, newItem]
    }))

    e.target.reset()
  }

  render() {
    return (
      <div className="wrapper">
        <ListWrapper items = {this.state.items}/>
        <Form addItem={this.handleAddItem}/>
      </div>
    )
  }
}


export default App;
