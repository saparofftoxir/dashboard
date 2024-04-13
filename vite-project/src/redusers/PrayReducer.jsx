export const initialState = {
    loading: false,
    success: false,
    error: ""
}
export const GetPrayReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return state = {
                loading: true,
                success: false,
                error: ""
            }
        case "SUCCESS":
            return state = {
                loading: false,
                success: true,
                error: ""
            }
        case "ERROR":
            return state = {
                loading: false,
                success: false,
                error: action.payload

            }
    }
}