export const ActionType = {
    SET_ERRORMSG: 'SET_ERRORMSG',
    CLEAR: 'CLEAR',
    SET_USER: 'SET_USER',
    SET_IS_LOADING: 'SET_IS_LOADING'
}

export const initialData = {
    user: {},
    errorMsg: null,
    isLoading: false
}

export const reducers = function (state, action) {
    Object.freeze(state)
    const data = { ...state }
    switch (action.type) {
        case ActionType.SET_USER:
            data.user = action.data.user
            return data
        case ActionType.SET_ERRORMSG:
            data.errorMsg = action.data.errorMsg
            return data
        case ActionType.SET_IS_LOADING:
            data.isLoading = action.data.isLoading
            return data
        case ActionType.CLEAR:
            return initialData
        default:
            return data
    }
}
