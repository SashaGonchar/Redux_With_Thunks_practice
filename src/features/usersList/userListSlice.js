const initialState = {
    users: [],
    loading: false,
    error: null,
};

export default function userListReducer(state = initialState, action) {
    switch (action.type) {
        case "userList/addUser": {
            return {...state, users: [...state.users, action.payload]};
        }

        case "userList/deleteUser": {
            return {
                ...state, users: state.users.filter((user) => user.id !== action.payload)
            }
        }

        default: {
            return state;
        }
    }

}