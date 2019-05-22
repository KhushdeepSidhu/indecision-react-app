import React from 'react'
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

export default class Indecision extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState ( () => ( { options: [] } ) ) 
    }

    handleDeleteOption = ( option ) => {
        
        this.setState ( ( prevState ) => ( {
            options: prevState.options.filter ( ( individualOption ) => individualOption !== option )
        } ) )

    }

    handlePick = () => {
        const randomNum = Math.floor ( Math.random () * this.state.options.length )
        const option = this.state.options [ randomNum ]
        this.setState ( () => ( { 
            selectedOption: option
        } ) )
    }

    handleAddOption = ( option ) => {

        if ( !option ) {
            return 'Enter valid value to add an item.'
        } else if ( this.state.options.indexOf ( option ) > -1 ) {
            return 'This option already exists.'
        }

        this.setState ( ( prevState ) => ( {
            options: prevState.options.concat ( option )
        } ) )

    }

    handleModal = () => {
        this.setState ( () => ( {
            selectedOption: undefined
        } ) )
    }

    componentDidMount () {

        try {
            const json = localStorage.getItem ( 'options' )
            const options = JSON.parse ( json )
            if ( options ) {
                this.setState ( () => ( { options } ) )
            }
        } catch ( error ) {
            // Do nothing
        }

    }

    componentDidUpdate ( prevProps, prevState ) {

        if ( prevState.options.length !== this.state.options.length ) {
            localStorage.setItem ( 'options', JSON.stringify ( this.state.options ) )
        }

    }

    render () {
        const subTitle = 'Put your life in the hands of a computer.'
        return (
            <div>
                <Header subTitle = { subTitle } />
                <Action 
                    hasOptions = { this.state.options.length > 0 }
                    handlePick = { this.handlePick } 
                />
                <Options 
                    options = { this.state.options } 
                    handleDeleteOptions = { this.handleDeleteOptions } 
                    handleDeleteOption = { this.handleDeleteOption }
                />
                <AddOption 
                    handleAddOption = { this.handleAddOption }
                />
                <OptionModal
                    selectedOption = { this.state.selectedOption }
                    handleModal = { this.handleModal }
                />
            </div>
        )
    }

}