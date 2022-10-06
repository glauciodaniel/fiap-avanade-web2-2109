const showProducts = async () => {
  //cors - Cross Origin Resource Sharing
  const chocolate = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  const resultado = await fetch(
    `https://dummyjson.com/products?limit=10`,
    chocolate
  );
  const json = await resultado.json();
  console.log(json.products);

  let total = 1;
  let produtosDOM = document.createElement("div");
  produtosDOM.classList.add("produtos");
  const products = json.products.some((item) => {
    total += 1;

    produtosDOM.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="${item.thumbnail}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>
    `;
    // console.log(total);
    // if (total == 10) {
    document.querySelector("body").appendChild(produtosDOM);
    // return true;
    // }
  });
};

showProducts();
