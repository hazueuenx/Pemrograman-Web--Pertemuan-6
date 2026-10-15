let form = document.querySelector(".contact-form form");
let provinsiDropdown = form.provinsi;
let kabupatenDropdown = form.kabupaten;
let kecamatanDropdown = form.kecamatan;

let jsonData;

fetch("../data/prov.json")
  .then((response) => response.json())
  .then(function (data) {
    jsonData = data;
    getProvinsi(jsonData);
  });

function getProvinsi(jsonData) {
  let out = "";
  out += `<option value="">Pilih Provinsi</option>`;
  for (let prov in jsonData) {
    out += `<option value="${prov}">${prov}</option>`;
  }

  provinsiDropdown.innerHTML = out;
}

provinsiDropdown.addEventListener("change", getKabupaten);

function getKabupaten() {
  if (kecamatanDropdown.value !== "") {
    kecamatanDropdown.disabled = true;
    kecamatanDropdown.value = "";
  }
  provinsi = provinsiDropdown.value;

  if (provinsi.trim() === "") {
    kabupatenDropdown.disabled = true;
    kabupatenDropdown.selectedIndex = 0;
    return false;
  }

  let kabupaten = jsonData[provinsi];
  let out = "";
  out += `<option value="">Pilih Kabupaten</option>`;

  for (let kab in kabupaten) {
    out += `<option value="${kab}">${kab}</option>`;
  }

  kabupatenDropdown.innerHTML = out;
  kabupatenDropdown.disabled = false;
}

kabupatenDropdown.addEventListener("change", getKecamatan);

function getKecamatan() {
  kabupaten = kabupatenDropdown.value;

  if (kabupaten.trim() === "") {
    kecamatanDropdown.disabled = true;
    kecamatanDropdown.selectedIndex = 0;
    return false;
  }

  let kecamatan = jsonData[provinsi][kabupaten];
  let out = "";
  out += `<option value="">Pilih Kecamatan</option>`;

  for (let kec of kecamatan) {
    out += `<option value="${kec.nama}">${kec.nama}</option>`;
  }

  kecamatanDropdown.innerHTML = out;
  kecamatanDropdown.disabled = false;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let kode_pos;
  kecamatan = kecamatanDropdown.value;
  let kecamatanArr = jsonData[provinsi][kabupaten];
  for (let kec of kecamatanArr) {
    if (kec.nama === kecamatan) {
      kode_pos = kec.kode_pos;
    }
  }

  alert(
    `Data diterima\nProvinsi: ${provinsi}\nKabupaten: ${kabupaten}\nKecamatan: ${kecamatan}\nKode Pos: ${kode_pos}`,
  );
});
