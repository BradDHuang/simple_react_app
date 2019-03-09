const initState = { cateList: [], err: null, cateItems: null, title: "" };

export default (state = initState, action) => {
    console.log('ap', action.payload );
    switch (action.type) {
        case 'FETCH_LIST': 
            return { ...state, cateList: action.payload };
        default:
            return state;
    }
};

