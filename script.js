 function splash(){
    var splashContainer = document.getElementById('splash');
    splashContainer.style.display='none';
    }
    setTimeout(splash,4000);
    

function getNumber(num){
    var screen = document.getElementById("screen");

    switch(num){
        case 1:
            screen.value +='1';
            break;
        case 2:
            screen.value +='2';
            break;
        case 3:
            screen.value +='3';
            break;
        case 4:
            screen.value +='4';
            break;
        case 5:
            screen.value +='5';
            break;
        case 6:
            screen.value +='6';
            break;
        case 7:
            screen.value +='7';
            break;
        case 8:
            screen.value +='8';
            break;
        case 9:
            screen.value +='9';
            break;

        case 0:
            screen.value +='0';
            break;

        case 'dot':
        if(screen.value != ''){
            screen.value +='.'};
            break;   
        }

};


function getOparator(opt){
    var screen = document.getElementById("screen");
    
    if(screen.value[screen.value.length-1]!= '+'){
    
if(screen.value !=''){

    switch(opt){
        case 'plus':
            screen.value +='+';
            break;
        case 'minus':
            screen.value +='-';
            break;
        case 'multiply' :
            screen.value +='*';
            break;
        case 'division' :
            screen.value +='/';
            break;
       }
       }
       switch (opt){
        case 'plusminus':
            screen.value +='-';
            break; 
        }

}
};

 function calculate(){

          var screen=document.getElementById("screen");
  /*        
     screen.value=  screen.value.replace(/[A-Za-z]/q,"");
     */
         if(screen.value != ''){
          result=eval(screen.value);
          
          result=parseFloat(result);
        screen.value = result;
        
       }else{
            result='0';
        }

}


   function clearAll() {
       var screen= document.getElementById("screen").value = '';

  };

function onOff(){
     var screen=document.getElementById("screen");
     screen.placeholder='';

     var   text = "";
    screen.value =text;

};

function deleteLastNum()
{    var screen = document.getElementById("screen");
     var x= screen.value;
    if (x.length > 0) {
        x= x.substring(0,x.length-1);
        screen.value=x;

    }

};
   var i=0;
function setBracket(){
    var screen = document.getElementById("screen");
    if(i==0){
        screen.value +='(';
        i=1;}else if (i==1) {
        screen.value +=')';
        i=0;
    
        }
}

var radio = document.getElementsByName('theme');
if(radio.checked){
   alert('che'); document.getElementsByClassName('calculator').style.backgroundColor='#999';
}

function close(){
    document.getElementById('setting').style.display="none";
}