function generateMsg(){   

const Choice=Math.floor(Math.random()*3)

switch(Choice){
    case 1:
        console.log("Ice Cream")
        break;

    case 2:
        console.log("Fries")
        break;

    case 3:
        console.log("water")
        break;

    default:

    console.log("sorry no food")

  
 


}


return Choice


}


generateMsg()
