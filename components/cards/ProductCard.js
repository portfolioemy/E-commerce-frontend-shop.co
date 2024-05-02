function ProductCard(container, product) {
  container.innerHTML += `
<div class="item">
<a href="#"><img src="${product.img}" alt="T-Shirt" /></a>
<p>${product.name}</p>
<div class="rating-container">
${starsCard(product.stars)}
  <div class="rating-number">4.5/5</div>
</div>
<div class="price-container">
  <div class="actual-price">${product.price}</div>
  <div class="real-price">${product?.realPrice ?? ""}</div>
  <div class="reduction">${product?.reduction ?? ""}</div>
</div>
</div>`;
}
