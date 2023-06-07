export const item = product => {
  return `
    <li class="product__item item">
      <div class="product__block js_product glass glass-m" id="${product.id}">

  
   
      <div class="product__block--inner">
 
     
      <p class="product__name js_product-name">${product.name}</p> 
      ${
        product.description[0].text.length > 0
          ? '<p class="text product__desc">' +
            product.description[0].text.slice(0, 80) +
            '...' +
            '</p>'
          : ''
      }
      

      <div class="product__btn-block">
      <a href="product-page.html?id=${
        product.id
      }" id="btn-1" class="btn product__btn first" style="margin: ${
    product.type == 'ring' || product.type == 'clothing' ? 'auto' : ''
  }">details</a>
      ${
        product.type == 'ring' || product.type == 'clothing'
          ? ''
          : '<button id="btn-2" class="btn product__btn second js_add-to-cart">buy</button>'
      }
     </div>
     <div class="product__img-box">
     <img src="${product.image}" alt="" class="product__block-img">
     <span class="product__price">$${product.price.toFixed(2)}</span>
     </div>
      </div>
     </div>
   </li>
    `;
};
