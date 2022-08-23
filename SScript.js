var messageArray=["First thing first       , Am mohamed 69 Y.o i've been in this programming and cyber security thing since 15 , woking lazy as hell . Am not a web dev i just created this web blog to share what am doing and my projects  , I'm more into networking and      kernel lvl programming and reverse engineering and all 'from scratch' things like graphics programming .                oh and i use arch btw o_o."];
var messageArray2=["مرحبًا بالعالم ، أنا محمد عمري 17 عامًا وأنا أعمل في مجال البرمجة والأمن السيبراني منذ 15 عامًا ، وأعمل كسولًا مثل الكوالا. لست مطور ويب ، لقد أنشأت موقع الويب هذا لمشاركة ما أقوم به ومشاريعي o_O ، فأنا على الأرجح في برمجة الشبكات ونواة المستوى والهندسة العكسية وجميع الأشياء'من البداية' مثل برمجة الرسومات. أوه وأنا استخدم قوس راجع للشغل o_o."];
var anothertext=[""];
var characters       = 'abcdefghijklmnopqrstuvwxyz';
var textPosition=0;
var textPosition2=0;
var speed=80;
var removespeed=160;
var number=0;
var x=0;
var y=0;
//writing effect for english text
function typefect(){
	if (Math.floor(Math.random()*4)!=1){
		anothertext+=messageArray[0][textPosition+x];
	}else{
	
		anothertext+=characters.charAt(Math.floor(Math.random() * 52));
	}
		document.querySelector("#text").
		innerHTML=anothertext+"<span>\u25ae</span>";
	x=x+1
	if (messageArray[0][textPosition+x]!=" " && (textPosition+x)<messageArray[0].length){
		setTimeout(typefect,speed);
	}else{
		x++;
		setTimeout(removefect,removespeed);	
	}
}

function removefect(){
	document.querySelector("#text").
		innerHTML=anothertext.substring(0,textPosition+x--)+
		"<span>\u25ae</span>";

	if (x>=0){
		setTimeout(removefect,removespeed);
	}else{
		setTimeout(typewriter,speed);
	}

}

function typewriter(){
	document.querySelector("#text").
		innerHTML=messageArray[0].substring(0,textPosition)+
		"<span>\u25ae</span>";
	if(textPosition++ != messageArray[0].length){
		if (messageArray[0][textPosition-1]==" " && Math.floor(Math.random()*10)==1){
				anothertext=messageArray[0].substring(0,textPosition);
				setTimeout(typefect,speed);
		}else{
	  		setTimeout(typewriter,speed-20);
	}
}
}
//writing effect for arabic text
function typewriter2(){
	document.querySelector("#message").
		innerHTML=messageArray2[0].substring(0,textPosition2)+
		"<span>\u25ae</span>";
	if(textPosition2++ != messageArray2[0].length){
  		setTimeout(typewriter2,speed);
	}
}

window.addEventListener("load",typewriter);
window.addEventListener("load",typewriter2);
////////////////////////////////////////////////////////////
function BlurMenu(item,index){
	item.style.filter="blur(3px)";
	item.style.transition="0.3s";

}
function UnBlurMenu(item,index){
	item.style.filter="none";
	item.style.transition="0.3s";
}
function WriteDis(Id){
	document.getElementById("Dis").innerHTML=Id.getAttribute("data-text");
	document.getElementById("Dis").style.opacity="1";
	document.getElementById("Dis").style.transition="0.5s";
	
	document.getElementById("DisDiv").style.width="300px";
	document.getElementById("DisDiv").style.top="40px";
	document.getElementById("DisDiv").style.transition="0.5s";
	document.getElementById("Dis").style.fontSize="15px";

	document.getElementById("LogoDiv").style.top="-30px";
	document.getElementById("LogoDiv").style.opacity="0";
	document.getElementById("LogoDiv").style.transition="0.5s";
	
	document.getElementById("Logo").style.padding="10px";
	document.getElementById("Logo").style.fontSize="15px";
	document.getElementById("Logo").style.transition="0.5s";
 
	document.getElementById("hidetop").style.width="30px";
	document.getElementById("hidetop").style.top="39px";
	document.getElementById("hidetop").style.transition="0.5s";


	var x = document.getElementById("MenuDiv").querySelectorAll("a");  
	x.forEach(BlurMenu);
	Id.style.textShadow="0 0 4px #000";
	Id.style.backgroundColor="white";
	//Id.style.padding="10px";
	Id.style.transform="scale(1.4)";
	Id.style.transition="0.3s";
	Id.style.color="black";
	Id.style.filter="none";
}

function RemoveDis(Id){
	document.getElementById("LogoDiv").style.top="20px";
	document.getElementById("LogoDiv").style.opacity="1";
	document.getElementById("LogoDiv").style.transition="0.5s";

	document.getElementById("DisDiv").style.top="120px";
	document.getElementById("DisDiv").style.transition="0.5s";
	document.getElementById("DisDiv").style.height="32px";
	document.getElementById("DisDiv").style.width="200px";
	document.getElementById("Dis").style.transition="0.2s";
	document.getElementById("Dis").style.fontSize="10px";
	document.getElementById("Dis").style.opacity="0";
	
 	document.getElementById("Logo").style.padding="15px";
	document.getElementById("Logo").style.fontSize="20px";
	document.getElementById("Logo").style.transition="0.5s";
	
	document.getElementById("hidetop").style.width="40px";
	document.getElementById("hidetop").style.top="52px";
	document.getElementById("hidetop").style.transition="0.5s";

	
	var x = document.getElementById("MenuDiv").querySelectorAll("a");  
	x.forEach(UnBlurMenu);
	Id.style.textShadow="0 0 0px #000";
	Id.style.transition="0.3s";
	Id.style.transform="scale(1)";
	//Id.style.paddingLeft="5px";
	//Id.style.paddingRight="5px";
	Id.style.padding="5px";
}

//////////////////////////////////////////////
/////////////////////End of discription writing
/////////////////////////////////////////////

function changepicsizeleft(Id){
	// document.getElementById("pics").style.height="70%";
	// document.getElementById("pics").style.transition="0.5s";

		
		if (Math.floor(Math.random()*2)==1){
			document.getElementById("pic2").style.top="-20%";
			document.getElementById("pic3").style.top="50%";
	
		}else{
			document.getElementById("pic2").style.top="50%";
			document.getElementById("pic3").style.top="-20%";
		}

		document.getElementById("picstitle").style.left="82%";
		document.getElementById("picstitle").style.top="-30%";
		document.getElementById("picstitle").style.fontSize="1.7vw";
		document.getElementById("picstitle").style.transition="0.7s";

		document.getElementById("pic2").style.transition="0.6s";
		document.getElementById("pic2").style.left="67.5%";
		document.getElementById("pic2").style.filter="blur(3px)";
		document.getElementById("pic2").style.transform="scale(0.8)";

		// document.getElementById("pic3").style.right="-1.8%";
		document.getElementById("pic3").style.filter="blur(3px)";
		document.getElementById("pic3").style.transition="0.5s";
		
		
		Id.style.zIndex=10;
		Id.style.transform="scale(2)";
		Id.style.left="17%";
		Id.style.transition="0.5s";
}
function recoverpicsizeleft(Id){	

       	// document.getElementById("pics").style.height="42%";
		// document.getElementById("pics").style.transition="0.5s";


		document.getElementById("picstitle").style.left="50%";
		document.getElementById("picstitle").style.top="-25%";
		document.getElementById("picstitle").style.fontSize="2vw";
		document.getElementById("picstitle").style.transition="0.7s";

		Id.style.zIndex=1;
		Id.style.transform="scale(0.8)";
		Id.style.top="10%";
		Id.style.left="2.3%";
		Id.style.transition="0.5s";
   		
 		
		document.getElementById("pic3").style.top="10%";
		document.getElementById("pic3").style.right="2.3%";
		document.getElementById("pic3").style.filter="none";
		document.getElementById("pic3").style.transform="scale(0.8)";
		document.getElementById("pic3").style.transition="0.5s";

		document.getElementById("pic2").style.left="35%";
		document.getElementById("pic2").style.filter="none";
		document.getElementById("pic2").style.transform="scale(1.2)";
		document.getElementById("pic2").style.top="10%";
		document.getElementById("pic2").style.transition="0.5s";
}

	function changepicsizemid(Id){
		// document.getElementById("pics").style.height="70%";
		// document.getElementById("pics").style.transition="0.5s";

		document.getElementById("picstitle").style.top="-35%";
		document.getElementById("picstitle").style.transition="0.5s";

		document.getElementById("pic1").style.left="-5%";
		document.getElementById("pic1").style.top="10%";
		document.getElementById("pic1").style.transform="scale(0.5)";
		document.getElementById("pic1").style.filter="blur(3px)";
		document.getElementById("pic1").style.transition="0.5s";

		document.getElementById("pic3").style.right="-5%";
		document.getElementById("pic3").style.top="10%";
		document.getElementById("pic3").style.transform="scale(0.5)";
		document.getElementById("pic3").style.transition="0.5s";
		document.getElementById("pic3").style.filter="blur(3px)";

		Id.style.zIndex=10;
		Id.style.transform="scale(2)";
		Id.style.top="20%";
		Id.style.transition="0.5s";
}

function recoverpicsizemid(Id){
		
		// document.getElementById("pics").style.height="260px";
		// document.getElementById("pics").style.transition="0.5s";

		document.getElementById("picstitle").style.top="-25%";
		document.getElementById("picstitle").style.transition="0.4s";

		document.getElementById("pic1").style.left="2.3%";
		// document.getElementById("pic1").style.top="10%";
		document.getElementById("pic1").style.transform="scale(0.8)";
		document.getElementById("pic1").style.filter="none";
		document.getElementById("pic1").style.transition="0.5s";

		document.getElementById("pic3").style.right="2.3%";
		// document.getElementById("pic3").style.top="10%";
		document.getElementById("pic3").style.transform="scale(0.8)";
		document.getElementById("pic3").style.filter="none";
		document.getElementById("pic3").style.transition="0.5s";
		Id.style.zIndex=1;
		Id.style.transform="scale(1.2)";
		Id.style.top="10%";
		Id.style.left="35%";
		Id.style.transition="0.5s";
	
}




function changepicsizeright(Id){

    // document.getElementById("pics").style.height="500px";
	// document.getElementById("pics").style.transition="0.5s";

	if (Math.floor(Math.random()*2)==1){
			document.getElementById("pic2").style.top="-20%";
			document.getElementById("pic1").style.top="50%";
	
		}else{
			document.getElementById("pic2").style.top="50%";
			document.getElementById("pic1").style.top="-20%";

		}	

	document.getElementById("picstitle").style.left="17%";
	document.getElementById("picstitle").style.top="-30%";
	document.getElementById("picstitle").style.fontSize="1.7vw";
	document.getElementById("picstitle").style.transition="0.7s";

	// document.getElementById("pic1").style.left="-1.8%";
	document.getElementById("pic1").style.filter="blur(2px)";
	document.getElementById("pic1").style.transition="0.5s";

	document.getElementById("pic2").style.left="2.3%";
	document.getElementById("pic2").style.transform="scale(0.8)";
	document.getElementById("pic2").style.filter="blur(2px)";
	document.getElementById("pic2").style.transition="0.5s";

	Id.style.zIndex=10;
	Id.style.transform="scale(2)";
	Id.style.right="17%";
	// Id.style.top="0";
	Id.style.transition="0.5s";
}
function recoverpicsizeright(Id){	

	// document.getElementById("pics").style.height="260px";
	// document.getElementById("pics").style.transition="0.5s";

	document.getElementById("pic1").style.filter="none";
	document.getElementById("pic1").style.left="2.3%";
	document.getElementById("pic1").style.top="10%";
	document.getElementById("pic1").style.transform="scale(0.8)";
	document.getElementById("pic1").style.transition="0.5s";

	document.getElementById("picstitle").style.left="";
	document.getElementById("picstitle").style.fontSize="2vw";
	document.getElementById("pic2").style.filter="none";
	document.getElementById("pic2").style.left="35%";
	document.getElementById("pic2").style.top="10%";
	document.getElementById("pic2").style.transform="scale(1.2)";
	Id.style.zIndex=1;
	Id.style.transform="scale(0.8)";
	// Id.style.top="10%";
	Id.style.right="2.3%";
	Id.style.transition="0.3s";
	
	
}
