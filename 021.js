(function () {
    
    //refactoring to memorize
    function sumDiver(n) {
        var num = 0;
        for(var i=1; i<n; i++) {
            if(n % i === 0) num += i;
        }
        return num;
    }
    
    
    var ans = 0;
    var mem = 0;
    for(var i=2; i<=10000; i++) {
        mem = sumDiver(i);
        if(mem>10000 || mem === i) continue;
        if(sumDiver(mem) === i) {
            ans+=mem;
        }
    }
    console.log(ans);
})();