import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Form, Input, Button} from "reactstrap";
import userService from '../services/userService';
import {userQuery} from '../stores/userStore';
import {useRecoilValueLoadable} from 'recoil';

export const EditUser = (props) => {

    const currentUserId = props.id;
    const loadingUsers = useRecoilValueLoadable(userQuery);
    const users = loadingUsers.contents;
    const [selectedUser, setSelectedUser] = useState({id: '', name: ''});

    const editUser = async (requestData, id) => {
        await userService.update(requestData, id)
    };

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId);
        setSelectedUser(selectedUser);
    }, [currentUserId, users]);

    const onChangeName = (e) => {
        setSelectedUser({
            ...selectedUser,
            [e.target.name]: e.target.value
        })
    };

    // const onChangeUsername = (e) => {
    //     setSelectedUser({
    //         ...selectedUser,
    //         [e.target.username]: e.target.value
    //     })
    // };

    const onSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser, selectedUser.id);
    };

    return (
        <div>
        <div>
                    <Form onSubmit={onSubmit}>
                            <Input 
                            type="text" 
                            value={selectedUser.name}
                            onChange={onChangeName} 
                            name="name" 
                            placeholder="Enter user" 
                            required="required"></Input>
                              {/* <Input 
                            type="text" 
                            value={selectedUser.username}
                            onChange={onChangeUsername} 
                            name="name" 
                            placeholder="Enter user" 
                            required="required"></Input> */}
                                  {/* <Input 
                            type="text" 
                            value={selectedUser.email}
                            onChange={onChange} 
                            name="name" 
                            placeholder="Enter user" 
                            required="required"></Input>
                                      <Input 
                            type="text" 
                            value={selectedUser.phone}
                            onChange={onChange} 
                            name="name" 
                            placeholder="Enter user" 
                            required="required"></Input>
                                              <Input 
                            type="text" 
                            value={selectedUser.website}
                            onChange={onChange} 
                            name="name" 
                            placeholder="Enter user" 
                            required="required"></Input> */}
                        <Button type="submit">Save</Button>
                        <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
                    </Form>
            </div>
            </div>
    )
}
