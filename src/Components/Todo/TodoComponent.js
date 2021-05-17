import moment from 'moment';
import React, { Component } from 'react'

import { Formik, Form, Field } from 'formik';
import Axios from 'axios';
import AuthenticationService from '../Login/AuthenticationService';
import Switch from "react-switch";


class TodoComponent extends Component {


    state = {

        id: this.props.match.params.id,
        description: '',
        targetDate: '',
        checked: false
    }

    componentDidMount() {



        if (this.state.id === "-1") {
            console.log("the id is" + this.state.id)
            return
        }






        let name = AuthenticationService.getUserName()
        let id = this.state.id;

        Axios.get(`http://localhost:8080/api/users/${name}/todos/${id}`).then(res => {

            //console.log(res.data.todo.description);

            this.setState({

                description: res.data.todo.description,
                targetDate: moment(res.data.todo.targetDate).format('YYYY-MM-DD'),
                checked: res.data.todo.done
            })



        })


    }

    handleChange = (checked) => {


        this.setState({ checked });


    }

    onSubmit = (values) => {

        if (this.state.id !== -1) {

            let data = {

                id: this.state.id,

                todo: {

                    description: values.description,
                    done: values.checked,
                    targetDate: values.targetDate
                }
            }



            Axios.put(`http://localhost:8080/api/users/${AuthenticationService.getUserName()}/todos/${this.state.id}`, data).then(() => {

                this.props.history.push('/todos');

            });

        }

        else {

            let data = {

                todo: {

                    description: values.description,
                    done: values.checked,
                    targetDate: values.targetDate
                }
            }



            Axios.post(`http://localhost:8080/api/users/${AuthenticationService.getUserName()}/todos`, data).then(() => {

                this.props.history.push('/todos');

            });

        }




    }

    render() {



        let description = this.state.description

        let targetDate = this.state.targetDate

        let checked = this.state.checked




        return (

            <>

                

                <div className="parent">

                    <div className="container">

                        <Formik initialValues={{
                            description, targetDate, checked
                        }}
                            enableReinitialize={true}
                            onSubmit={this.onSubmit}>

                            {

                                (props) => (
                                    <Form>


                                        <fieldset className="form-group">

                                            <label >Description</label>
                                            <Field className="text_123" type="text" name="description" /> 
                                        </fieldset>

                                        <fieldset className="form-group">

                                            <label>Have You Completed ?</label>
                                            <div style={{ margin: "auto" }}><Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} onColor="#0074b1" /> </div>
                                        </fieldset>

                                        <fieldset className="form-group">

                                            <label>Target Date</label>
                                            <Field className="text_123" type="date" name="targetDate" />
                                        </fieldset>
                                        <button type="submit">Save</button>
                                    </Form>





                                )
                            }
                        </Formik>


                    </div>

                </div>
            </>
        );
    }
}

export default TodoComponent;