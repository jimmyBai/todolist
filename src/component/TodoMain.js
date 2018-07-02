
import React from 'react';

import TodoItem from './TodoItem';

export default  class TodoMain extends React.Component{

    constructor(props){

        super(props);

        this.state = {

 

        };

    }

    componentDidMount(){

 

    }

    render() {

         if(Number(this.props.todos.length) === 0){

             return(

                 <div className="todo-empty">恭喜您，目前没有待办事项！</div>

             )

         }else{

             return (

                 <ul className="todo-main">

                     {

                         this.props.todos.map((todo, index) => {

                             return <TodoItem text={todo.text} isDone={todo.isDone} index = {index} {...this.props} key={index} />

                         })

                     }

                     <li className="item">

                         <label>

                           <span><strong>{this.props.todoCount}</strong>总数/<strong>{this.props.todoDoneCount}</strong>已完成</span>

                         </label>

                     </li>

                 </ul>

             )

         }

    }

}