// Tüm kayıtlar burada saklanacak
const kayitlar = [];

// Atık türüne göre puanlar
const puanlama = {
  yag: 5,
  tekstil: 3,
  pil: 2,
  elektronik: 6,
  kagit: 2,
  cam: 1,
  metal: 4,
  plastik: 2,
};

// Kayıt Ekleme Fonksiyonu
function kayitOl() {
  const ogrenciAdi = document.getElementById("ogrenci-adi").value.trim();
  const ogrenciNumara = document.getElementById("ogrenci-numara").value.trim();
  const ogrenciOkul = document.getElementById("ogrenci-okul").value.trim();

  // Validasyon Kontrolü
  if (!ogrenciAdi || !ogrenciNumara || !ogrenciOkul) {
    alert("Lütfen tüm alanları doldurunuz!");
    return;
  }

  alert("Kayıt başarıyla tamamlandı!");
}

// Atık Giriş Fonksiyonu
function veriGirisi() {
  const ogrenciAdi = document.getElementById("ogrenci-adi").value.trim();
  const ogrenciNumara = document.getElementById("ogrenci-numara").value.trim();
  const atikTuru = document.getElementById("atik-turu").value;
  const miktar = parseFloat(document.getElementById("miktar").value);
  const kayitYapan = document.getElementById("kayit-yapan").value.trim();

  // Validasyon Kontrolü
  if (!ogrenciAdi || !ogrenciNumara || !atikTuru || !miktar || !kayitYapan) {
    alert("Lütfen tüm alanları doldurunuz!");
    return;
  }

  // Puan Hesaplama
  const puan = puanlama[atikTuru] * miktar;

  // Kayıt Verisini Eklemek
  const yeniKayit = {
    tarih: new Date().toLocaleString(),
    ogrenciAdi,
    ogrenciNumara,
    atikTuru,
    miktar,
    puan,
    kayitYapan
  };

  kayitlar.push(yeniKayit);

  // Kaydı Tabloya Ekleme
  const kayitlarTablo = document.getElementById("kayitlar");
  const yeniSatir = document.createElement("tr");

  yeniSatir.innerHTML = `
    <td>${yeniKayit.tarih}</td>
    <td>${yeniKayit.ogrenciAdi}</td>
    <td>${yeniKayit.ogrenciNumara}</td>
    <td>${yeniKayit.atikTuru}</td>
    <td>${yeniKayit.miktar}</td>
    <td>${yeniKayit.puan}</td>
    <td>${yeniKayit.kayitYapan}</td>
  `;

  kayitlarTablo.appendChild(yeniSatir);

  // Toplam Atık Sayacını Güncelleme
  const toplamAtik = kayitlar.reduce((toplam, kayit) => toplam + kayit.miktar, 0);
  document.getElementById("toplam-atik").textContent = toplamAtik;

  // Formları Temizleme
  document.getElementById("veri-girisi-form").reset();
}

// Kaydolar Tablosunu Güncelle
function kayitlariGoruntule() {
  const kayitlarTablo = document.getElementById("kayitlar");
  kayitlarTablo.innerHTML = "";

  kayitlar.forEach(kayit => {
    const yeniSatir = document.createElement("tr");

    yeniSatir.innerHTML = `
      <td>${kayit.tarih}</td>
      <td>${kayit.ogrenciAdi}</td>
      <td>${kayit.ogrenciNumara}</td>
      <td>${kayit.atikTuru}</td>
      <td>${kayit.miktar}</td>
      <td>${kayit.puan}</td>
      <td>${kayit.kayitYapan}</td>
    `;

    kayitlarTablo.appendChild(yeniSatir);
  });
}

// Sayfa Yüklendiğinde Verileri Görüntüle
window.onload = function() {
  kayitlariGoruntule();
};
