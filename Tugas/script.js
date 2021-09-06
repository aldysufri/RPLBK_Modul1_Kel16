const cek = () => {
    const user = document.getElementById("user").value;
    var x = document.getElementById("en");
    x.disabled = true;
    document.getElementById("user").innerHTML = coba(user);
}

const coba = (p) => {
    var comp = Math.random();
    if (comp < 0.34) {
        comp = 'batu';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'gunting';
    } else {
        comp = 'kertas';
    }

    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'batu') {
        hasil = (comp == 'gunting') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'gunting') {
        hasil = (comp == 'batu') ? 'KALAH!' : 'MENANG!';
    } else if (p == 'kertas') {
        hasil = (comp == 'gunting') ? 'KALAH' : 'MENANG!';
    } else {
        hasil = 'PERIKSA INPUTAN ANDA!!!';
    }

    if (p == "") {
        document.getElementById("comp").innerHTML = "";
    } else {
        document.getElementById("comp").innerHTML = comp;
    }
     
    alert(hasil);
    console.log(hasil)
    sec = (hasil === 'MENANG!') ? hore() : ""

    async function hore() {
        let win = new Promise(function (Resolve) {
            setTimeout(() => {
                Resolve("Hore Kamu Menang!!!!!");
                window.open("https://www.youtube.com/watch?v=KXw8CRapg7k");
            }, 200);
        });
        document.getElementById("hore").innerHTML = await win;
    }

}