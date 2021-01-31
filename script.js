// console.log("hello");
let score = 0;
let cross = true;
document.onkeypress = function (e) {
	// console.log("hello");
	console.log("your keycode is : ",e.keyCode);
	let drag = document.querySelector('.dragon');
	let obstacle = document.querySelector('.obstacle');
	let gameover = document.querySelector('.gameover');
	if (e.keyCode == 38) {
       drag.classList.add('anidrag');
       setTimeout(()=>{
            drag.classList.remove('anidrag');
       },700);
	}
	if(e.keyCode == 39){
		var pos = parseInt(window.getComputedStyle(drag,null).getPropertyValue('left'));
		drag.style.left = pos + 150 + "px";
	}
	if(e.keyCode == 37){
		var pos = parseInt(window.getComputedStyle(drag,null).getPropertyValue('left'));
		drag.style.left = (pos - 150) + "px";
	}
	if(e.keyCode == 114){
		window.location.reload();
		obstacle.classList.add(obstaani);
	}
	if(e.keyCode == 115){
		obstacle.classList.add('obstaani');
        gameover.innerHTML = "Best OF LUCK!";
	}
}
setInterval(()=>{
	let dragon = document.querySelector('.dragon');
	let gameover = document.querySelector('.gameover');
	let obstacle = document.querySelector('.obstacle');
     var dinox = parseInt(window.getComputedStyle(dragon,null).getPropertyValue('left'));
     var dinoy = parseInt(window.getComputedStyle(dragon,null).getPropertyValue('top'));
     // console.log(dinox,dinoy);
     var obsx = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
     var obsy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
     
     offsetx = Math.abs(dinox - obsx);
     offsety = Math.abs(dinoy - obsy);
     
     if(offsetx < 73 && offsety <52){
     	gameover.innerHTML = "Game Over : press 'R' to play again.";
        obstacle.classList.remove('obstaani');
        dragon.classList.add('death');
        setTimeout(()=>{
            dragon.style.display = 'none';
        },2400);
        cross = false;
     }
     else if(offsetx < 143 && cross){
     	score +=1;
     	update(score);
     	cross = false;
     	setTimeout(()=>{
           cross = true;
     	},2000);
      setTimeout(()=>{
           anidur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
           // console.log('dur is ',anidur);
           newdur = anidur - 0.1;
           obstacle.style.animationDuration = newdur + "s";
           console.log("newdurration is: ",newdur);
     	},500);
     }

},10);
function update(val){
	var score = document.querySelector('.score');
	score.innerHTML = "score : " + val;
}