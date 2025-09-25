
let count = 200; 
function biggerFunction(){
            
count = count + 10;
$(".circle").css("width" , `${count}px`);
$(".circle").css("height" ,`${count}px`);
if($(".circle").css("width") >= '420px' ){
    $(".circle").css("width" , `200px`);
    $(".circle").css("height" ,`200px`);
    count = 200;
}
if ($(".circle").css("background-color") == "rgb(255, 0, 0)"){
    $(".circle").css("backgroundColor" ,"rgb(0, 255, 0)" );
} 
else if($(".circle").css("background-color") == "rgb(0, 0, 255)"){
    $(".circle").css("backgroundColor" ,"rgb(255, 0, 0)");
}
else if($(".circle").css("background-color") == "rgb(0, 255, 0)"){
    $(".circle").css("backgroundColor" ,"rgb(0, 0, 255)");
}
}

function smallerFunction(){
    count = count - 5;
    $(".circle").css("width",`${count}px`);
    $(".circle").css("height",`${count}px` );
}