
<<<<<<< HEAD
=======
{}
>>>>>>> 13e79ab1ab314998b82803a62220e4206531c6e1

let counterReducer = (state = { count: 5 }, action) => {


    switch (action.type) {

        case 'Increase':
            return {
                ...state,
                count: state.count + 1
            }
        case 'Decrease':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }

}

export default counterReducer;