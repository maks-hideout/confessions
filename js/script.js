var url = 'https://discord.com/api/webhooks/919346035514568734/pEHusDMqaiZAdvqca3CMNaaSNZeZaY47CuTLJF-lWNokd0PetzhYF6u-8k3JD__xMpc8'
var url2 = 'https://discord.com/api/webhooks/919346236191023125/LB_ZhQ8FPIvd306gpvio0I7I9Vyq22Ft5FCtlWzKoRzM8sn6fCzEwU29N23EN_3fIo9N'
var urlb = "https://discordapp.com/api/webhooks/643675566884519946/ZXcf8f7dWyg3t1SH9i5ylQya7mPv0XVqvfIvI1tnKm_ecO9LbIh5jZE0E115o-e08w3S"
var blank = ['']
function lower(){
  var f = content;
  f.toLowerCase();
  content.value=f.value;
}
function replaceT(obj){
  obj.value=obj.value.toLowerCase();
  var curses=['nigger','fag','faggot'];
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
