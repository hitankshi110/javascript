let txt = '';
function getVal(no){
    
    txt += no;
    console.log(txt);
    document.getElementById('no1').value = txt;
    

}
function getAns(){
    var t1 = document.getElementById('no1').value;
    var ans = eval(t1);
    document.getElementById('no1').value = ans;
    txt = '';
}
function getclear(){
    document.getElementById('no1').value = ' ';
}

function back(){
    var value=document.getElementById('no1').value
    document.getElementById('no1').value = value.substr(0,value.length-1);
    txt = '';
}
function sqrt(){
    var var1 = document.getElementById('no1').value;
    console.log(var1);
    var var2 = Math.sqrt(var1);
    document.getElementById('no1').value = var2;
    txt = '';
}