module.exports = function solveSudoku(matrix) {
  let nonPossibilities={},impossibleNumbers,emptyspaces=81,MaximpossibleNumber=0,solvenumber=0;
  let maxPoint=[0,0];
  let counter=0;
    while(emptyspaces>0){
      counter++;
      emptyspaces=0;
      for ( let vert=0; vert<matrix.length; vert++){
        for ( let horz=0; horz<matrix.length; horz++){
          if (matrix[vert][horz]===0){
            nonPossibilities={};    
            for (let i=0; i<9; i++){
              if (matrix[vert][i]>0){
                nonPossibilities[matrix[vert][i]]=true;
              }
              if (matrix[i][horz]>0){
                nonPossibilities[matrix[i][horz]]=true;
              }
            }
            for (let vertBox=Math.floor(vert/3)*3; vertBox<Math.floor(vert/3)*3+3; vertBox++){
                for (let horzBox=Math.floor(horz/3)*3; horzBox<Math.floor(horz/3)*3+3; horzBox++){
                    if(matrix[vertBox][horzBox]>0){
                      nonPossibilities[matrix[vertBox][horzBox]]=true;
                    }
                }
            }
            impossibleNumbers = Object.keys(nonPossibilities);
            //console.log(impossibleNumbers);
            if (impossibleNumbers.length>MaximpossibleNumber){
                MaximpossibleNumber=impossibleNumbers.length;
                for (let i=1; i<10; i++){
                    if(impossibleNumbers.indexOf(i.toString())<0){
                        solvenumber=i;
                    }
                }
                maxPoint=[vert,horz];  
            }
            if (impossibleNumbers.length===8){
              for (let i=1; i<10; i++){
                  if(impossibleNumbers.indexOf(i.toString())<0){
                      matrix[vert][horz]=i;
                  }
              }
            }
            else{
              emptyspaces++;
            }
          }
        }
      }
      if(emptyspaces>0){
        matrix[maxPoint[0]][maxPoint[1]]=solvenumber;
        maxPoint=[0,0];
        solvenumber=0;
        MaximpossibleNumber=0;
      }
      if(counter>200){
        break;
      }
    }
  //console.log(matrix);
  return module.exports=matrix;
}