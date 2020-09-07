$(document).ready(function(){
  var navbar=$('.navbar');  
  console.log(navbar)
  var a=navbar[0].offsetHeight;
  var b=navbar[1].offsetHeight;
  var c=$('.reSize')[0];
  var sum=a+b;
  var win=window.innerHeight;
  console.log(a);
  console.log(b);
  console.log(sum);
  console.log(win);

  if(win>c.offsetHeight){
      c.style.height=(win-sum)+"px";
      console.log("XD");
  }
})

