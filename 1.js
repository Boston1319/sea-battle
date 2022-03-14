let n = 0; // счетчик прошлого хода(было попадание или нет)
let one;
let two;
let sizeIndicator= 0;
let middleIndicator;//в начало и середину корабля если 1 то начало

let lastBug = 0;
let forClick =0;

document.getElementById('button').onclick = ()=>location.reload();

let resultDiv = document.getElementById('result');
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function createShip(n,a) {
    let one = getRandom(0,9);
    let two = getRandom(0,9);
    if (!a[one][two].innerHTML) { //если пустая идем дальше
        if (n>0) {
            side = getRandom(1,4);
            // рандомим направление постройки
            if (side == 1) { // вверх
                if (one-n<-1) {
                    return createShip(n,a);
                } else {
                    for (let i = 0;i<n;i++) {
                        if (a[one-i][two].innerHTML) { 
                            return createShip(n,a);
                        } else if (a[one-i+1][two-1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one-i+1][two].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one-i+1][two+1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one-i-1][two-1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one-i-1][two].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one-i-1][two+1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one-i][two-1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one-i][two+1].innerHTML) {
                            return createShip(n,a);
                        }  
                    }
                    for (let i=0;i<n;i++) {
                        a[one-i][two].style.background = 'black';
                        a[one-i][two].innerHTML= '.';
                    }
                }
            } else if (side == 2) { // вниз
                if (one+n>10) {
                    return createShip(n,a);
                } else {
                    for (let i = 0;i<n;i++) {
                        if (a[one+i][two].innerHTML) { 
                            return createShip(n,a);
                        } else if (a[one+i+1][two-1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one+i+1][two].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one+i+1][two+1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one+i-1][two-1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one+i-1][two].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one+i-1][two+1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one+i][two-1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one+i][two+1].innerHTML) {
                            return createShip(n,a);
                        }  
                    }
                    for (let i=0;i<n;i++) {
                        a[one+i][two].style.background = 'black';
                        a[one+i][two].innerHTML= '.';
                    }
                }
            } else if (side == 3) { // влево
                if (two-n<-1) {
                    return createShip(n,a);
                } else {
                    for (let i = 0;i<n;i++) {
                        if (a[one][two-i].innerHTML) { 
                            return createShip(n,a);
                        } else if (a[one+1][two-i-1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one+1][two-i].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one+1][two-i+1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one-1][two-i-1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one-1][two-i].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one-1][two-i+1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one][two-i-1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one][two-i+1].innerHTML) {
                            return createShip(n,a);
                        }  
                    }
                    for (let i=0;i<n;i++) {
                        a[one][two-i].style.background = 'black';
                        a[one][two-i].innerHTML = '.';
                    }
                }
            } else if (side == 4) { // вверх
                if (two+n>10) {
                    return createShip(n,a);
                } else {
                    for (let i = 0;i<n;i++) {
                        if (a[one][two+i].innerHTML) { 
                            return createShip(n,a);
                        } else if (a[one+1][two+i-1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one+1][two+i].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one+1][two+i+1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one-1][two+i-1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one-1][two+i].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one-1][two+i+1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one][two+i-1].innerHTML) {
                            return createShip(n,a);
                        } else if (a[one][two+i+1].innerHTML) {
                            return createShip(n,a);
                        }  
                    }
                    for (let i=0;i<n;i++) {
                        a[one][two+i].style.background = 'black';
                        a[one][two+i].innerHTML= '.';
                    }
                }
            } 
        }
    } else {
        return createShip(n,a);
    }  
}

let num = 0;

for (let i=0; i<100; i++) {
 document.getElementById('game1').innerHTML +='<div class="block1"></div>';   
}
let q1 = document.getElementsByClassName('block1');
let b = [];
for (let i=-5;i<15;i++) {
    b[i] = [];
    for (let j=-5;j<15;j++) {
       b[i][j]= []; 
    }
}
for (let i=0;i<10;i++) {
    for (let j=0;j<10;j++) {
        b[i][j]= q1[num]; 
        num++;
    }
}

num=0;



for (let i=0; i<100; i++) {
 document.getElementById('game').innerHTML +='<div class="block"></div>';   
}
let q = document.getElementsByClassName('block');
let side; 
let myField = [];
for (let i=-5;i<15;i++) {
    myField[i] = [];
    for (let j=-5;j<15;j++) {
        myField[i][j]= []; 
    }
}
for (let i=0;i<10;i++) {
    for (let j=0;j<10;j++) {
        myField[i][j]= q[num]; 
        num++;
    }
}

num=0;



for (let i=0; i<100; i++) {
 document.getElementById('game2').innerHTML +='<div class="block2"></div>';   
}
let q2 = document.getElementsByClassName('block2');
let myField2 = [];
for (let i=-5;i<15;i++) {
    myField2[i] = [];
    for (let j=-5;j<15;j++) {
        myField2[i][j]= []; 
    }
}
for (let i=0;i<10;i++) {
    for (let j=0;j<10;j++) {
        myField2[i][j]= q2[num]; 
        num++;
    }
}



createShip(3,myField);
createShip(4,myField);
createShip(1,myField);
createShip(3,myField);
createShip(2,myField);
createShip(2,myField);
createShip(2,myField);
createShip(1,myField);
createShip(1,myField);
createShip(1,myField);



createShip(3,b);
createShip(4,b);
createShip(1,b);
createShip(3,b);
createShip(2,b);
createShip(2,b);
createShip(2,b);
createShip(1,b);
createShip(1,b);
createShip(1,b);


for (let i=-5;i<15;i++) {
    for (let j=-5;j<15;j++) {
        b[i][j].innerHTML= ''; 
   }
}


let biloPopadanie=0;
let centre = 0;

function checkWinLose () {
    let win=0;
    let lose=0;
    for (let i=0;i<10;i++) {
        for (let j=0;j<10;j++) {
            if (myField2[i][j].style.background=='red') {
                win++;
            }
            if (b[i][j].style.background=='red') {
                lose++;
            }
        }   
    }

    if (win==20) {
        resultDiv.innerHTML = "Вы победили";
        resultDiv.style.background='green';
    }
    if (lose==20) {
        resultDiv.innerHTML = "Вы проиграли";
        resultDiv.style.background='red';
    }
}
let hitCount = 0;
let hitCountComp = 0;

document.getElementById('game2').onclick = function (event) {
    if (hitCountComp!=0) return false;
    if (event.target.className == 'block2') {
       for (let i=0;i<10;i++){
           for (let j=0;j<10;j++) {
               if (myField2[i][j]==event.target) {
                   if (myField2[i][j].innerHTML) {
                       return false;
                   } else if (myField[i][j].style.background != 'black'){
                       myField2[i][j].innerHTML='2';
                       hitCount=0;
                       
                   }else if (myField[i][j].style.background == 'black') {
                       hitCount++;
                       myField2[i][j].style.background = 'red';
                       myField[i][j].style.background = 'red'; 
                       myField2[i][j].innerHTML='1';
                       biloPopadanie++;
                       if (!proverkaRazmera(myField,i,j) && forClick==0) {
                           haloMarkings(myField2,i,j);
                           biloPopadanie=0;
                           forClick=0;
                           centre=0;
                       } else if (biloPopadanie==1 && forClick==2) {
                           centre = 1;
                       } else if (biloPopadanie>=1 && forClick==1) {
                           forClick=0;
                       } else if (biloPopadanie==2 && centre==1 && forClick==2) {
                           forClick=0;
                       } else if (biloPopadanie==4 && centre==1) {
                            haloMarkings(myField2,i,j);
                            biloPopadanie=0;
                            forClick=0;
                            centre=0;   
                       }     
                   } 
                  
               }
           }
       }
       checkWinLose();
       if (hitCount ===0) {
        sizeIndicator=0;
        hitCountComp=1;
           
         timeout();
          
        
      }
    } 
}

function timeout () {
    setTimeout(()=> {
        stepComp();
        checkWinLose();
        if (hitCountComp!=0) {
            timeout();
        }
    },650);
}

function checkAvailability (arr,x,y) {
    if (arr[x][y].innerHTML) {
        return false;
    } else {
        return true;
    }
}

function proverkaRazmera (arr,x,y) {
    sizeIndicator=0;
    if ((x-1>-1) && arr[x-1][y].style.background == 'black') {
        sizeIndicator++;
        if (arr!=b) {
            forClick++;
        }
    }
    if ((x-1>-1) && (y+1<10) && arr[x-1][y+1].style.background == 'black') {
        sizeIndicator++;
        if (arr!=b) {
            forClick++;
        }
    }
    if ((x-1>-1) && (y-1>-1) && arr[x-1][y-1].style.background == 'black') {
        sizeIndicator++;
        if (arr!=b) {
            forClick++;
        }
    }
    if ((x+1<10) && arr[x+1][y].style.background == 'black') {
        sizeIndicator++;
        if (arr!=b) {
            forClick++;
        }
    }
    if ((x+1<10) && (y-1>-1) && arr[x+1][y-1].style.background == 'black') {
        sizeIndicator++;
        if (arr!=b) {
            forClick++;
        }
    }
    if ((x+1<10) && (y+1<10) && arr[x+1][y+1].style.background == 'black') {
        sizeIndicator++;
        if (arr!=b) {
            forClick++;
        }
    }
    if ((y+1<10) && arr[x][y+1].style.background == 'black') {
        sizeIndicator++;
        if (arr!=b) {
            forClick++;
        }
    }
    if ((y-1>-1) && arr[x][y-1].style.background == 'black') {
       sizeIndicator++;
        if (arr!=b) {
            forClick++;
        }
    }
    if (sizeIndicator>0) {
        return true;
    } else {
        return false;
    }
    
}

function haloMarkings(arr,x,y) {
    if (((x-1>-1) &&  arr[x-1][y].style.background == 'red') && (arr[x-1][y].innerHTML == '1')) {
        arr[x-1][y].innerHTML += '1';
        haloMarkings(arr,x-1,y);
    } else {
        arr[x-1][y].innerHTML = '2';
    }
    if (((x-1>-1) && (y+1<10) && arr[x-1][y+1].style.background == 'red') && (arr[x-1][y+1].innerHTML == '1')) {
        arr[x-1][y+1].innerHTML += '1';
        haloMarkings(arr,x-1,y+1);
    } else {
        arr[x-1][y+1].innerHTML = '2';   
    }
    if (((x-1>-1) && (y-1>-1) && arr[x-1][y-1].style.background == 'red') && (arr[x-1][y-1].innerHTML == '1')) {
        arr[x-1][y-1].innerHTML += '1';
        haloMarkings(arr,x-1,y-1);
    } else {
        arr[x-1][y-1].innerHTML = '2';
    }

    if (((x+1<10) && arr[x+1][y].style.background == 'red') && (arr[x+1][y].innerHTML == '1')) {
        arr[x+1][y].innerHTML += '1';
        haloMarkings(arr,x+1,y);
    } else {
        arr[x+1][y].innerHTML = '2';
    }
    
    if (((x+1<10) && (y+1<10) &&  arr[x+1][y+1].style.background == 'red') && (arr[x+1][y+1].innerHTML == '1')) {
        arr[x+1][y+1].innerHTML += '1';
        haloMarkings(arr,x+1,y+1);
    } else {
        arr[x+1][y+1].innerHTML = '2';
    }
    
    if (((x+1<10) && (y-1>-1) &&  arr[x+1][y-1].style.background == 'red') && (arr[x+1][y-1].innerHTML == '1')) {
        arr[x+1][y-1].innerHTML += '1';
        haloMarkings(arr,x+1,y-1);
    } else {
        arr[x+1][y-1].innerHTML = '2';
    }
    
    if (((y+1<10) && arr[x][y+1].style.background == 'red') && (arr[x][y+1].innerHTML == '1')) {
        arr[x][y+1].innerHTML += '1';
        haloMarkings(arr,x,y+1);
    } else {
        arr[x][y+1].innerHTML = '2';
    }
    
    if (((y-1>-1) && arr[x][y-1].style.background == 'red') && (arr[x][y-1].innerHTML == '1')) {
        arr[x][y-1].innerHTML += '1';
        haloMarkings(arr,x,y-1);
    } else {
        arr[x][y-1].innerHTML = '2';
    }
}
// 1 - точки с кораблями по которым попали
// 2 - промахи или ореол утопленника


    
function stepComp () {
    hitCountComp++;
    if (middleIndicator>1) {
        middleHit();
        return;
    }
    if (n==0) {
        one = getRandom(0,9);
        two = getRandom(0,9);
        let proverka = checkAvailability (b,one,two,);
        if (!proverka) {
            return stepComp();
        } else if ((b[one][two].style.background) == 'black' ){
            b[one][two].style.background = 'red';
            b[one][two].innerHTML = '1';
            if (proverkaRazmera(b,one,two)) {
                middleIndicator = sizeIndicator;
                n++;
            } else {
               haloMarkings(b,one,two);
            }
        } else {
            b[one][two].innerHTML = '2';
            hitCountComp=0;
        } 
    } else if (n==1) {
            if (lastBug==0) {
            side = getRandom(1,4);
            }
            lastBug=0;
            if (side == 1) {
                if (one-1>-1) {
                    if (!checkAvailability(b,one-1,two)) {
                        return stepComp();
                    } else if (b[one-1][two].style.background != 'black'){
                        b[one-1][two].innerHTML = '2';
                        hitCountComp=0;
                    } else {
                        b[one-1][two].style.background = 'red';
                        b[one-1][two].innerHTML = '1';
                        if (proverkaRazmera(b,one-1,two)) {
                            n++;
                        } else {
                            haloMarkings(b,one-1,two);
                            n=0;
                        }
                    }
                } else {
                    return stepComp()
                }
            } else if (side == 2) {
                if (one+1<10) {
                    if (!checkAvailability(b,one+1,two)) {
                        return stepComp();
                    } else if (b[one+1][two].style.background != 'black'){
                        b[one+1][two].innerHTML = '2';
                        hitCountComp=0;
                    } else {
                        b[one+1][two].style.background = 'red';
                        b[one+1][two].innerHTML = '1';
                        if (proverkaRazmera(b,one+1,two)) {
                            n++;
                        } else {
                            haloMarkings(b,one+1,two);
                            n=0;
                        }
                    }
                } else {
                    return stepComp();
                }
            } else if (side == 3) {
                if (two-1>-1) {
                    if (!checkAvailability(b,one,two-1)) {
                        return stepComp();
                    } else if (b[one][two-1].style.background != 'black'){
                        b[one][two-1].innerHTML = '2';
                        hitCountComp=0;
                    } else {
                        b[one][two-1].style.background = 'red';
                        b[one][two-1].innerHTML = '1';
                        if (proverkaRazmera(b,one,two-1)) {
                            n++;
                        } else {
                            haloMarkings(b,one,two-1);
                            n=0;
                        }
                    }
                } else {
                    return stepComp()
                }
            } else if (side == 4) {
                if (two+1<10) {
                    if (!checkAvailability(b,one,two+1)) {
                        return stepComp();
                    } else if (b[one][two+1].style.background != 'black'){
                        b[one][two+1].innerHTML = '2';
                        hitCountComp=0;
                    } else {
                        b[one][two+1].style.background = 'red';
                        b[one][two+1].innerHTML = '1';
                        if (proverkaRazmera(b,one,two+1)) {
                            n++;
                        } else {
                            haloMarkings(b,one,two+1);
                            n=0;
                        }
                    }
                } else {
                    return stepComp();
                }
            }
             
    } else if (n==2) {
        if (side ==1) {
            b[one-2][two].style.background = 'red';
            b[one-2][two].innerHTML = '1';
            if (proverkaRazmera(b,one-2,two)) {
                n++;
            } else {
                haloMarkings(b,one-2,two);
                n=0;
            }
        } else if (side ==2) {
            b[one+2][two].style.background = 'red';
            b[one+2][two].innerHTML = '1';
            if (proverkaRazmera(b,one+2,two)) {
                n++;
            } else {
                haloMarkings(b,one+2,two);
                n=0;
            }
        } else if (side ==3) {
            b[one][two-2].style.background = 'red';
            b[one][two-2].innerHTML = '1';
            if (proverkaRazmera(b,one,two-2)) {
                n++;
            } else {
                haloMarkings(b,one,two-2);
                n=0;
            }
       } else if (side ==4) {
            b[one][two+2].style.background = 'red';
            b[one][two+2].innerHTML = '1';
            if (proverkaRazmera(b,one,two+2)) {
                n++;
            } else {
                haloMarkings(b,one,two+2);
                n=0;
            }
       }
    } else if (n==3) {
        if (side==1) {
            b[one-3][two].style.background = 'red';
            b[one-3][two].innerHTML = '1';
            haloMarkings(b,one-3,two);
            n = 0;
        } else if (side==2) {
            b[one+3][two].style.background = 'red';
            b[one+3][two].innerHTML = '1';
            haloMarkings(b,one+3,two);
            n = 0;
        } else if (side==3) {
            b[one][two-3].style.background = 'red';
            b[one][two-3].innerHTML = '1';
            haloMarkings(b,one,two-3);
            n = 0;
        } else if (side==4) {
            b[one][two+3].style.background = 'red';
            b[one][two+3].innerHTML = '1';
            haloMarkings(b,one,two+3);
            n = 0;
        }
    }
}


let middleHitCount = 0;

function middleHit () {
    if (middleHitCount == 0) {
        side = getRandom(1,4);
        if (side ==1) {
            if (one-1>-1) {
                if (b[one-1][two].innerHTML) {
                    return middleHit();
                } else if (b[one-1][two].style.background == 'black') {
                    b[one-1][two].style.background = 'red';
                    b[one-1][two].innerHTML = '1';
                    if (proverkaRazmera (b,one-1,two)) {
                        middleHitCount++;
                        return;
                    } else {
                        side=2;
                        n=1;
                        middleIndicator=0;
                        lastBug = 1;
                    }
                } else {
                    b[one-1][two].innerHTML = '2';
                    hitCountComp=0;
                }
            } else {
                return middleHit();
            }
        } else if (side ==2) {
            if (one+1<10) {
                if (b[one+1][two].innerHTML) {
                    return middleHit();
                } else if (b[one+1][two].style.background == 'black') {
                    b[one+1][two].style.background = 'red';
                    b[one+1][two].innerHTML = '1';
                    if (proverkaRazmera (b,one+1,two)) {
                        middleHitCount++;
                        return;
                    } else {
                        side=1;
                        n=1;
                        middleIndicator=0;
                        lastBug = 1;
                    }
                } else {
                    b[one+1][two].innerHTML = '2';
                    hitCountComp=0;
                }
            } else {
                return middleHit();
            }
        } else if (side ==3) {
            if (two-1>-1) {
                if (b[one][two-1].innerHTML) {
                    return middleHit();
                } else if (b[one][two-1].style.background == 'black') {
                    b[one][two-1].style.background = 'red';
                    b[one][two-1].innerHTML = '1';
                    if (proverkaRazmera (b,one,two-1)) {
                        middleHitCount++;
                        return;
                    } else {
                        side=4;
                        n=1;
                        middleIndicator=0;
                        lastBug = 1;
                    }
                } else {
                    b[one][two-1].innerHTML = '2';
                    hitCountComp=0;
                }
            } else {
                return middleHit();
            }
        } else if (side ==4) {
            if (two+1<10) {
                if (b[one][two+1].innerHTML) {
                    return middleHit();
                } else if (b[one][two+1].style.background == 'black') {
                    b[one][two+1].style.background = 'red';
                    b[one][two+1].innerHTML = '1';
                    if (proverkaRazmera (b,one,two+1)) {
                        middleHitCount++;
                        return;
                    } else {
                        side=3;
                        n=1;
                        middleIndicator=0;
                        lastBug = 1;
                    }
                } else {
                    b[one][two+1].innerHTML = '2';
                    hitCountComp=0;
                }
            } else {
                return middleHit();
            }
        }
    } else {
        if (side==1) {
            b[one-2][two].style.background = 'red';
            b[one-2][two].innerHTML = '1';
            side = 2;
            n=1;
            middleIndicator=0; 
            middleHitCount=0;
            lastBug = 1;
        } else if (side==2) {
            b[one+2][two].style.background = 'red';
            b[one+2][two].innerHTML = '1';
            side = 1;
            n=1;
            middleIndicator=0;
            middleHitCount=0;
            lastBug = 1;
        } else if (side==3) {
            b[one][two-2].style.background = 'red';
            b[one][two-2].innerHTML = '1';
            side = 4;
            n=1;
            middleIndicator=0;
            middleHitCount=0;
            lastBug = 1;
        } else if (side==1) {
            b[one][two+2].style.background = 'red';
            b[one][two+2].innerHTML = '1';
            side = 3;
            n=1;
            middleIndicator=0;
            middleHitCount=0;
            lastBug = 1;
        }
    }
}
    



