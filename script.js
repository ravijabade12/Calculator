document.getElementById('btn1').onclick=function(){
    forms1.txt1.value+=1;
    document.getElementById('text').focus();
}

document.getElementById('btn2').onclick=function(){
    forms1.txt1.value+=2;
    document.getElementById('text').focus();   
}

document.getElementById('btn3').onclick=function(){
    forms1.txt1.value+=3;
    document.getElementById('text').focus();   
}

document.getElementById('addbtn').onclick=function(){
    add();
    document.getElementById('text').focus(); 
}

document.getElementById('btn4').onclick=function(){
    forms1.txt1.value+=4;
    document.getElementById('text').focus();
}

document.getElementById('btn5').onclick=function(){
    forms1.txt1.value+=5;
    document.getElementById('text').focus();
}

document.getElementById('btn6').onclick=function(){
    forms1.txt1.value+=6;
    document.getElementById('text').focus();
}

document.getElementById('subbtn').onclick=function(){
    sub();
    document.getElementById('text').focus();   
}


document.getElementById('btn7').onclick=function(){
    forms1.txt1.value+=7;
    document.getElementById('text').focus();
}

document.getElementById('btn8').onclick=function(){
    forms1.txt1.value+=8;
    document.getElementById('text').focus();
}

document.getElementById('btn9').onclick=function(){
    forms1.txt1.value+=9;
    document.getElementById('text').focus();
}

document.getElementById('divbtn').onclick=function(){
    div();
    document.getElementById('text').focus();  
}

document.getElementById('btn0').onclick=function(){
    forms1.txt1.value+=0;
    document.getElementById('text').focus();   
}


document.getElementById('mulbtn').onclick=function(){
    mul();
    document.getElementById('text').focus();   
}




function add(){
    var act=0,b=0;
    act =forms1.txt1.value;
    b=act.charAt(act.length-1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        forms1.txt1.value=act.substring(0,act.length-1);
        forms1.txt1.value+='+';
    }
    else{
        forms1.txt1.value+='+';
    }

}

function sub(){
    var act=0,b=0;
    act =forms1.txt1.value;
    b=act.charAt(act.length-1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        forms1.txt1.value=act.substring(0,act.length-1);
        forms1.txt1.value+='-';
    }
    else{
        forms1.txt1.value+='-';
    }

}

function mul(){
    var act=0,b=0;
    act =forms1.txt1.value;
    b=act.charAt(act.length-1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        forms1.txt1.value=act.substring(0,act.length-1);
        forms1.txt1.value+='*';
    }
    else{
        forms1.txt1.value+='*';
    }

}

function div(){
    var act=0,b=0;
    act =forms1.txt1.value;
    b=act.charAt(act.length-1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        forms1.txt1.value=act.substring(0,act.length-1);
        forms1.txt1.value+='/';
    }
    else{
        forms1.txt1.value+='/';
    }

}