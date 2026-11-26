function luasPersegi(sisi){
    sisi*sisi;
}

let luas1 = luasPersegi(5);
let luas2 = luasPersegi(8);

console.log("Luas persegi pertama: "+ luas1);
console.log("Luas persegi kedua: "+ luas2);
console.log("Jumlah kedua luas: "+ (luas1+luas2));

// Saat return dihapus hasil kedua persegi menjadi undefined dan jumlah keduanya menjadi NaN.
// karena pernyataan return mengubah pemanggilan fungsi menjadi nilai hasil perhitungannya.