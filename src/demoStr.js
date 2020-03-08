module.exports = `var j = require("http-server");
var a = 1,b = 2,c = 3;  
function s (dd) {   
    if(a) return console.log("1"),bar(),null;
}


(function(a,b){
  console.log("input1= "+a),b();
})(b,function(){
  console.log("bbb");
  (function (a){
    console.log("intput2 a = " + a);
  })(c);
});

function f(a){
   var b = function(a){
      console.log(a);  
    };
    b(0);
}

exports.log = s;
`;
