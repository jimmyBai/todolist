
import React from 'react';

export default class TodoFooter extends React.Component{

    constructor(props){

        super(props);

        this.state = {

 

        };

    }

    componentDidMount(){

 

    }

    handlerSelectAll =(e) =>{      //全选事件，调用父组件的全选事件

      this.props.changeTodoState(null, e.target.checked, true);

    }

    handlerDeleteDone = () => {          //清除已选任务操作，调用父组件的事件

          this.props.clearDone();

    }

    render(){

        let count = this.props.todoCount;

        if(count > 0){

            return(

                <div className="todo-footer">

                    <label>

                        <input type="checkbox" checked={this.props.isAllChecked} onChange={this.handlerSelectAll} />全选

                    </label>

                    <div className="clearTask">

                        <button className="btn" onClick={this.handlerDeleteDone}>清除已完成任务</button>

                    </div>

                </div>

            )

        }else{

            return (

                <div className="todo-footer"></div>

                )

        }

    }

}