const initState = { cateList: [], err: null, cateItems: null, title: "" };

export default (state = initState, action) => {
    console.log('a.p', action.payload );
    switch (action.type) {
        case 'FETCH_LIST': 
            return { ...state, cateList: action.payload };
        case 'FETCH_CATE':
            return { ...state, cateItems: action.payload, title: action.title };
        default:
            return state;
    }
};

