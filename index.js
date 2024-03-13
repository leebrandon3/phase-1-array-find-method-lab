// code your solution here
function superbowlWin(plays){
    const win = plays.find((element, index, array) => element.result === "W")
    if (typeof win === "undefined"){
        return win;
    }
    else{
        return win.year
    }
}