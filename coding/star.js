var home = document.getElementById('home'); 
var button = document.getElementById('bottom'); 
var home_star = document.getElementById('home_star'); 
var choose_page = document.getElementById('choose_page'); 
var twelve_star = document.getElementById('twelve_star');
var star1_page = document.getElementById('star1_page');
var star2_page = document.getElementById('star2_page');
var star3_page = document.getElementById('star3_page');
var star4_page = document.getElementById('star4_page');
var star5_page = document.getElementById('star5_page');
var star6_page = document.getElementById('star6_page');
var star7_page = document.getElementById('star7_page');
var star8_page = document.getElementById('star8_page');
var star9_page = document.getElementById('star9_page');
var star10_page = document.getElementById('star10_page');
var star11_page = document.getElementById('star11_page');
var star12_page = document.getElementById('star12_page'); 
var topic = document.getElementById('topic'); 
var rocket = document.getElementById('rocket'); 

//rocket_parameter : 3 parameter take 1 picture,total have 20pictures,eachpresent x-move,y-move,rotate
let rocket_parameter = [-6,-4,5,-11,-10,10,-20,-20,18,-26.3,-33,25,-30,-45,30,-36,-63,38,-47,-96,53,-53,-126,65,-53,-156,75,-50,-178,82,-47,-193,87,-46.5,-193,87,-46,-193,87,-44,-193,87,-41,-193,87,-36,-193,87,-31,-193,87,-26,-193,87,-21,-193,87,-16,-193,87];
var run = 1;
var button_opacity=0;

home_star.addEventListener("mouseover", mouse_move); 
home_star.addEventListener("mouseleave", mouse_leave);
topic.addEventListener("mouseover", mouse_move); 
topic.addEventListener("mouseleave", mouse_leave);   
button.addEventListener("mouseover", mouse_move3); 
button.addEventListener("mouseleave", mouse_leave3);  
button.onclick = function(){  /* let home_page disappear and appear choose page*/
  home_star.style.display = "block";setTimeout("appear1(home_star)", 500 );
  topic.style.display = "block";setTimeout("appear1(topic)", 500 );
  choose_page.style.display = "block";setTimeout("appear(choose_page)", 500 );
  home.style.opacity = "0";setTimeout("deletes(home)", 500 );
}


function back(){  /*back to home page*/
  home.style.display = "block";
  button.style.display = "block";
  twelve_star.style.display = "block";
  topic.style.opacity="0";setTimeout("deletes(topic)", 500 );
  home_star.style.opacity = "0";setTimeout("deletes(home_star)", 500 );
  choose_page.style.opacity = "0";setTimeout("deletes(choose_page)", 500 );
  star1_page.style.opacity = "0";setTimeout("deletes(star1_page)", 500 );
  star2_page.style.opacity = "0";setTimeout("deletes(star2_page)", 500 );
  star3_page.style.opacity = "0";setTimeout("deletes(star3_page)", 500 );
  star4_page.style.opacity = "0";setTimeout("deletes(star4_page)", 500 );
  star5_page.style.opacity = "0";setTimeout("deletes(star5_page)", 500 );
  star6_page.style.opacity = "0";setTimeout("deletes(star6_page)", 500 );
  star7_page.style.opacity = "0";setTimeout("deletes(star7_page)", 500 );
  star8_page.style.opacity = "0";setTimeout("deletes(star8_page)", 500 );
  star9_page.style.opacity = "0";setTimeout("deletes(star9_page)", 500 );
  star10_page.style.opacity = "0";setTimeout("deletes(star10_page)", 500 );
  star11_page.style.opacity = "0";setTimeout("deletes(star11_page)", 500 );
  star12_page.style.opacity = "0";setTimeout("deletes(star12_page)", 500 );
  rocket_fire();
  setTimeout("appear(button)", 2200 );/*10*/
  setTimeout("appear(home)", 2200 );/*500*/
  setTimeout("appear(twelve_star)", 2200 );/*500*/
}
/*home_star.onclick = back();*/
function mouse_move(id){ /*if mouse touchs the home star,the star will light and show it's name*/
  home_star.style.opacity = "1";
  home_star.style.height="8vh"; 
  home_star.style.width="8vh";
  topic.style.opacity="1";	
  topic.style.transform = "translate(-1vw ,0.5vh)";
  
}
function mouse_leave(id){  /*if mouse leaves the home star,the star and it's name will return back*/
  if(home_star.style.opacity == "1" ){
    home_star.style.opacity = "0.5"; 
    topic.style.opacity="0.5";
  }
  topic.style.transform = "translate(0vw ,0vh)";
  home_star.style.height="6vh"; 
  home_star.style.width="6vh";
}


function mouse_move2(id,id2){ /*if mouse touchs the star,the star will light and show it's name*/
  var zodiac = document.getElementById(id); 
  var text = document.getElementById(id2);
  zodiac.style.opacity = "1";
  text.style.opacity = "1";
}
function mouse_leave2(id,id2){ /*if mouse leaves the star,the star will return back and it's name will remove*/
  var zodiac = document.getElementById(id); 
  var text = document.getElementById(id2); 
  zodiac.style.opacity = "0.5";
  text.style.opacity = "0";
}

function mouse_move3(id){ /*button control*/
  button.style.transition='0.5s'
  button.style.opacity = "1";
  run=0;
  /*button.style.height="5.5vh"; 
  button.style.width="18.33vh";*/
}
function mouse_leave3(id){  /*button control*/
  button.style.transition='1s'
  button_opacity=0;
  run=1;
 /* button.style.height="4.5vh"; 
  button.style.width="15vh";*/
}


function change_star_page(id){
  var page = document.getElementById(id); 
  twelve_star.style.opacity = "0";setTimeout("deletes(twelve_star)", 500 );
  home.style.opacity = "0";setTimeout("deletes(home)", 500 );
  choose_page.style.opacity = "0";setTimeout("deletes(choose_page)", 500 );
  home_star.style.opacity = "0";home_star.style.display = "block";
  topic.style.opacity = "0";topic.style.display = "block";
  rocket_fire();
  page.style.display = "block";
  setTimeout("appear1(home_star)", 2200 );
  setTimeout("appear1(topic)", 2200 );
  setTimeout("appear("+id+")", 2200 );
}


function rocket_fire(){
  rocket.style.zIndex="10";
  for(let i=0;i<=20;i++){
	setTimeout("rocket_move("+rocket_parameter[3*i]+","+rocket_parameter[3*i+1]+","+rocket_parameter[3*i+2]+")", i*50 );
  }
  setTimeout("rocket.style.transition='1.5s'", 1100 );
  setTimeout("rocket.style.opacity='0'", 1100 );
  setTimeout("rocket.style.zIndex='1'", 1100 );
  setTimeout("rocket.style.transition='0s'", 2000 );
  setTimeout("rocket_move("+0+","+35+","+0+")", 2010 );
  setTimeout("rocket.style.opacity='1'", 2010 );
  setTimeout("rocket.style.transition='0.01s'", 2010 );
  for(let i=1;i<=35;i++){
	setTimeout("rocket_move("+0+","+(-i+35)+","+0+")", i*10+2010 );
  }
}

function rocket_move(x,y,deg){
  rocket.style.transform = "translate("+x+"vw ,"+y+"vh) rotate("+deg+"deg)";
}

function glow_button(){
  setInterval("glow()",1000);
}

function glow(){
	
  if(run==1){
	button.style.opacity = button_opacity;
  }
  if(button_opacity==1){
  button_opacity=0;
  }else{
  button_opacity=1;
  }
  
}

function deletes(id){
  id.style.display = "none";
}
function appear(id){
  id.style.opacity = "1";
}
function appear1(id){
  id.style.opacity = "0.5";
}