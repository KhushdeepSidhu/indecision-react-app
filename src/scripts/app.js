class Indecision extends React.Component {

    render () {
        const title = 'Indecision'
        const subTitle = 'Put your life in the hands of a computer.'
        const options = [ 'Thing One', 'Thing Two', 'Thing four' ]
        return (
            <div>
                <Header title = { title } subTitle = { subTitle } />
                <Action />
                <Options options = { options } />
                <AddOption />
            </div>
        )
    }

}

class Header extends React.Component {

    render () {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <h2>{ this.props.subTitle }</h2>
            </div>
        )
    }

}

class Action extends React.Component {

    handlePick () {
        alert ( 'handlePick' )
    }

    render () {
        return (
            <div>
                <button onClick = { this.handlePick }>What should I do?</button>
            </div>
        )
    }

}

class Option extends React.Component {

    render () {
        return (
            <div>
                <p>{ this.props.optionText }</p>
            </div>
        )
    }

}

class Options extends React.Component {

    constructor ( props ) {
        super ( props )
        this.handleRemoveAll = this.handleRemoveAll.bind ( this )
    }

    handleRemoveAll () {
        console.log ( this.props )
        alert ( 'handleRemoveAll' )
    }
 
    render () {
        return (
            <div>
                <button onClick = { this.handleRemoveAll }>Remove All</button>
                { this.props.options.map ( ( option ) => <Option key = { option } optionText = { option } /> ) }
            </div>
        )
    }

}

class AddOption extends React.Component {

    handleAddOption ( event ) {
        event.preventDefault ()
        const option = event.target.elements.option.value.trim()
        if ( option ) {
            alert ( option )
        }
    }

    render () {
        return (
            <div>
                <form onSubmit = { this.handleAddOption }>
                    <input type = "text" name = "option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }

}

ReactDOM.render ( <Indecision />, document.getElementById ( 'app' ) )




