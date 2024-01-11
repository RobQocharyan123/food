export let initialState = {
    burger:false,
    windowSize:window.innerWidth,

}


export const  reducer = (state = initialState,action)=>{
    switch(action.type){
        case "OPEN_BURGER":{
            return {...state,burger:action.payload}
        }
        case "CLOSE_BURGER":{
            return {...state,burger:action.payload}
        }
        case 'WINDOW_SIZE':{
            return {...state,windowSize:action.payload}

        }
        default:{
            return state;
        }
    }
   
}