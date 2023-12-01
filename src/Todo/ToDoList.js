import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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
                <div key={item} className="flex-it">
                    <div className="list-text">
                        <div>
                           <img className="img-ed-1" src="icon-book.png" alt="*"/> 
                        </div>
                        <div>
                             {item}
                        </div>
                    </div>
                    <div>
                        <button onClick={this.deleteTodo.bind(this)} className="button-img"><img className="img-ed" src="icon-delete.svg" alt="delete"/></button>
                    </div>
                    
                    <br />
                    <br />
                    
                </div>
            );
        });
    }

    render() {
        return(
             <div>
                <div className="container bg-light hn">
                <br />
                <br />
                <h1 className="d-flex justify-content-center">TodoList &#128187;</h1>
                <br />
                <div className="input-group">
                    <input 
                        className="form-control"
                        value={this.state.userInput} 
                        placeholder="Entrez une tache"
                        onChange={this.onChange.bind(this)}>                        
                    </input>
                    <div className="input-group-append">
                        <button 
                        className="btn btn-primary"
                        type="submit"
                        onClick={this.addTodo.bind(this)}>Ajouter
                        </button>
                    </div>

                </div>
                <br />
                <br/>
                <div>
                    {this.renderTodos()}
                    </div>
                </div>
            </div>
            
        );
    }
}

export default TodoList;