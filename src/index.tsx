import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TODOApp from './App';

//ReactDOM.render(<App />, document.getElementById('root'));


class Clock extends React.Component 
{
    constructor(props : any)
    {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount()
    {
        this.timerID = setInterval(
            () => {
                this.tick()
            },
            100
        );
    }

    componentWillUnmount()
    {
        clearInterval(this.timerID);
    }

    tick()
    {
        this.setState({
            date: new Date()
        });
    }

    render() 
    {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class ToggleButton extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render()
    {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON": "OFF"}
            </button>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

function Greeting(props)
{
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn)
    {
        return <UserGreeting><App /></UserGreeting>;
    }
    return <GuestGreeting><App /></GuestGreeting>;
}

ReactDOM.render(
    <TODOApp/>,
    document.getElementById("root")
);