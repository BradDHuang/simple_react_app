import axios from 'axios';

export const fetchList = () => async dispatch => {
    const res = await axios.get("https://stream-restaurant-menu-svc.herokuapp.com/category");
    dispatch({
        type: 'FETCH_LIST',
        payload: res.data
    });
};

export const fetchCate = (cate_short_name) => async dispatch => {
    const res = await axios.get(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${cate_short_name}`);
    dispatch({
        type: 'FETCH_CATE',
        payload: res.data,
        title: cate_short_name
    });
};

