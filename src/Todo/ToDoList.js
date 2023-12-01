import React, { Component } from "react";


class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            items: [],

        };
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }
    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput],
        });
    }

    deleteTodo(event){
        event.preventDefault();
        const array = [...this.state.items];
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array,
        });
    }

    renderTodos(){
        return this.state.items.map((item) => {
            return(
                <div key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this)}>X</button>
                </div>
            );
        });
    }

    render() {
        return(
             <div className="container">
                <h1>TodoList</h1>
                <form>
                    <input 
                        value={this.state.userInput} 
                        placeholder="Entrez une tache"
                        onChange={this.onChange.bind(this)}>                        
                    </input>
                    <button 
                        type="submit"
                        onClick={this.addTodo.bind(this)}>Ajouter
                    </button>
                    <div className="list">
                        {this.renderTodos()}
                    </div>
                </form>
            </div>
            
        );
    }
}

export default TodoList;