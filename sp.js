function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let error = document.getElementById("errorMsg");

  error.innerHTML = "";

  if (user === "" || pass === "") {
    error.innerHTML = "Isi semua dulu!";
    return;
  }

  // login langsung (simple)
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("shopPage").style.display = "block";
}

function logout() {
  document.getElementById("loginPage").style.display = "flex";
  document.getElementById("shopPage").style.display = "none";
}

function showMenu(menu) {
  let all = document.getElementsByClassName("menu-content");

  for (let i = 0; i < all.length; i++) {
    all[i].style.display = "none";
  }

  document.getElementById(menu).style.display = "block";
}

/* CART */
let cart = [];

function addToCart(nama, harga) {
  let item = cart.find(i => i.nama === nama);

  if (item) {
    item.jumlah++;
  } else {
    cart.push({ nama, harga, jumlah: 1 });
  }

  renderCart();
}

function renderCart() {
  let list = document.getElementById("cartList");
  let total = 0;

  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.nama + " x" + item.jumlah + " = Rp " + (item.harga * item.jumlah);
    list.appendChild(li);

    total += item.harga * item.jumlah;
  });

  document.getElementById("totalHarga").textContent = total;
}