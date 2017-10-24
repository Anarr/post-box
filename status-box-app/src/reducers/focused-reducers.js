export default function(state = null, action){
    switch(action.type){
        case "CANCEL_FORM":
            return{
                focused:action.focused,
                value:""
            }
            break;
        case "SAVE_FORM":
            return{
                focused:action.focused,
                value:action.value
            }
            break;
        case "FOCUS_FORM":
            return{
                focused:action.focused,
                value:action.value
            }
            break;

    }
    return state;
}