const cep = document.querySelector("#cep");

const showData = async (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};

cep.addEventListener("blur", async (e) => {
  let search = cep.value.replace("-", "");
  console.log(Number(search));
  if (search.length < 8 || isNaN(search)) {
    alert("Cep inválido");
    cep.value = "";
    return;
  }

  //cors - Cross Origin Resource Sharing
  const chocolate = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  const resultado = await fetch(
    `https://viacep.com.br/ws/${search}/json/`,
    chocolate
  );
  const json = await resultado.json();

  showData(json);
});
