const initialState = {
    data:[]
}

const todos = (state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                data:[...state.data,{id:action.id,text:action.text}],
                
                
            }
        case 'DELETE_TODO':
            const todosLists = state.data.filter((todo)=>(todo.id!==action.id)); 
            return {
                ...state,
                data:todosLists
            }
        default:
            return state;
    }
}

export default todos;