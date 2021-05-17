
import Axios from 'axios';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import AuthenticationService from '../Login/AuthenticationService';
import moment from 'moment';

class TodoApp extends Component {

    state = {
        todo: [],
        message: null
    }


    componentDidMount() {


        let name= AuthenticationService.getUserName()
        Axios.get(`http://localhost:8080/api/users/${name}/todos`).then(res => {




            this.setState({ todo: res.data });

        })
    }


    deleteTodoClicked=(id)=>{

        let name= AuthenticationService.getUserName()

        Axios.delete(`http://localhost:8080/api/users/${name}/todos/${id}`).then(res=>{


        this.setState({message:`Delete of todo ${id} Successful`})
        this.componentDidMount()    
        });


    }


    updateTodoClicked=(id)=>{

        this.props.history.push(`/todos/${id}`)


    }

    addTodoClick=()=>{

        this.props.history.push("/todos/-1");
    }




    render() {

      



        const row = this.state.todo.map(obj => {



            return (<tr key={obj.id}>

                <td>{obj.todo.description}</td>
                <td>{obj.todo.done?"Yes":"No"}</td>
                <td>{moment(obj.todo.targetDate).format('YYYY-MM-DD')}</td>
                <td><button className="btn btn-danger"  style={{color:"#303030",border:"none"}} onClick={()=>this.deleteTodoClicked(obj.id)}>✗</button></td>
                <td><button className="btn btn-warning" style={{color:"#303030",border:"none"}} onClick={()=>this.updateTodoClicked(obj.id)}>✔</button></td>
            </tr>);

        })




        return (

            <div style={{marginTop:"30px"}}>
                <div className="d-flex justify-content-center"> <h3 style={{color:"#0074B1"}}>LIST OF TODOS</h3>  </div>
        { this.state.message &&  <div className="alert alert-dark text-center">{this.state.message}</div> }
                <div className="container" style={{overflowY:"scroll",height:"300px"}}>

                    <Table striped bordered hover variant="dark">
                        <thead>

                            <tr>

                                <th>DESCRIPTION</th>
                                <th>DONE</th>
                                <th>DATE</th>
                                <th>DELETE</th>
                                <th>UPDATE</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        {row}
                        </tbody>
                    </Table>

                    

                </div>

                <button  onClick={this.addTodoClick} style={{width:"20%",marginLeft:"390px",marginTop:"50px"}}>Add</button>

            </div >
        );
    }
}

export default TodoApp;