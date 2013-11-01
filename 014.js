(function(){
    var max = 1000000;
    var ans = {
        num : 0,
        chain : 0
    };
    var num = 0;
    var roop = 1;
    
    for(var i=2; i<=max; i++){
        num = i;
        while(num !== 1){
            num = (num % 2 === 0) ? (num/2) : (num * 3 + 1);
            roop++;
        }
        if(ans.chain<roop){
            ans.chain = roop;
            ans.num = i;
        }
        roop = 1;
    }
    
    console.log(ans.num+":"+ans.chain);
})();