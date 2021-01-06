var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //     alist[i].style.color = color;
    //     i = i + 1;
    // }
    $('a').css('color', color);
  }
}
var Present = {
  presentLink:function(color){
    var alist =document.querySelectorAll('#Selected');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}
var Body = {
  setColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setbackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function NightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'Night'){
    Body.setColor('white');
    Body.setbackgroundColor('black');
    self.value = 'Day';

    Links.setColor('powderblue');
    Present.presentLink('pink');
    }
  else{
    Body.setColor('black');
    Body.setbackgroundColor('white');
    self.value = 'Night';

    Links.setColor('blue');
    Present.presentLink('red');
    }
  }
