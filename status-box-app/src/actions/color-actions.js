export const selectColor = (color) => {
    console.log("You clicked "+ color.color);
    return {
        type:"COLOR_SELECTED",
        payload:color,
        focused:true
    }   
}