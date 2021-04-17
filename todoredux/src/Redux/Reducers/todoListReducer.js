const initialState =[{
    workName: 'work 1'
},
{
    workName:'work 2'

}]

export default (state=initialState ,action)=>{
        switch (action.type) {
            case 'ADD_TODO' :
                return [...state,action.payload]
                default :
                        return state
        }

}