import React, { Component } from 'react'
import Input from '../Input/Input'
import InputRadio from '../Input/InputRadio'
import styles from './Form.module.scss'
import Buttons from '../Buttons/Buttons'

const types = {
    twitter: 'twitter',
    article: 'article',
    note: 'note',
}

const description = {
    twitter: 'favorite Twitter account',
    article: 'Article',
    note: 'Note',
}

class Form extends Component {

    state = {
        activeOption: types.twitter,
    }

    handleRadioButtonChange = (type) => {
        this.setState({
            activeOption: type,
        })
    }

    render() {

        const { activeOption } = this.state

        return (
            <div className={styles.wrapper}>
                <h2>Add {description[activeOption]}</h2>
                <form className={styles.form} onSubmit={this.props.addItem} autoComplete="off">
                    <div className={styles.radioWrapper}>
                        <InputRadio
                            id={types.twitter}
                            type={'radio'}
                            label={types.twitter}
                            checked={activeOption === types.twitter}
                            onChange={() => this.handleRadioButtonChange(types.twitter)}
                        >
                            Twitter
                        </InputRadio>
                        <InputRadio
                            id={types.article}
                            type={'radio'}
                            label={types.article}
                            checked={activeOption === types.article}
                            onChange={() => this.handleRadioButtonChange(types.article)}
                        >
                            Article
                        </InputRadio>
                        <InputRadio
                            id={types.note}
                            type={'radio'}
                            label={types.note}
                            checked={activeOption === types.note}
                            onChange={() => this.handleRadioButtonChange(types.note)}
                        >
                            Note
                        </InputRadio>
                    </div>
                    <Input
                        name="name"
                        label={activeOption === types.twitter ? 'Twitter Name' : 'Title'}
                        required
                        maxLength={30}
                    />
                    {activeOption !== types.note ? <Input
                        name="link"
                        required
                        label={activeOption === types.twitter ? 'Twitter Link' : 'Link'}
                    /> : null}
                    {activeOption === types.twitter ? <Input
                        name="image"
                        label="Image Link"
                    /> : null}
                    <Input
                        tag="textarea"
                        required
                        name="description"
                        label="Description"
                    />
                    <Buttons>Add new item</Buttons>
                </form>
            </div>
        )
    }
}


export default Form