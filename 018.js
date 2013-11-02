
    var ans = 0;
    var array = [];
    
    function change(ele) {
        
        
        if (!ele.files.length) return;
    
        var file = ele.files[0];
        if (!/^text\//.test(file.type)) return;  // text/plain, text/html, ...
    
        var fr = new FileReader();
        fr.onload = function () {
            array = fr.result.split("\n");
            
            var len = array.length;
            for(var i=0;i<len;i++) {
                array[i] = array[i].split(" ");
                for(var j=0,len2=array[i].length;j<len2;j++) {
                    array[i][j]-=0;
                }
            }
            ans = selMax(0, 0);
            console.log(ans);
        };
        fr.readAsText(file);  // ファイルをテキストとして読み込む
    }
    
    
    function selMax(row, column) {
        if(array[row+1] === undefined){return array[row][column];}
        return array[row][column] + Math.max(selMax(row+1, column), selMax(row+1, column+1));
    }