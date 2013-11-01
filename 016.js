(function(){
    var array = [1];
    var ans = 0;
    var tmp = 0;
    var len = 0;
    
    for(var i=0; i<1000; i++) {
        len = array.length;
        for(var j=len-1; j>=0; j--){
            array[j] *= 2;
            if(array[j] >= 10){
                array[j] -= 10;
                if(array[j+1] !== undefined){
                    array[j+1]++;
                } else {
                    array.push(1);
                }
            }
        }
    }
    for(var k=0; k<array.length; k++) {
        ans += array[k];
    }
    
    console.log(ans);
})();