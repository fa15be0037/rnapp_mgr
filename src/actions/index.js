import { Actions } from "react-native-router-flux";

export const loginUser = ({ email, password })
=> {
return dispatch => {
firebase
.auth()
.signInWithEmailAndPassword(email,
password)
.then(user => console.log(user));
};
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
    });
    Actions.employeeList();
    };

export const loginUser = ({ email, password }) => {
    return dispatch => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => this.loginUserSuccess(dispatch, user))
    .catch(() => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => this.loginUserSuccess(dispatch, user));
    });
    };
    };