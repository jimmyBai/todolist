
import React from 'react';

export default class TodoItem extends React.Component{

    constructor(props){

        super(props);

        this.state = {

           isShow: false,

        };

    }

    componentDidMount(){

 

    }

    handlerChange =()=>{        //多选框处理事件，选中则表示已处理

        let isDone = !this.props.isDone;

        this.props.changeTodoState(this.props.index, isDone);

    }

    handlerDelete =()=>{         //删除事件

        this.props.deleteTodo(this.props.index);

    }

    handlerMouseOver =()=>{        //鼠标移入事件

        this.setState({isShow:true});

    }

    handlerMouseOut =() =>{          //鼠标移出事件

        this.setState({isShow:false});

    }

    render(){

        let className = this.props.isDone? 'task-done': '';

        return(

            <li className={this.props.isDone?"list-group-item-success item":"item"} onMouseOver={this.handlerMouseOver} onMouseOut={this.handlerMouseOut}>

                 <label>

                     <input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange} className="pull-left"/>

                     <span className={className}>{this.props.text}</span>

                 </label>

                <div className="pull-right">

                    <button type="button" className={ this.state.isShow?"btn btn-xs":"btn btn-xs close"} onClick={this.handlerDelete}>删除</button>

                </div>

            </li>

        )

    }

}