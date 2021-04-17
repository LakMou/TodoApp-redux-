import React from 'react';
import {useSelector ,useDispatch, connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodoAction} from '../Redux/Actions/addTodoAction'

const AddTodo = ({addTodo}) =>{
    const handleAddTodo =(e) =>{
        if (e.key === 'Enter') {
            addTodo({workName: e.target.value})
            e.target.value =null ;}
        
    }
            return (
                <input 
                        type="text"
                        className="search"
                        placeholder="Enter your work here"
                        onKeyDown={event => handleAddTodo(event)}
                        />
            )
}

const mapDispatchToProps =() =>dispatch =>{
        return bindActionCreators ({addTodo :addTodoAction}, dispatch)

}
export default connect(null,mapDispatchToProps)(AddTodo)