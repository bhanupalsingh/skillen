function isPrime(n) {
     if (n <= 3){
        return n > 1
     }else if (n % 2 == 0 || n % 3 ==  0){
        return false
     }
     var i = 5
     while (i * i <= n){
       if (n % i == 0 || n % (i + 2) == 0){
            return false
       }
       i = i + 6;
     }
     return true
}

function isSafe(i,j,b,m,n,val){
        return (i >= 0 && i < m && 
                j >= 0 && j < n && 
                b[i][j] != "V" && b[i][j] == val) 
}


function DFS(i,j,b,m,n,val){
      rowNbr = [-1,0, 0,1]; 
      colNbr = [0,-1, 1,0]; 
      b[i][j] = "V";
      for(var k=0;k<4;k++){
        if (isSafe(i + rowNbr[k], j + colNbr[k], b,m,n,val)){
            DFS(i + rowNbr[k], j + colNbr[k], b,m,n,val) 
        }      
      }
      
}

function countValue(b,val,m,n){
    var count = 0;
    for(var i=0;i<m;i++){
      for(var j=0;j<n;j++){
        if(b[i][j] == val){
            DFS(i, j, b,m,n,val) 
            count += 1
        } 
      }
    }
     return count            
    
}

        
        
  
        

function main(input) {
  var lines = input.split("\n");
  var t = Number(lines[0]);
  var count  = 1;
  for (var x = 1; x <= t; x++) {
    
    var a = [];
    var mn = lines[count].split(" ");
    count++;
    var m = Number(mn[0]);
    var n = Number(mn[1]);

    for(var i=0;i<m;i++){
      a[i] = lines[count].split(" ");
      count++;
    }
    
    
    var b = [];
    
    for ( var i = 0; i < m; i++ ) {
      b[i] = []; 
    }
    for(var i=0;i<m;i++){
      for(var j=0;j<n;j++){
        if(isPrime(Number(a[i][j]))){
          b[i][j] = 'P';
        }else{
          b[i][j] = 'C';
        }
      }
    }

    console.log(countValue(b,'P',m,n),countValue(b,'C',m,n));

    //console.log(countValue(b,'C',m,n));
    // var acounter = 0;
    // var bcounter = 0;
    // b[0][0] = 1;
    // if(a[0][0] == 'C'){
    //   bcounter++;
    // }else{
    //   acounter++;
    // }

    // for(var i=1;i<n;i++){
    //   if(a[0][i] != a[0][i-1]){
    //     if(a[0][i] == 'P'){
    //       acounter++;
    //     }else{
    //       bcounter++;
    //     }
    //   }
    // }

    //console.log(b);



    
    //process.stdout.write(sum.toString());
    //process.stdout.write("\n");
  }
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function(input) {
  stdin_input += input;
});

process.stdin.on("end", function() {
  main(stdin_input);
});
