(function () {
  const config = window.SAVIN_CONFIG || {};
  const products = Array.isArray(window.SAVIN_PRODUCTS) ? window.SAVIN_PRODUCTS : [];
  const grid = document.getElementById("productGrid");
  const number = String(config.whatsappNumber || "").replace(/\D/g, "");
  const placeholderNumber = "923000000000";

  function money(value) {
    const amount = Number(value) || 0;
    return "Rs. " + amount.toLocaleString("en-PK");
  }

  function whatsappUrl(message) {
    return "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
  }

  function askAbout(product) {
    if (!number || number === placeholderNumber) {
      alert("Demo setup: open config.js and replace the sample WhatsApp number with your own number before publishing.");
      return;
    }
    const message = "Assalam-o-Alaikum! I want to ask about " + product.name +
      " from " + (config.storeName || "SAVIN STORE") +
      ". Listed price: " + money(product.price) +
      ". Please confirm availability, final price and delivery charges.";
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  function renderProducts() {
    if (!grid) return;
    grid.innerHTML = "";
    products.forEach(function (product) {
      const card = document.createElement("article");
      card.className = "product";

      const art = document.createElement("div");
      art.className = "product-art";
      if (product.image) {
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name || "Product";
        img.loading = "lazy";
        img.onerror = function () { art.textContent = product.emoji || "✦"; };
        art.appendChild(img);
      } else {
        art.textContent = product.emoji || "✦";
      }

      const info = document.createElement("div");
      info.className = "product-info";
      const category = document.createElement("div");
      category.className = "product-category";
      category.textContent = product.category || "Featured";
      const title = document.createElement("h3");
      title.textContent = product.name || "Product name";
      const price = document.createElement("div");
      price.className = "price";
      price.textContent = money(product.price) + " ";
      if (product.demo) {
        const small = document.createElement("small");
        small.textContent = "demo price";
        price.appendChild(small);
      }
      const button = document.createElement("button");
      button.className = "button";
      button.type = "button";
      button.textContent = "Buy Now →";
      button.addEventListener("click", function () { askAbout(product); });
      // SAVIN STORE Add to Cart Button
const cartButton = document.createElement("button");
cartButton.className = "button add-to-cart";
cartButton.type = "button";
cartButton.textContent = "Add to Cart +";

cartButton.addEventListener("click", function () {
  const cart = JSON.parse(localStorage.getItem("savinCart") || "[]");

  const existing = cart.find(item => String(item.id) === String(product.id));

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id || product.name,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  localStorage.setItem("savinCart", JSON.stringify(cart));

  alert("Successfully added to cart ✔️");
});

      info.append(category, title, price, button, cartButton);
      card.append(art, info);
      grid.appendChild(card);
    });
  }

  function setupFooter() {
    const footerLink = document.getElementById("footerWhatsapp");
    if (footerLink) {
      if (number && number !== placeholderNumber) {
        footerLink.href = whatsappUrl("Assalam-o-Alaikum! I want to contact SAVIN STORE.");
        footerLink.target = "_blank";
        footerLink.rel = "noopener noreferrer";
      } else {
        footerLink.addEventListener("click", function (event) {
          event.preventDefault();
          alert("Open config.js and add your WhatsApp number before publishing.");
        });
      }
    }
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const opened = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(opened));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  renderProducts();
  setupFooter();
})();
