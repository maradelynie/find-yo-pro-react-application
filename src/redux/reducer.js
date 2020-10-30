const INITIAL_STATE = {
    list : [] ,
    favorites:[],
    nextPage: "",
    lastSearch:"",
    loading:false,
    error:false
}

function reducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case "SET_LIST":
            
        return {
            ...state,
            list: action.value
        }
        
        case "SET_LASTSEARCH":
            
        return {
            ...state,
            lastSearch: action.value
        }

        case "SET_NEXTPAGE":
            
            return {
                ...state,
                nextPage: action.value
            }

        case "ADD_FAVORITES":

        return {
            ...state,
            favorites: [action.value,...state.favorites]
        }
        case "DELETE_FAVORITES":
        
        return {
            ...state,
            favorites: state.favorites.filter(favorite => favorite!==action.value)
        }  
        case "SET_LOADING":
            
        return {
            ...state,
            loading: action.value
        }

        case "SET_ERROR":
            
            return {
                ...state,
                error: action.value
            }

        default:
            return state
    }
    
}

export default reducer;