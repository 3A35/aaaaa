
var qu=[
{ prompt:"紫涵最愛吃食物?\n(1)菜\n(2)魚\n(3)化學食物",
 answer:"3"	
},

{ prompt:"紫琪最喜歡運動?\n(1)榆珈\n(2)羽毛球\n(3)桌球",
 answer:"1"	
},

{ prompt:"誰最喜歡排隊?\n(1)紫琪\n(2)紫涵\n(3)小雯",
 answer:"3"	
},

{ prompt:"紫琪長不高的原因?\n(1)吃辣\n(2)減肥\n(3)不吃肉",
 answer:"2"	
},

{ prompt:"誰最笨?\n(1)紫琪\n(2)小雯\n(3)紫涵",
 answer:"2"	
},

{ prompt:"誰最愛錢?\n(1)紫琪\n(2)紫涵\n(3)小雯",
 answer:"1"	
},

{ prompt:"誰比較懶惰?\n(1)紫琪\n(2)紫涵\n(3)小雯",
 answer:"2"	
},




]

var  score=0;
for(var i=0; i<qu.length;i++){
var input=prompt(qu[i].prompt);	
	if(input==qu[i].answer){
		score++;
		alert("答對了")
	}
	else{
		alert("答錯了")
	}
	
}
 alert("總共答對了"+score+"題!");
