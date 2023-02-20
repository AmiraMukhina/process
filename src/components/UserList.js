import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {ListGroup, ListGroupItem, Button} from "reactstrap";
import {userQuery} from '../stores/userStore';
import {useRecoilValueLoadable} from 'recoil';
import userService from '../services/userService';
import  {EditUser}  from './EditUser';

// export const UserList = () => {
  function UserList(){

    const [hideLightbox, setHideLightbox] = useState(true);

    const loadingUsers = useRecoilValueLoadable(userQuery);
    const persons = loadingUsers.contents;

    const removeUser = async (id) => {
        await userService.delete(id)
    };

  return (
    loadingUsers.state === 'hasValue' && (   
    <ListGroup className="m-4">
    {persons.length > 0 ? (
      <>
        {persons.map(user => (
          <ListGroupItem className="d-flex align-items-center justify-content-between m-2 border" key={user.id}>
            <p>{user.name}</p>
            <div className="ml-auto">
              {/* <Link  to={`/users/${user.id}`}  color="warning" className="btn btn-warning mr-1">Edit</Link>
              <Link  to={`EditUser`}  color="warning" className="btn btn-warning mr-1">Edit</Link> */}
              <Button onClick={() => setHideLightbox(false)} color="warning">Edit</Button>
              <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
              <div className={`lightbox ${hideLightbox ? "hide-lightbox" : ""}`}>
    <EditUser/>
</div>
            </div>
          </ListGroupItem>
        ))}
      </>
    ) : (
        <h4 className="text-center">No Users</h4>
      )}
  </ListGroup> )
  )
}

export default UserList;