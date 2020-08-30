
var optDurum=false,opt="",sonuc=0;
//nesnelerin oluşturulması
var btnRakam=document.querySelectorAll(".btnRakam");//rakamlar
var gosterge=document.querySelector(".gosterge");//gösterge paneli
var btnOpt=document.querySelectorAll(".btnOpt");
var islem=document.querySelector(".islem");
var btnCE=document.querySelector(".btnCE");
var btnEsit=document.querySelector(".btnEsit");
var btnNokta=document.querySelector(".btnNokta");
//butona basıldı kontrolü . foreach ile tüm nesnelere olay atayalım
btnRakam.forEach(function (element) {

    element.onclick=function (e) {

        //baştaki 0 değerini kaldırıp ve opt basılıp basılmadığını kontrol etmek için
        if (gosterge.textContent==="0" || optDurum)
            gosterge.textContent="";

        //text nesnesini okuyup td içindeki değerle birleştiriyoruz
        gosterge.textContent+=this.textContent;
        optDurum=false;//+,- gibi işlemler yapıldıysa göstergeyi sıfırlaması gerekiyor.
    }
});

btnOpt.forEach(function (element) {
    element.onclick=function (e) {
        optDurum=true;
        var yeniOpt=this.textContent;
        islem.textContent=islem.textContent+" "+gosterge.textContent+" "+yeniOpt;
        switch (opt) {
            case "+":gosterge.textContent=(sonuc + Number(gosterge.textContent));break;
            case "-":gosterge.textContent=(sonuc - Number(gosterge.textContent));break;
            case "*":gosterge.textContent=(sonuc * Number(gosterge.textContent));break;
            case "÷":gosterge.textContent=(sonuc / Number(gosterge.textContent));break;
            default:break;}
        sonuc=Number(gosterge.textContent);
        opt=yeniOpt;
    }
});
btnCE.onclick=function (e) {
    gosterge.textContent="0";
    islem.textContent="";
    sonuc=0;
    opt="";
};
btnEsit.onclick=function (e) {
    islem.textContent="";
    optDurum=true;
    switch (opt) {
        case "+":gosterge.textContent=(sonuc + Number(gosterge.textContent));break;
        case "-":gosterge.textContent=(sonuc - Number(gosterge.textContent));break;
        case "*":gosterge.textContent=(sonuc * Number(gosterge.textContent));break;
        case "÷":gosterge.textContent=(sonuc / Number(gosterge.textContent));break;
        default:break;}
    sonuc=Number(gosterge.textContent);
    gosterge.textContent=sonuc;
    sonuc=0;
    opt="";
};
btnNokta.onclick=function (e) {
    if(!optDurum && !gosterge.textContent.includes("."))
    {
        gosterge.textContent+=".";
    }
    else if (optDurum)
    {
        gosterge.textContent="0";
    }
    if (!gosterge.textContent.includes("."))
    {
        gosterge.textContent+=".";
    }
    optDurum=false;
};