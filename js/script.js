var url = 'https://discordapp.com/api/webhooks/650463378736939028/w9JfTi3d7rBTANqsxc1YP0JrSvCMsyY19lNhyjY3D1MgSyiEmiqiHi01oI69oIlfoN7H'
var url2 = 'https://discordapp.com/api/webhooks/650833892181278737/2wfOFSxsO4rLw5iAPOX4_Duni6JRUvBRA9XXmqK-5NPcB-rb6FuxIi6d_H0mZ6HWNxOF'
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
