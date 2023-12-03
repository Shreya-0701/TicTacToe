console.log("Welcome to TICTIC TACTAC TOETOE")
let audioturn=new Audio("turn sound.wav")
let gameover=new Audio("winning voice.wav")
let turn="X"
let gameover1 =false;
//function to change the turn
const changeturn = ()=>{
    return turn === "X"? "0" : "X"
}
//function to check for win
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0 , 1, 2],
        [0 , 3, 6],
        [0 , 4, 8],
        [1 , 4, 7],
        [3 , 4, 5],
        [2 , 5, 8],
        [2 , 4, 6],
        [6 , 7, 8]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = "WOHOO ! Congratulations " + boxtext[e[0]].innerText + ", YOU WON !"
            gameover1= true; 
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "270px";
            gameover.play();
        }
    })

}

//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
        element.addEventListener('click' , ()=>{
            if( boxtext.innerText === ''){
                boxtext.innerText = turn;
                turn=changeturn();
                audioturn.play();
                checkwin();
                if(!gameover1){
                    document.getElementsByClassName("info")[0].innerText = " Turn for "  + turn;
                    
                }
                
        }
    })
})

reset.addEventListener('click' , ()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText=""
    });
    turn="X";
    gameover1=false;
    document.getElementsByClassName("info")[0].innerText = " Turn for "  + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    
})