
function kelilingPersegi(sisi) {
  return 4 * sisi;
}

function cetakKeliling(sisi) {
  let hasil = kelilingPersegi(sisi);
  console.log('Persegi dengan sisi ' + sisi + ' memiliki keliling ' + hasil);
}

cetakKeliling(6);
cetakKeliling(10);

// Fungsi kelilingPersegi adalah non void karena terdapat return yang mengembalikan nilai fungsi.
// Fungsi cetakKeliling adalah void karena tidak ada nilai fungsi yang dikembalikan.