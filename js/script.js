const form = document.querySelector(".contact-form form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.querySelector("#nama").value;
  const nim = document.querySelector("#nim").value;
  const mata_kuliah = document.querySelector("#mata_kuliah").value;
  const dosen = document.querySelector("#dosen").value;

  if (!nama) {
    alert("nama harus diisi!");
    return;
  }

  if (!nim) {
    alert("nim harus diisi!");
    return;
  }

  if (mata_kuliah === "null") {
    alert("Mata Kuliah harus diisi!");
    return;
  }

  if (dosen === "null") {
    alert("dosen harus diisi!");
    return;
  }

  alert(
    `Data diterima\nNama: ${nama}\nNIM: ${nim}\nMata Kuliah: ${mata_kuliah}\nDosen: ${dosen}`,
  );
});
