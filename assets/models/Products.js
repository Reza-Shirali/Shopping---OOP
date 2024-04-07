class Products {
  constructor(parent, products,cart) {
    this.parent = parent;
    this.products = products;
    this.cart = cart
    this.parent.addEventListener("click",this);
  }
  showProducts() {
    this.products.forEach((product) => {
      this.createCard(product);
    });
  }
  createCard(data) {
    const cardEl = document.createElement("div");

    const imgEl = this.productImage(data);
    const infoEl = this.productInfo(data);

    cardEl.innerHTML = imgEl;
    cardEl.innerHTML += infoEl;
    this.parent.append(cardEl);
  }
  productImage(data) {
    const { image, alt } = data;
    const imageJSX = `<img class="image__product" alt=${alt} src="${image}">`;
    return imageJSX;
  }
  productInfo(data) {
    const { id, name, price } = data;
    const infoJSX = `
        <div class="product__info">
            <h3 class="product__name">${name}</h3>
            <div class="wrapper__control">
                <span class="product__price">$${price}</span>
                <button class="product__btn" data-id=${id}>+</button>
            </div>
        </div>
    `;
    return infoJSX;
  }
  handleEvent() {
    const element = event.target
    if(element.tagName === "BUTTON"){
        this.addToCart(element.dataset.id)
    }
  }


  addToCart(id){
    const product = this.products.find((item)=> item.id === +id)
    this.cart.products.push(product)
    this.cart.showProducts()
  }


}

export { Products };
