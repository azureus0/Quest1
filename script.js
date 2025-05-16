// Toggle liat isi password
const eyeicon = document.getElementById("eyeicon");
const password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    eyeicon.src = "eye-slash.png";
  } else {
    password.type = "password";
    eyeicon.src = "eye-open.png";
  }
};


// Efek tombol saat hover
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.setProperty("--x", `${x}px`);
    btn.style.setProperty("--y", `${y}px`);
  });
});


// Alert setelah form login disubmit
const form = document.querySelector(".login-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login berhasil!");
});
