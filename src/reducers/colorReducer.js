
const colorReducer = ( state = {color:'AAA'} , action ) => {

    console.log("colorReducer.......")
    console.log(action)

    if(action.data){
        return action.data
    }

    return {color:'AAA'}
}

export default colorReducer
