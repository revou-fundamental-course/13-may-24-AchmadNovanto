function gantiTipe(evt, jenisSegitiga) {
    var i, tabcontent, tablink;

    //menyembunyikan class="tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }

    //saat klik button tab maka menampilkan class="tabcontent" dan menambahkan class "active"
    document.getElementById(jenisSegitiga).style.display = "block";
    evt.currentTarget.className += " active";

} //function Tab Navigation

window.onload = function() {
    gantiTipe(evt, 'tab1');
};

function luassegitiga() {
    a = document.getElementsByClassName("alas");
    t = document.getElementsByClassName("tinggi");

    var alas = a[0].value;
    var tinggi = t[0].value;
    var luas = 0.5 * alas * tinggi;

    if (alas && tinggi !== null) {
        document.getElementById("hasilLuas").innerHTML = "L = 1/2 x a x t <br> L = 1/2 x " + alas + " x " + tinggi + "<br> L = " + luas;
    } else {
        document.getElementById("hasilLuas").innerHTML = "";
    }

} //function hasil luas segitiga

function kelilingsegitiga() {
    p1 = document.getElementsByClassName("nilaiA");
    p2 = document.getElementsByClassName("nilaiB");
    p3 = document.getElementsByClassName("nilaiC");

    var k1 = p1[0].value;
    var k2 = p2[0].value;
    var k3 = p3[0].value;
    var keliling = parseFloat(k1) + parseFloat(k2) + parseFloat(k3);

    if (k1 && k2 && k3 !== null) {
        document.getElementById("hasilKeliling").innerHTML = "K = S1 + S2 + S3 <br> K = " + k1 + " + " + k2 + " + " + k3 + "<br> K = " + keliling;
    } else {
        document.getElementById("hasilKeliling").innerHTML = "";
    }


} //function keliling segitiga

function btnReset() {
    document.getElementById('inputText').value = '';
    document.getElementById('hasilLuas').value = '';

}