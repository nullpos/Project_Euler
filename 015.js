(function(){
    var x = 20;
    var y = 20;
    function kaijo(num){
        return (((num === 1) ? 1 : kaijo(num-1)) * num);
    }
    console.log(kaijo(x+y)/(kaijo(x)*kaijo(y)));
})();