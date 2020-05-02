import React from 'react';
import {connect} from "react-redux";
import {toggleTodo} from "../redux/actions";
import styled from "styled-components";

const myColor = "rebeccapurple";

const StyledListItem = styled.div`
      background: ${myColor};
      color: ${props => props.textColor};
      padding: 10px;
      text-decoration: ${props => (props.completed ? "line-through" : "none")};
      
      &:hover {
        background: brown;
      }
`;


const TodoAppListItem = ({content, id, completed, toggleTodo}) => {
    return (
        <StyledListItem textColor="yellow" completed={completed} onClick={() => toggleTodo(id)}>
            {content}
        </StyledListItem>
    );
};

const mapDispatchToProps = {
    toggleTodo: toggleTodo
}

export default connect(null, mapDispatchToProps)(TodoAppListItem);