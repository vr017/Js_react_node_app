import React, { Component } from 'react';
import './App.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users:[],            
        }
    }

    componentDidMount() {
        //mi api
        fetch('http://localhost:3000/users')   
            .then(response => response.json())
            .then(json => {
                this.setState({ 
                    users: [...this.state.users, ...json.data],                    
                })
            });
        }

    renderUsers() {
        if (this.state.users.length <= 0){
            return <div>Loading... </div>
        }
        else { //console.log(this.state.users);
            return this.state.users.map((value, key, array) => {
                return <div key={value.key}> 
                        <li>
                            Value: {value.key} || 
                            Status: {value.folder} || 
                            From: {value.from} || 
                            To: {value.to} || 
                            Duration: {value.length}
                        </li>
                    </div>;
            });
        }    
    }
    render(){
         return(
            <div className="App">
                {this.renderUsers()}
            </div>
        );      
    }
}

export default App;
