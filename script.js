// Menampilkan ikon Feather
if (window.feather) {
  feather.replace();
}

// Fungsi tombol pesan
document.querySelectorAll(".order-button").forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    const namaMenu = this.dataset.menu;
    alert(
      "Kamu memilih " +
        namaMenu +
        ". Silakan hubungi pengelola untuk menyelesaikan pesanan.",
    );
  });
});
