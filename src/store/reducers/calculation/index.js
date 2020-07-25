import INITIAL_STATE from './initialState'

function calculation(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'TOGGLE_PARAMS':
            return {
                ...state,
                number1: action.number1,
                number2: action.number2,
                operation: action.operation,
                result: action.result
            };
        default:
            return state;
    }
}

export default calculation