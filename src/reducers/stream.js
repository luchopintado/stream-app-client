const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'x':
            return {};
        default:
            return null;
    }
};
