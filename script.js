// alert("Woooooow people! Thanks for freaking 3.3K thumbs up!")
// const imgq = document.createElement("img");
// img.src = "https://picsum.photos/200/301";
// document.body.appendChild(imgq);
// function outline(){
//     var img = document.createElement('img');
//     img.src ='https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
//     document.getElementById('left1').appendChild(img);
//     // down.innerHTML = "Image Element Added.";
// }
const button1=document.getElementById("dislike");
const disableButton=()=>{
    button1.disabled=true;
}
const ableButton=()=>{
    button1.disabled=false;
}
function Direction(Choice){
// The choice of the first buttons 

    if(Choice == "left"){
        
        document.getElementById("result").innerHTML = '<br><h1>Yay👏 you have a good Eye power.You got the answer.</h1><br><br><b> <h2>Now answer this question?<br>Mr. John was killed on Saturday after noon. In Police investigation, his butler said he was bathing. His wife said she was reading book. His chef said he was cooking breakfast. His maid said she was folding clothes, and the gardener said he was watering in garden. Police catch hold the culprit, who is the culprit?<br>Scroll down to answer📜⏬</h2></b>';
        document.getElementById('left1').style.display = 'none';
        document.getElementById("right1").style.display = 'none';
        document.getElementById("escape1").style.display = 'none';
        document.getElementById("result").style.display = 'inline';
        document.getElementById('left2').style.display = 'inline';
        document.getElementById("right2").style.display = 'inline';
        document.getElementById("escape2").style.display = 'inline';
        document.getElementById('img2').style.display='inline';
        window.scrollTo(0, 500);
    }
    if(Choice == "right"){
        document.getElementById("result").innerHTML = "<b><h1>You are incorrect!❌</h1><h2>But we are giving you a one more chance.</b><br><br><br><b> Now answer this question?<br>Mr. John was killed on Saturday after noon. In Police investigation, his butler said he was bathing. His wife said she was reading book. His chef said he was cooking breakfast. His maid said she was folding clothes, and the gardener said he was watering in garden. Police catch hold the culprit, who is the culprit?<br>Scroll down to answer📜⏬</h2>";
        document.getElementById('left1').style.display = 'none';
        document.getElementById("right1").style.display = 'none';
        document.getElementById("escape1").style.display = 'none';
        document.getElementById("result").style.display = 'inline';
        document.getElementById('left2').style.display = 'inline';
        document.getElementById("right2").style.display = 'inline';
        document.getElementById("escape2").style.display = 'inline';
        document.getElementById('img2').style.display='inline';
        window.scrollTo(0, 500);
    }
   
    
    if(Choice == "escape"){
        document.getElementById('img2').style.display='none';
        document.getElementById("result").innerHTML = "<br> HA! Nice try, but you won't get out that easily.<br> <br> Try again... if you dare!<br><br>";
        
       //making sure the right buttons are displayed
        document.getElementById('left1').style.display = 'none';
        document.getElementById("right1").style.display = 'none';
        document.getElementById("escape1").style.display = 'none';
        document.getElementById("tryagain").style.display = 'block';
        document.getElementById("result").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
    }
    // var img = document.createElement('img');
    //     img.src ='https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
    //     document.getElementById('left1').appendChild(img);
    //     down.innerHTML = "Image Element Added.";
}
        
function Direction2(Choice){
    document.getElementById('img2').style.display='none';

        if(Choice == 'left2'){
            document.getElementById("result2").innerHTML = '<br><br><h1>You are Amazing!🎉</h1> <h2>As as chef said that he was making breakfast in afternoon. He is the culprit.<br><br>Now this is the last step towards your treasure hunt.<br> How many triangles are there in the figure</h2>' ;
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById('A').style.display = 'inline';
        document.getElementById("B").style.display = 'inline';
        document.getElementById("C").style.display = 'inline';
        document.getElementById('triangle').style.display='inline';
        }
        
        if(Choice == 'right2'){
            document.getElementById("result2").innerHTML = "<br><br><h1>Sorry! Deadend🩻</h1><h2>You chose wife as culprit.<br>But chef is the real culprit because he said he was preparing breakfast in the afternoon. <br> And you're a dead man. Try again if you think you can beat me⏬...<br></h2>";
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
        }
        
        if(Choice == 'escape2'){
            document.getElementById("result2").innerHTML = "<br><h2>You are incorrect🙆‍♂️.You chose to go and find an escape. Didn't I just tell you not to try? I guess you're not too smart... <br><br>You died. Try again if you think you can beat me🔁...<br></h2>";
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
    }
    // document.getElementById("dislike").disabled=false;
}

function Direction3(Choice){
    document.getElementById('triangle').style.display='none';
        if(Choice == "A"){
            document.getElementById("result3").innerHTML = "<br><br>Nice one! Or did you just guess like always? Congratulations either way, because you're still alive. You're doing better than I expected. Let's do something fun now. Choose your favourite colour. Let's hope for you that it's the right one.";
        document.getElementById('A').style.display = 'none';
        document.getElementById("B").style.display = 'none';
        document.getElementById("C").style.display = 'none';
        document.getElementById("result3").style.display = 'inline';
        document.getElementById('blue').style.display = 'inline';
        document.getElementById("red").style.display = 'inline';
        document.getElementById("yellow").style.display = 'inline';
        document.getElementById("green").style.display = 'inline';
        document.getElementById("pink").style.display = 'inline';
        }
        
        if(Choice == "B" || Choice == "C"){
        document.getElementById("result3").innerHTML = "<br><br>Nope! If you would've just looked up the name of my creator... Try again if you dare!<br>";
        document.getElementById('A').style.display = 'none';
        document.getElementById("B").style.display = 'none';
        document.getElementById("C").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result3").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
        }
        
}

function Direction4(Choice){
        document.getElementById("result4").innerHTML = "<br><br>Pfew, you survived! That was a hard one, wasn't it? Good thing every answer would've been right then ;)<br><br> Now onto the fun part! At least... Fun for me! So how is your memory? I hope it's doing alright. What was the first option in the last question?";
        document.getElementById('blue').style.display = 'none';
        document.getElementById("red").style.display = 'none';
        document.getElementById("yellow").style.display = 'none';
        document.getElementById("pink").style.display = 'none';
        document.getElementById("green").style.display = 'none';
        document.getElementById("result4").style.display = 'inline';
        document.getElementById('blue2').style.display = 'inline';
        document.getElementById("red2").style.display = 'inline';
        document.getElementById("yellow2").style.display = 'inline';
        document.getElementById("pink2").style.display = 'inline';
        document.getElementById("green2").style.display = 'inline';
    }
    
// function Direction5(Choice){
    
//     if(Choice == "red2"){
//         document.getElementById("result5").innerHTML = "<br><br>Looks like you're almost out! Just one last question. Will you give this code a like?";
//         document.getElementById("result5").style.display = 'inline';
//         document.getElementById('blue2').style.display = 'none';
//         document.getElementById("red2").style.display = 'none';
//         document.getElementById("yellow2").style.display = 'none';
//         document.getElementById("pink2").style.display = 'none';
//         document.getElementById("green2").style.display = 'none';
//         document.getElementById("yes").style.display = 'inline';
//         document.getElementById("no").style.display = 'inline';
//     }
    
//     if(Choice == "blue2" || Choice == "yellow2" || Choice == "pink2" || Choice == "green2"){
//          document.getElementById("result5").innerHTML = "<br><br>Pfft. You're not even paying attention? Get your mind working and try again...";
//         document.getElementById("result5").style.display = 'inline';
//         document.getElementById('blue2').style.display = 'none';
//         document.getElementById("red2").style.display = 'none';
//         document.getElementById("yellow2").style.display = 'none';
//         document.getElementById("pink2").style.display = 'none';
//         document.getElementById("green2").style.display = 'none';
//         document.getElementById("tryagain").style.display = 'inline';
//         document.getElementById("loseGif1").style.display = 'block';
//     }
// }

// function Direction6(Choice){
//     if(Choice == "yes"){
//         document.getElementById("result6").innerHTML = "<br><br>WOOOOO YOU MADE IT! CONGRATS! *gives high five* Don't forget to actually give a like now ;)<br>";
//         document.getElementById("yes").style.display = 'none';
//         document.getElementById("no").style.display = 'none';
//         document.getElementById("winGif").style.display = 'block';
//     }
    
//     if(Choice == "no"){
//         document.getElementById("result6").innerHTML = "<br><br>Shame I can't let you out now... Try again when you're ready...";
//         document.getElementById("yes").style.display = 'none';
//         document.getElementById("no").style.display = 'none';
//         document.getElementById("tryagain").style.display = 'inline';
//         document.getElementById("loseGif1").style.display = 'block';
//     }
// }
    
function TryAgain(){ //running the whole code again 
    document.getElementById('img2').style.display='none';
    Direction();
    document.getElementById("result3").style.display = 'none';
    // document.getElementById("result4").style.display = 'none';
    // document.getElementById("result5").style.display = 'none';
    // document.getElementById("result6").style.display = 'none';
    document.getElementById('left1').style.display = 'inline';
    document.getElementById("right1").style.display = 'inline';
    document.getElementById("escape1").style.display = 'inline';
    document.getElementById('left2').style.display = 'none';
    document.getElementById("right2").style.display = 'none';
    document.getElementById("escape2").style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById("result2").style.display = 'none';
    document.getElementById('tryagain').style.display = 'none';
    document.getElementById("loseGif1").style.display = 'none';
}

// let popup = document.getElementById('popup')

// function openPopup(){
//   popup.classList.add('open-popup')
// }

// function closePopup(){
//   popup.classList.remove('open-popup')
// }

function suri(){
    alert(`
    This page contains 3 puzzles.
    After Solving each puzzle only you can able to move on.
    Be careful! there are some dead ends.
    At the end you can find the treasure.`);
}