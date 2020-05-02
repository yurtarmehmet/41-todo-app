import {ADD_TODO, TOGGLE_TODO, SHOW_NOTIFICATION, HIDE_NOTIFICATION} from "./types";

export const addTodo = (content, id) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            payload: content
        });
        dispatch(showNotification(`${content} eklendi`));
    }
};

export const toggleTodo = (id) => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: id
        });
        dispatch(showNotification("TOGGLE YAPILDI"));
    }
};


export const showNotification = (content) => {
    return (dispatch) => {
        dispatch({
            type: SHOW_NOTIFICATION,
            payload: content
        });
        setTimeout(() => {
            dispatch(hideNotification());
        },2000)
    }

};

export const hideNotification = () => {
    return {
        type: HIDE_NOTIFICATION
    }
};