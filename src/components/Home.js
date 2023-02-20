import React from 'react';
// import {UserList} from './UserList';
import UserList from './UserList';
import {AddUser} from './AddUser';
import {RecoilRoot} from 'recoil';
// import { EditUser } from './EditUser';
import '../App.css';

function Home() {
    return (
        <div className="m-4">
            <RecoilRoot>
                <AddUser/>
                <UserList/>
                {/* <EditUser/> */}
            </RecoilRoot>
        </div>
    )
}

export default Home