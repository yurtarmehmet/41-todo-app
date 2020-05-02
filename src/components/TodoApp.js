import React from 'react';
import TodoAppHeader from "./TodoAppHeader";
import TodoAppList from "./TodoAppList";
import {connect} from "react-redux";

class TodoApp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <TodoAppHeader/>
                <TodoAppList />
                {
                    this.props.showNotification && <h3>{this.props.notificationText}</h3>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {showNotification, notificationText} = state.notificationsReducer;
    return {
        showNotification,
        notificationText
    }
};


export default connect(mapStateToProps)(TodoApp)