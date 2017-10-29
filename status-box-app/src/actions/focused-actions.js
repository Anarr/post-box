export const cancelForm = () => {
    console.log("Canceled");
    return{
        type:"CANCEL_FORM",
        focused:false,
        value:""
    }
}
export const saveForm = (i,focused) =>{
    console.log(`saved ${i}`); 
    return{
        type:"SAVE_FORM",
        focused:focused,
        value:i
    }
}

export const focusForm = (i) =>{
    console.log(`focused ${i}` );
    return{
        type:"FOCUS_FORM",
        focused:true,
        value:i
    }
}
