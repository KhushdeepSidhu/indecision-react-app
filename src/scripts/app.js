const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: [ 'One', 'Two' ]
}

const template = (
    <div>
        <h1>Indecision App</h1>
        { app.subtitle && <p>{app.subtitle}</p> }
        <p>{ app.options.length > 0 ? 'Here are your options' : 'No options to show' }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

const user = {
    name: 'Khushdeep',
    age: 33,
    location: 'Vaudreuil-Dorion'
}

const getLocation = ( location ) => {
    if ( location ) {
        return <p>Location: {location}</p>
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        { ( user.age && user.age >= 18 ) && <p>Age: {user.age}</p> }
        { user.location && <p>Location: {user.location}</p> }
    </div>
)
    

const approot = document.getElementById ( 'app' )

ReactDOM.render ( template, approot )