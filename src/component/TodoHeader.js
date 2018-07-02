
import React from 'react';

class TodoHeader extends React.Component{

    constructor(props){

        super(props);

        this.state = {

 

        };

        this.handlerKeyUp = this.handlerKeyUp.bind(this); //绑定键盘事件，也可以使用箭头函数

    }

    componentDidMount(){

 

    }

    handlerKeyUp(e){

        //鼠标回车事件

        if(Number(e.keyCode) === 13){

            //键盘敲击回车时间

            let value = e.target.value; //获取输入框中输入的值

            if(!value) return false; //如果输入框没有输入，则返回false
            let newTodoItem = {

                text: value,

                isDone: false

            };//将输入的值保存在一个对象中

            e.target.value = '';//将输入框的值置空

            this.props.addTodo(newTodoItem) //调用父组件的方法，通过this.props调用父控件的方法，将输入的值传递给父控件，在父控件中对state的值进行修改，从而重新渲染页面。

        }

    }

    render() {

        return(

            <div className="todo-header">

                <h1 className="text-center">React Todo</h1>

                <div className="form-horizontal">

                    <div className="form-group">

                    <label className="col-md-2 control-label">Task</label>

                    <div className="col-md-10">

                      <input onKeyUp={this.handlerKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" className="form-control"/> 

                    </div>

                    </div>

                </div>

            </div>

        )

    }

};

export default TodoHeader;