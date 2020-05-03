import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTodo} from "../redux/actions";

class TodoAppAdd extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: "",
            description: "",
            completed: false,
            priority: "high"
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={(e) => {
                    /// formun default davranisi olan sayfa yenileme ve post etmeyi engelliyorum
                    e.preventDefault();
                    // statete tuttugum inputu son degerini aliyorum
                    const newContent = this.state.value;
                    const newTodoObject = {
                        title: this.state.title,
                        description: this.state.description,
                        completed: this.state.completed,
                        priority: this.state.priority
                    };
                    this.props.addTodo(newTodoObject);
                    this.setState({
                        title: "",
                        description: "",
                        completed: false,
                        priority: "high"
                    });
                }}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Todo Title Giriniz"
                            value={this.state.title}
                            onChange={(e) => {
                                this.setState({
                                    title: e.target.value
                                })
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                               placeholder="Todo Description Giriniz"
                               value={this.state.description}
                               onChange={(e) => {
                                   this.setState({
                                       description: e.target.value
                                   })
                               }}
                        />
                    </div>
                    <div className="form-group">
                        <input type="radio"
                               name="completed"
                               id="completed-todo-field"
                               value={this.state.completed}
                               onChange={(e) => {
                                   this.setState({
                                       completed: e.target.value
                                   })
                               }}
                        />
                        <label htmlFor="completed-todo-field">Completed</label>
                    </div>
                    <div className="form-group">
                        <input type="radio"
                               name="completed"
                               id="uncompleted-todo-field"
                               value={this.state.completed}
                               onChange={(e) => {
                                   this.setState({
                                       completed: e.target.value
                                   })
                               }}
                        />
                        <label htmlFor="uncompleted-todo-field">Not Completed</label>
                    </div>

                    <div className="form-group">
                        <select value={this.state.priority} onChange={(e) => {
                            this.setState({
                                priority: e.target.value
                            })
                        }}>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>


                    <div className="form-group">
                        <button type="submit">Todo Ekle</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addTodo: addTodo
};

export default connect(null, mapDispatchToProps)(TodoAppAdd);