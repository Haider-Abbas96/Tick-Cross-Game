let boxes=document.querySelectorAll(".box");
let resetgame =document.querySelector(".reset-btn");
 let winner =document.querySelector(".winner");
//  lets give turn like true or false
 let turn=true;

let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
// lets play 

boxes.forEach((box) =>{
        box.addEventListener("click", () =>{
          if(turn)
            {
              box.innerText='O';
              turn=false;
              box.disabled = true;
            }
          else
          {
              box.innerText='X';
              turn=true;
              box.disabled =true;
          }
          checkwinner();
        });
        
      });

// to disabled button after winner anounce
 
//  check winner
const checkwinner = () => {
    for (let pattern of winPattern) 
        {
            let posA = boxes[pattern[0]].innerText;
            let posB = boxes[pattern[1]].innerText;
            let posC = boxes[pattern[2]].innerText;
            if(posA!=="" && posB!=="" &&posC!=="")
                {
                      if(posA===posB && posB===posC)
                   {
                        showwinner();   
                   }
                   
               }
            
}
};
// disabled all button after winning case
const Disabled =(boxes)=>{
    for (const  box of boxes)
         {
        box.disabled=true;
       
       }
         
}
// lets show winner after winning anyone else
const showwinner=()=>{
    if(turn)
        {
        winner.innerText="Player X ";
        }
    else
      {
        winner.innerText="Player O";
      }
    Disabled(boxes);
   
}
// enabled button after reset game
const enabledbox=(boxes)=>{
       for (const box of boxes) 
        {
        box.disabled = false;
        box.innerText="";
       }
       
}
// lets make the reset function to reset all value
const reset=()=>{
    turn =true;
    enabledbox(boxes);
    winner.innerText="";
}
resetgame.addEventListener("click",()=>{
    reset();
});
const Gamedraw=()=>{
  let draw=document.getElementById("draw");
  draw.style.visibility="visible";
}