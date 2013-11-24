(function () {
    var ar = [1];
    for(var times=1; times<=100; times++) {
        for(var ar_i=0; ar_i<ar.length; ar_i++) {
            ar[ar_i] *= times;
        }
        for(var ar_j=0; ar_j<ar.length; ar_j++) {
            if(ar[ar_j] >= 10) {
                if(typeof ar[ar_j+1] !== 'number') {
                    ar.push(0);
                }
                ar[ar_j+1] += Math.floor(ar[ar_j] / 10);
                ar[ar_j]   = ar[ar_j] % 10;
            }
        }
    }
    
    
    var ans = 0;
    for(var i=0; i<ar.length; i++) {
        ans += ar[i];
    }
    console.log(ans);
})();