//stretch the image
//change the colours-ex change all the reds
//make one line white
//invert the colours
//sort them!!!! lightest to darkest, most to least red
//ship of theseus
//add noise
//monochrome

let kitty;

function preload(){
    kitty=loadImage('kitten.jpeg');
}

function setup(){
    createCanvas(720,480);
    kitty.loadPixels();
    // kitty.pixels.sort();
    kitty.updatePixels();
}


var index=0;
function draw(){
    background(100);
    kitty.loadPixels();
    for(var i=0;i<3;i++){
    sortPixel(index);
    index+=4;
    }
    index=index%kitty.pixels.length;
    kitty.updatePixels();
    image(kitty,0,0);
}

function sortPixel(index){
  for(var i=index;i<kitty.pixels.length;i+=4){
    var bright1=kitty.pixels[i]+kitty+pixels[i+1]+kitty.pixels[i+2];
    var bright2=kitty.pixels[i+4]+kitty.pixels[1+5]+kitty.pixels[i+6];
    if(bright1>bright2){
        swapPixels(i,i+4);
    }
  }
}

function swapPixels(a,b){
    var temp=[];
    temp[0]=kitty.pixels[b];
    temp[1]=kitty.pixels[b+1];
    temp[2]=kitty.pixels[b+2];
    temp[3]=kitty.pixels[b+3];
    kitty.pixels[b]=kitty.pixels[a];
    kitty.pixels[b+1]=kitty.pixels[a+1];
    kitty.pixels[b+2]=kitty.pixels[a+2];
    kitty.pixels[b+3]=kitty.pixels[a+3];
    kitty.pixels[a]=temp[0];
    kitty.pixels[a+1]=temp[1];
    kitty.pixels[a+2]=temp[2];
    kitty.pixels[a+3]=temp[3];

}

function monochrome(){
    for(var i=0;i<kitty.pixels.length;i+=4){
        kitty.pixels[i+1]=kitty.pixels[i];
        kitty.pixels[i+2]=kitty.pixels[i];
    }
}

function monochrome2(){
    for(var i=0;i<kitty.pixels.length;i+=4){
        let avg=kitty.pixels[i]+kitty.pixels[i+1]+kitty.pixels[i+2];
        avg=avg/3;
        avg=Math.floor(avg);
        kitty.pixels[i];
        kitty.pixels[i+1]=kitty.pixels[i];
        kitty.pixels[i+2]=kitty.pixels[i];
    }
}


function striation(amt){
    let count=0;
    let striate=false;
    for(var i=0;i<kitty.pixels.length;i+=4){
        if(striate){
            kitty.pixels[i]=0;
            kitty.pixels[i+1]=0;
            kitty.pixels[i+2]=0;
        }
        count++;
        if(count>(177*amt)-1){
            striate=!striate;
            count=0;
        }
    }
}

function firstTry(){
 //console.log(kitty);
 let count=0;
 let randomamount=0;
 for(var i=0;i<kitty.pixels.length;i+=randomamount){
     //kitty.pixels[i]=255-kitty.pixels[i];
     //kitty.pixels[i+1]=255-kitty.pixels[i+1];
     if(count!==3){
         kitty.pixels[i+2]=255-kitty.pixels[i+2];
     }else{

         
     }
     count++;
     count=count%4;
     randomamount=Math.floor(random(10));
 }
}