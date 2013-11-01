(function(){
    var ans = 0;
    var len = 0;
    var cha = 0;
    var num1,num2,num3;
    
    var num = {
        zero : 0,
        one : 3,
        two : 3,
        three : 5,
        four : 4,
        five : 4,
        six : 3,
        seven : 5,
        eight : 5,
        nine : 4,
        ten : 3,
        eleven : 6,
        twelve : 6,
        thirteen : 8,
        fourteen : 8,
        fifteen : 7,
        sixteen : 7,
        seventeen : 9,
        eighteen : 8,
        nineteen : 8,
        twenty : 6,
        thirty : 6,
        forty : 5,
        fifty : 5,
        sixty : 5,
        seventy : 7,
        eighty : 6,
        ninety : 6,
        hundred : 7,
        thousand : 8
    };
    
    for(var i=1;i<=100;i++){
        if(i <= 20){
            ans = 3+3+5+4+4+3+5+5+4+3+6+6+8+8+7+7+9+8+8+6;
            continue;
        }
        
        i+="";
        len = i.length;
        if(len === 2) {
            num1 = i.charAt(1);
            num2 = i.charAt(0);
            num1-=0; num2-=0;
            ans = ans + pos2(num1,num2);
        }else if(len === 3) {
            num1 = i.charAt(2);
            num2 = i.charAt(1);
            num3 = i.charAt(0);
            num1-=0; num2-=0; num3-=0;
            ans = ans + pos2(num1,num2) + pos3(num3,num2);
        }else {
            ans = ans + num.one + num.thousand;
        }
    }
    
    function pos1(n) {
        switch(n){
            case 0:
                cha =  num.zero;
                break;
            case 1:
                cha =  num.one;
                break;
            case 2:
                cha =  num.two;
                break;
            case 3:
                cha =  num.three;
                break;
            case 4:
                cha =  num.four;
                break;
            case 5:
                cha =  num.five;
                break;
            case 6:
                cha =  num.six;
                break;
            case 7:
                cha =  num.seven;
                break;
            case 8:
                cha =  num.eight;
                break;
            case 9:
                cha =  num.nine;
                break;
            default: console.log("error");
                break;
        }
        return cha;
    }
    
    function pos2(n1,n2) {
        switch(n2){
            case 0:
                cha =  pos1(n1);
                break;
            case 1:
                switch(n1){
                    case 0:
                        cha =  num.ten;
                        break;
                    case 1:
                        cha =  num.eleven;
                        break;
                    case 2:
                        cha =  num.twelve;
                        break;
                    case 3:
                        cha =  num.thirteen;
                        break;
                    case 4:
                        cha =  num.fourteen;
                        break;
                    case 5:
                        cha =  num.fifteen;
                        break;
                    case 6:
                        cha =  num.sixteen;
                        break;
                    case 7:
                        cha =  num.seventeen;
                        break;
                    case 8:
                        cha =  num.eighteen;
                        break;
                    case 9:
                        cha =  num.nineteen;
                        break;
                    default: console.log("error");
                        break;
                }
                break;
            case 2:
                cha =  num.twenty + pos1(n1);
                break;
            case 3:
                cha =  num.thirty + pos1(n1);
                break;
            case 4:
                cha =  num.forty + pos1(n1);
                break;
            case 5:
                cha =  num.fifty + pos1(n1);
                break;
            case 6:
                cha =  num.sixty + pos1(n1);
                break;
            case 7:
                cha =  num.seventy + pos1(n1);
                break;
            case 8:
                cha =  num.eighty + pos1(n1);
                break;
            case 9:
                cha =  num.ninety + pos1(n1);
                break;
            default:
                console.log("error");
                break;
        }
        return cha;
    }
    
    function pos3(n3,n2) {
        switch(n3){
            case 0: cha =  num.zero;
                break;
            case 1: cha =  num.one + num.hundred + 3;
                break;
            case 2: cha =  num.two + num.hundred + 3;
                break;
            case 3: cha =  num.three + num.hundred + 3;
                break;
            case 4: cha =  num.four + num.hundred + 3;
                break;
            case 5: cha =  num.five + num.hundred + 3;
                break;
            case 6: cha =  num.six + num.hundred + 3;
                break;
            case 7: cha =  num.seven + num.hundred + 3;
                break;
            case 8: cha =  num.eight + num.hundred + 3;
                break;
            case 9: cha =  num.nine + num.hundred + 3;
                break;
            default: console.log("error");
                break;
        }
        return (n2===0) ? cha-3:cha;
    }
    console.log(ans);
})();