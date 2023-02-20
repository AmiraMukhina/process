import {selector} from 'recoil';
import userService from '../services/userService';

export const userQuery = selector({
    key: 'userQuery',
    get: async ({get}) => {
        return await userService.getAll();
    }
});