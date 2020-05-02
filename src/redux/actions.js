import {ADD_TODO, TOGGLE_TODO} from "./types";

export const addTodo = (content, id) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            payload: content
        });
        dispatch({
            type: "SHOW_NOTIFICATION",
            payload: `${content} eklendi`
        });
        setTimeout(() => {
            dispatch({
                type: "HIDE_NOTIFICATION"
            })
        }, 2000);
    }
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
};
