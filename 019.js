(function () {
    var days_m = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    
    var uruu = 0;
    for(var i=1901; i<=2000; i++) {
        var div4   = (i % 4   === 0);
        var div100 = (i % 100 === 0);
        var div400 = (i % 400 === 0);
        
        if(div4 && div100 & !div400) {
            //not uruu
        } else if(div4) {
            // uruu
            uruu++;
        }
    }
    
    var all_days = 0;
    for(var i=0; i<days_m.length; i++) {
        all_days += days_m[i];
    }
    
    all_days = all_days * 100 + uruu;
    
    
    var ans = Math.floor(all_days / 7);
    console.log(ans);
})();