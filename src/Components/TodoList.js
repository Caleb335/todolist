import React, { Component } from "react";
import TodoItems from "../Components/TodoItems";
import "../index.css";
class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem(e) {
        if(this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }

        // console.log(this.state.items);

        e.preventDefault(); //Preventing the browser from reloading all over again, therefore loosing our data
    }
    deleteItem(key) {
        let filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });

        console.log(filteredItems);
    }
    render() {
        return (
            <div className="todoListContainer">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="What do you wanna do?"></input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} delete={this.deleteItem}/>
            </div>
        );
    }
}

export default TodoList;
