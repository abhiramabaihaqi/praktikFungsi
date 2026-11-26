console.log("====================================================")

// Soal 1
function perkenalan(nama, kelas, hobi){
    console.log("Nama: "+nama);
    console.log("Kelas: "+kelas);
    console.log("Hobi: "+hobi);
}

perkenalan("Siti", "XRPL 10", "Nonton anime");
perkenalan("Yono", "TKJ 2", "Judol");
perkenalan("Johan", "XIPG", "Bersepeda");

// Soal 2
console.log("====================================================")

function luasPersegiPanjang(panjang, lebar){
    let luas = panjang*lebar;
    return luas;
}

function kelilingPersegiPanjang(panjang, lebar){
    let keliling = (2*panjang)+(2*lebar);
    return keliling;
} 

console.log("Luas Persegi Panjang: "+ luasPersegiPanjang(10,4) );
console.log("Keliling Persegi Panjang: "+kelilingPersegiPanjang(10, 4))

// Soal 3
console.log("====================================================")

function hitungRataRata(n1, n2, n3){
  return (n1+n2+n3)/3;
}

function tentukanPredikat(rata){
    if (rata >= 85){
       return "A";
    } else if (rata >= 75){
        return  "B";
    } else if (rata >= 60){
        return "C";
    } else {return "D"};
}

function cetakRapor(nama, n1, n2, n3){
    const rataRata = hitungRataRata(n1, n2, n3);
    const predikat = tentukanPredikat(rataRata);

    console.log("Nama: "+ nama);
    console.log("Rata rata: "+ rataRata.toFixed(2));
    console.log("Predikat: "+ predikat);
}

cetakRapor("Maulana", 80, 70, 28);
cetakRapor("Arif", 80, 90, 98);
cetakRapor("Tanaka", 90, 80, 100);

console.log("====================================================")