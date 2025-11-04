// Toggle active filter button
document.querySelectorAll('.city-filter button').forEach(btn=>{
  btn.onclick = ()=> {
    document.querySelectorAll('.city-filter button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  }
});

// Search simulation
document.querySelector('.btn-search').onclick = ()=>{
  alert("Mencari penawaran terbaik... 🌴");
};

// ==== Modal Logic ====
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");

document.getElementById("openLogin").onclick = ()=> loginModal.style.display = "flex";
document.getElementById("openRegister").onclick = ()=> registerModal.style.display = "flex";

document.querySelectorAll(".close").forEach(x=>{
  x.onclick = ()=> document.getElementById(x.dataset.close).style.display = "none";
});

window.onclick = e=>{
  if(e.target.classList.contains("modal")) e.target.style.display = "none";
};

document.getElementById("goRegister").onclick = ()=>{
  loginModal.style.display="none"; registerModal.style.display="flex";
};
document.getElementById("goLogin").onclick = ()=>{
  registerModal.style.display="none"; loginModal.style.display="flex";
};

// ==== Button Login & Daftar ====
document.getElementById("loginBtn").onclick = ()=>{
  let email = loginEmail.value.trim();
  let pass = loginPass.value.trim();
  if(!email || !pass) return alert("Isi semua field!");
  if(!email.includes("@")) return alert("Email tidak valid!");
  if(pass.length<6) return alert("Password min 6 karakter!");
  alert("Login berhasil ✅");
  loginModal.style.display="none";
};

document.getElementById("regBtn").onclick = ()=>{
  let name = regName.value.trim();
  let email = regEmail.value.trim();
  let pass = regPass.value.trim();
  if(!name || !email || !pass) return alert("Isi semua field!");
  if(!email.includes("@")) return alert("Email tidak valid!");
  if(pass.length<6) return alert("Password min 6 karakter!");
  alert("Akun berhasil dibuat ✅");
  registerModal.style.display="none";
};
