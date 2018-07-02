import React from 'react';
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain';
import TodoFooter from './TodoFooter';

class App extends React.Component{
    constructor(props){
        super(props);
        this.db = localStorage; //定义一个localStorage容易
        let todos = JSON.parse(this.db.getItem('todos')) || []; //通过键todos，来获取localStorage容器中的值
        if(todos.length>0){
            let todoArray=[];
            todos.forEach(item=>{
                todoArray.push(item)   
            })
            this.state = {
                todos: todoArray,
                isAllChecked: false //用来表示是否全选
    
            };
        }else{
            this.state = {
                todos: [],
                isAllChecked: false //用来表示是否全选
    
            };
        }
    }

    componentDidMount(){

       // let todos = eval('(' + this.state.todos + ')');

       // if(todos.length > 0){

       //     this.setState({todos: todos});

       // }

    }

    allChecked() {         //全选函数，供子组件调用

        let isAllChecked = false;        // every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。<br>

        if(this.state.todos.every((todo) => todo.isDone)){

            isAllChecked = true;

        }

        this.setState({

            todos: this.state.todos,

            isAllChecked: isAllChecked

        })

    }

    clearDone = () =>{      //清除选中的项目

        let todos = this.state.todos.filter(todo => !todo.isDone); //过滤没有选中的项目

        this.setState({

            todos: todos,

            isAllChecked: false,

        });

        this.db.setItem('todos', JSON.stringify(todos)); //修改localStorage中键todos的值，以json数组的形式存储，方便后续取出操作

    }

    addTodo =(todoItem) =>{         //添加项目操作

         this.state.todos.push(todoItem);//todo列表 ，向todos数组中插入一条记录

         this.db.setItem('todos', JSON.stringify(this.state.todos)); //将所有的记录再次保存如localStorage中

         this.allChecked();

    }

    deleteTodo = (index) =>{       //删除一个项目

       this.state.todos.splice(index, 1);//通过传过来的索引值，删除数组中的一条记录

       this.setState({todos: this.state.todos}); //

       this.db.setItem('todos', JSON.stringify(this.state.todos));//将更新的todos数组，插入到localStorage中

    }

    changeTodoState = (index, isDone, isChangeAll = false) => {

        // 改变任务状态，传递给TodoItem和Footer组件的方法

        if(isChangeAll){

             this.setState({

                 todos: this.state.todos.map( (todo) =>{

                     todo.isDone = isDone;

                     return todo;

                 }),isAllChecked: isDone

             })

        }else{
            this.state.todos[index].setState({isDone:isDone})
            //this.state.todos[index].isDone = isDone;
            this.allChecked();

        }

        this.db.setItem('todos', JSON.stringify(this.state.todos));

    }

    render(){

        let info = {

            isAllChecked: this.state.isAllChecked,

            todoCount: this.state.todos.length || 0,

            todoDoneCount: (this.state.todos && this.state.todos.filter((todo) => todo.isDone)).length || 0

        };

        return(

          <div className="todo-wrap">

                <TodoHeader addTodo={this.addTodo} name="add" />

                <TodoMain todos={this.state.todos} deleteTodo={this.deleteTodo} changeTodoState={this.changeTodoState} {...info}/>

                <TodoFooter {...info} changeTodoState={this.changeTodoState} clearDone={this.clearDone} />

          </div>

        );

    }

}

export default App;