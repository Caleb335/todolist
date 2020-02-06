import React, { Component } from "react";
import TodoItems from "../Components/TodoItems";
class TodoList extends Component {
    constructor(prop) {
        super(prop);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
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

        console.log(this.state.items);

        e.preventDefault();
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
                <TodoItems entries={this.state.items} />
            </div>
        );
    }
}

export default TodoList;
