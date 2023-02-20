import React, {useState} from 'react';
import {ListGroup, ListGroupItem, Button} from "reactstrap";
import {userQuery} from '../stores/userStore';
import {useRecoilValueLoadable} from 'recoil';
import userService from '../services/userService';
import {EditUser} from './EditUser';

function UserList() {

    const [hideEditName, setHideEditName] = useState(true);
    // const [hideEditUsername, setHideEditUsername] = useState(true);

    const loadingUsers = useRecoilValueLoadable(userQuery);
    const persons = loadingUsers.contents;

    const removeUser = async (id) => {
        await userService.delete(id)
    };

    return (loadingUsers.state === 'hasValue' && (
        <ListGroup className="m-4">
            {
                persons.length > 0
                    ? (<> {
                        persons.map(user => (
                            <ListGroupItem
                                className="card d-flex align-items-start justify-content-between m-2 p-3 border"
                                key={user.id}>

                                <strong>{user.name}</strong>
                                <div className="ml-auto"></div>
                                <p>Username:
                                    <strong>
                                        {user.username}</strong>
                                </p>
                                <p>Email:
                                    <strong>{user.email}</strong>
                                </p>
                                <p>Phone:<strong>
                                        {user.phone}</strong>
                                </p>
                                <p>Website:
                                    <strong>{user.website}</strong>
                                </p>

                                <div className="ml-auto">
                                    <Button onClick={() => setHideEditName(false)} color="warning">Edit</Button>

                                    <div
                                        className={`lightbox ${hideEditName
                                            ? "hide-lightbox"
                                            : ""}`}>
                                        <EditUser id={user.id}/>
                                    </div>
                                    <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>

                                </div>
                            </ListGroupItem>
                        ))
                    } 
                    </>
    ) : (
        <h4 className="text-center">No Users</h4 >)
            }
        </ListGroup>
    ))
}

export default UserList;
