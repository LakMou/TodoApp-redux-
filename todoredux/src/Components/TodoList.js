// import React from 'react';
// import ToDo from './ToDo';
// import {connect} from 'react-redux'


// const TodoList =({items}) =>{

//     return (<div className="To-do-list">
//         <span>
//             {
//                 items.map((element,index) => { return  <ToDo item={element} key={index} index={index}/>} )
//             }
//         </span>
//     </div>
        
//     )
// }
// const mapStateToProps = ()=> state=>{
//     return {
//         items:state.TodoList
//     }
// }

// export default connect(mapStateToProps,null)(TodoList);
import React from 'react'
import ToDo from './ToDo'
import { connect } from 'react-redux'
const TodoList = ({items}) => {
        return (
            <div className="to-do-list">
                <span>
                    {
                        items.map((element, index) => {
                            return <ToDo item={element} key={index} index={index} />;
                        })
                    }
                </span>
            </div>
        )
}
const mapStateToProps = () => state => {
    return {
        items: state.todoList
    };
};
export default connect(mapStateToProps, null)(TodoList);