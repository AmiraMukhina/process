import React, {useState, useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
import {Link, useNavigate} from "react-router-dom";
import {Form, FormGroup, Input, Button} from "reactstrap";
// import userService from '../services/userService';

export const AddUser = () => {
    const [name, setName] = useState('');
    const {addUser} = useContext(GlobalContext);
    const history = useNavigate();

// const createUser = async (requestData) => {
//     await userService.create(requestData)
// };


    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name
        }
        addUser(newUser);
        history.push("/");
    }

    const onChange = (e) => {
        setName(e.target.value);
    }

    return (
        <Form className='d-flex align-items-center justify-content-center m-4' onSubmit={onSubmit}>
            <FormGroup>
                <Input
                    type="text"
                    value={name}
                    onChange={onChange}
                    name="name"
                    placeholder="Enter user"
                    required="required"></Input>
            </FormGroup>
            <Button type="submit" className='mb-3'>Submit</Button>
            <Link to="/" className="btn btn-danger ml-2 mb-3">Cancel</Link>
        </Form>
    )
}