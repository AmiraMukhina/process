import React, {useState, useContext, useEffect} from 'react';
import {GlobalContext} from "../context/GlobalState";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import userService from '../services/userService';

export const EditUser = (props) => {
    
    const params = useParams();
    const {users} = useContext(GlobalContext);
    const [selectedUser, setSelectedUser] = useState({id: '', name: ''})
    const history = useNavigate();
    const currentUserId = props.match.params.id;
    
    const editUser = async (requestData, id) => {
        await userService.update(requestData, id)
    };

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId);
        setSelectedUser(selectedUser);
    }, [currentUserId, users])

    const onChange = (e) => {
        setSelectedUser({
            ...selectedUser,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser);
        history.push("/")
    }

    return (
        <div>
                    <Form >
                        <FormGroup onSubmit={onSubmit}>
                            <Input type="text" value={selectedUser.name} onChange={onChange} name="name" placeholder="Enter user" required="required"></Input>
                        </FormGroup>
                        <Button type="submit">Edit Name</Button>
                        <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
                    </Form>
            </div>
    )
}