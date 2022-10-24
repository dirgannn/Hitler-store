const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("input");
const listing = document.querySelector("listing");

searchBtn.onclick = () => {
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");
};
cancelBtn.onclick = () => {
  searchBox.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
  listing.classList.remove("active");
};

window.addEventListener("scroll", function () {
  var header = document.querySelector(".yay-hh");
  var lol = document.querySelector(".container-fluid");
  var gatau = document.querySelector("#navbarNav");
  var cancel = document.querySelector(".cancel-btn");
  header.classList.toggle("sticky", window.scrollY > 0);
  lol.classList.toggle("sticky", window.scrollY > 0);
  gatau.classList.toggle("sticky", window.scrollY > 0);
  cancel.classList.toggle("sticky", window.scrollY > 0);
});

function buy(product_name, product_price) {
  const message = `Halo bang saya mau beli ${product_name} - ${product_price}`;
  const whatsapp = `https://wa.me/6282176615829?text=${message}`;
  open(whatsapp, "_blank");
}

function chat() {
  alert("Halo gan saya mau tanya nih...");
}

var terms = new Array();
var max = 6;

for (i = 1; i <= max; i++) {
  terms[i] = new Array();
}

terms[1]["search"] = "macbook air pro chip m2";
terms[1]["des"] = "MacBook Air Pro Chip M2";
terms[1]["lnk"] = "#produk";

terms[2]["search"] = "acer nitro 5";
terms[2]["des"] = "Acer Nitro 5";
terms[2]["lnk"] = "#produk";

terms[3]["search"] = "msi gf63 thin";
terms[3]["des"] = "Msi GF63 Thin";
terms[3]["lnk"] = "#produk";

terms[4]["search"] = "asus rog strix";
terms[4]["des"] = "Asus Rog Strix";
terms[4]["lnk"] = "#produk";

terms[5]["search"] = "Produk";
terms[5]["des"] = "Produk";
terms[5]["lnk"] = "#Produk";

terms[6]["search"] = "Promo";
terms[6]["des"] = "Promo";
terms[6]["lnk"] = "promo.html";

terms[6]["search"] = "lenovo ideapad gaming 3";
terms[6]["des"] = "Lenovo Ideapad Gaming 3";
terms[6]["lnk"] = "#produk";

function search() {
  var input = document.getElementById("searchbar").value.toLowerCase();
  var i = 0;
  var list = "";
  var pos = -1;

  if (input != "") {
    for (i = 1; i <= max; i++) {
      pos = terms[i]["search"].indexOf(input);

      console.log(terms[i]["search"] + pos);

      if (pos != -1) {
        list = list + '<a class="search_lnk" style="color:#e9e9e9; text-decoration:none; font-size:21px; font-family:"Poppins"; font-weight:600;" href="' + terms[i]["lnk"] + '">' + terms[i]["des"] + "</a>" + "<br>";
      }
      pos = -1;
    }

    console.log(list);

    if (list == "") {
      document.getElementById("listing").innerHTML = "";
      document.getElementById("listing").style.display = "none";
    } else {
      document.getElementById("listing").innerHTML = list;
      document.getElementById("listing").style.display = "block";
      document.getElementById("listing").style.background = "black";
      document.getElementById("listing").style.padding = "16px 30px";
      document.getElementById("listing").style.margin = "29px 165px";
      document.getElementById("listing").style.borderRadius = "10px";
      document.getElementById("listing").style.width = "197px";
      document.getElementById("listing").style.cursor = "pointer";
      document.getElementById("listing").style.position = "fixed";
    }
  }
}
document.getElementById("listing").style.color = "red";

function gantiBgHitam() {
  document.getElementById("listing").style.transition = "all 0.4s ease-in-out";
  document.getElementById("listing").style.background = "black";
}

function gantiBgAbu() {
  document.getElementById("listing").style.background = "#5b67a8";
}
