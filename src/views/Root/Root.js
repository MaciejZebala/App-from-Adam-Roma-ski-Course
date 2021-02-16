import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ListWrapper from '../../components/ListWrapper/ListWrapper'
import Form from '../../components/Form/Form'
import TwittersView from '../TwittersView/TwittersView'
import NotesView from '../NotesView/NotesView'
import ArticlesView from '../ArticlesView/ArticlesView'
import Header from '../../components/Header/Header'
import Modal from "../../components/Modal/Modal";
import './index.css'

const initialStateItems = [
    {
        image: 'https://raw.githubusercontent.com/eduwebpl/kurs-react-od-podstaw/03.10-finish/03/src/assets/images/danabramov.jpg',
        name: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
]
class Root extends Component {

  state = {
    items: [...initialStateItems],
    isOpen: false,
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

  openModal = () => {
    this.setState({
      isOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    const {isOpen} = this.state

    return (
      <BrowserRouter>
        <>
          <Header openModalFn={this.openModal}/>
          <Switch>
            <Route exact path="/" component={TwittersView}/>
            <Route path="/articles" component={ArticlesView}/>
            <Route path="/notes" component={NotesView}/>
          </Switch>
          {isOpen && <Modal closeModalFn={this.closeModal}/>}
        </>
      </BrowserRouter>
    )
  }
}


export default Root;
