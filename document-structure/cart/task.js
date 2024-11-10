const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

function addProduct(id, image, count) {
  const cartProduct = document.createElement('div');
  cartProduct.className = 'cart__product';
  cartProduct.dataset.id = id;
  cartProduct.innerHTML = `<img class="cart__product-image" src="${image}"><div class="cart__product-count">${count}</div>`;
  cartProducts.append(cartProduct);
}

products.forEach(product => {
  const productQuantityControlDec = product.querySelector('.product__quantity-control_dec');
  const productQuantityControlInc = product.querySelector('.product__quantity-control_inc');
  const productQuantityValue = product.querySelector('.product__quantity-value');
  const productAdd = product.querySelector('.product__add');

  productQuantityControlDec.addEventListener('click', () => {
    if (productQuantityValue.textContent > 1) {
      productQuantityValue.textContent--;
    }
  });

  productQuantityControlInc.addEventListener('click', () => {
    productQuantityValue.textContent++;
  });

  productAdd.addEventListener('click', () => {
    const image = product.querySelector('.product__image').src;
    const count = productQuantityValue.textContent;
    const id = product.dataset.id;
    const cartProductList = cartProducts.querySelectorAll('.cart__product');
    
    if (Array.from(cartProductList).findIndex(cartProduct => cartProduct.dataset.id === id) !== -1) {
      cartProductList.forEach(cartProduct => {
        if (cartProduct.dataset.id === id) {
          const cartProductCount = cartProduct.querySelector('.cart__product-count');
          const currentCount = Number(cartProductCount.textContent.trim());
          const addCount = Number(count.trim());
          cartProductCount.textContent = currentCount + addCount;
          return;
        }
      });
    } else {
      addProduct(id, image, count);
    }
  });
});