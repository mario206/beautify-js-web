module.exports = `var j = require("http-server");
var a = 1,b = 2,c = 3;  
function s (dd) {   
    if(a) return console.log("1"),bar(),null;
}
(function(){
  console.log("aaa");
})(a,function(){
  console.log("bbb");
  (function (){
    console.log("ccc");
  })(a);
});
exports.log = s;
`;
