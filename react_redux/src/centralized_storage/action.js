import axios from "axios"
export const FETCHUSERS = "FETCHUSERS"

export const fetchUsers = () => async(dispatch) => {
    const fetchUsersData = await axios('https://jsonplaceholder.typicode.com/users')
    const response = await fetchUsersData.data
    dispatch({
        type: FETCHUSERS,
        payload: response
    })
}

