var History =[0, 0, 0, 0, 0, 0, 0, 0];
var Name=["    سبحان الله : ","الحمد لله : ","لا اله الا الله : ","الله اكبر : ","استغفر الله : ","سبحان الله و بحمده : ", "سبحان الله العظيم : ", "صلاة علي النبي : "]
var Times=0;
var histShowen=false;
var selectedValue=-1;
var Color="#fff";
var Menu=false;
function getSelectedValue(){ selectedValue= document.getElementById("tasbih").value;
document.getElementById("history").innerText=Name[selectedValue] + History[selectedValue];}
document.getElementById("root").innerText=Times;
function Increment(){
    if(selectedValue==-1){
    alert("من فضلك اختار تسبيحة");
    return;}
    Times++;
    document.getElementById("root").innerText=Times;
    History[selectedValue]++;
    document.getElementById("history").innerText=Name[selectedValue] + History[selectedValue];
}
function Clear(){Times=0;document.getElementById("root").innerText=Times;}
function Histoory(){
    histShowen =!histShowen;
    if(History[0]!=0){
        document.getElementById("sobhan").innerText=Name[0] + History[0];
    }
    if(History[1]!=0){
        document.getElementById("elhamd").innerText=Name[1] + History[1];
    }
    if(History[2]!=0){
        document.getElementById("la").innerText=Name[2] + History[2];
    }
    if(History[3]!=0){
        document.getElementById("allah").innerText=Name[3] + History[3];
    }
    if(History[4]!=0){
        document.getElementById("astaghfer").innerText=Name[4] + History[4];
    }
    if(History[5]!=0){
        document.getElementById("sobhanWaBehamdeh").innerText=Name[5] + History[5];
    }
    if(History[6]!=0){
        document.getElementById("sobhanAlazem").innerText=Name[6] + History[6];
    }
    if(History[7]!=0){
        document.getElementById("profit").innerText=Name[7] + History[7];
    }
}
document.getElementById("His1").addEventListener('click', ()=>{
    if(document.getElementById("His").style.display ==='none'){
        document.getElementById("His1").style.marginTop ='40px';
        // document.getElementById("His1").style.marginLeft ='150px';
        document.getElementById("His").style.display='flex';
    }
    else{document.getElementById("His").style.display ='none';
    // document.getElementById("His1").style.marginLeft ='0px';
    document.getElementById("His1").style.marginTop ='0px';
}
})

document.getElementById("Dark").addEventListener('click', ()=>{
    document.body.style.background = '#fff';
    document.body.style.background = '#fff';
    if(Color ==='#fff' ){
        Color="#057";
        // Color="rgb(17, 50, 69)";
        document.body.style.background = Color;
        document.getElementById("root").style.color='white';
        document.getElementById("tasbih").style.background='#057';
        document.getElementById("tasbih").style.color='#fff';
        document.getElementById("history").style.color='#fff';
        
    }
    else{Color='#fff'
        document.body.style.background = Color;
        document.getElementById("root").style.color='black';
        document.getElementById("tasbih").style.background='#fff';
        document.getElementById("tasbih").style.color='rgb(167, 42, 216)';
        document.getElementById("history").style.color='#000';
    }
})
document.getElementById("Menu").addEventListener('click', ()=>{
    if(Menu==false){
        document.getElementById("menumenu").style.display='flex';
        Menu=true;
    }
    else{ document.getElementById("menumenu").style.display='none';
    Menu=false;
}
})