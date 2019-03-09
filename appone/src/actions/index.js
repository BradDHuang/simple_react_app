import axios from 'axios';

export const fetchList = () => async dispatch => {
    const res = await axios.get("https://stream-restaurant-menu-svc.herokuapp.com/category");
    // console.log(res, res2)
    // const res2 = await axios.get("https://stream-restaurant-menu-svc.herokuapp.com/category");
    // console.log(res, res2)
    dispatch({
        type: 'FETCH_LIST',
        payload: res.data
    });
};

