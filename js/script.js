document.getElementById('content').style.height="20%";
var urlb = "https://discordapp.com/api/webhooks/643675566884519946/ZXcf8f7dWyg3t1SH9i5ylQya7mPv0XVqvfIvI1tnKm_ecO9LbIh5jZE0E115o-e08w3S"
var blank = ['']
function replaceT(obj){
  var curses=['nigger','Nigger','fag','Fag'];
  var i=0, c, r;
  while(c=curses[i++]){
    r=new RegExp(c,'g');
    obj.value=obj.value.replace(r,'***');
  }
};

function noSpam(){
  document.getElementById("submit").disabled = true;
  setTimeout(function(){
    var btn = document.getElementById("submit");
    btn.disabled = false;
  }, 5000);
}
