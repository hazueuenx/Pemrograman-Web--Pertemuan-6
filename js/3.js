const form = document.querySelector(".contact-form form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.querySelector("#nama").value.trim();
  const alamat = document.querySelector("#alamat").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value;
  const mata_kuliah = document.querySelector("#mata_kuliah").value;
  const kampus = document.querySelector("#kampus").value.trim();

  const errMsg = document.getElementById("error-message");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailInput = document.querySelector("#email");

  if (!nama) {
    alert("Nama harus diisi!");
    return;
  }

  if (!alamat) {
    alert("Alamat harus diisi!");
    return;
  }

  if (!email) {
    alert("Email harus diisi!");
    return;
  }

  if (emailPattern.test(email)) {
    errMsg.style.display = "none";
  } else {
    errMsg.style.display = "block";
    errMsg.textContent = "Please enter a valid email address.";
    emailInput.style.border = "2px solid red";
  }

  if (!password) {
    alert("Passowrd harus diisi!");
  }

  if (mata_kuliah === "null") {
    alert("Mata Kuliah harus dipilih!");
    return;
  }

  if (!kampus) {
    alert("Kampus harus diisi!");
    return;
  }

  if (errMsg.textContent === "") {
    alert(
      `Data diterima\nNama: ${nama}\nAlamat: ${alamat}\nEmail: ${email}\nMata Kuliah: ${mata_kuliah}\nKampus: ${kampus}`,
    );
  }
});
