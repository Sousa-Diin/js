const catalogo = [
    {
      id: "1",
      desc: "Descoração Infantil",
      imagem: "kid-masc-blue-1.1.jpg",
      alt: "foto de aniversario para criança",
      genero: 'infantil'
    },
    {
      id: "2",
      desc: "Descoração Infantil",
      imagem: "kid-masc-blue-1.2.jpg",
      alt: "foto de aniversario para criança",
      genero: 'infantil'
    },
    {
      id: "3",
      desc: "Descoração Infantil",
      imagem: "kid-masc-blue-1.3.jpeg",
      alt: "foto de aniversario para criança",
      genero: 'infantil'
    },
    {
      id: "4",
      desc: "Descoração Infantil",
      imagem: "kid-masc-blue-1.4.jpeg",
      alt: "foto de aniversario para criança",
      genero: 'infantil'
    },
    {
      id: "5",
      desc: "Descoração Infantil",
      imagem: "kid-masc-blue-1.5.jpeg",
      alt: "foto de aniversario para criança",
      genero: 'infantil'
    },
    {
      id: "6",
      desc: "Descoração Infantil",
      imagem: "kid-masc-blue-1.6.jpeg",
      alt: "foto de aniversario para criança",
      genero: 'infantil'
    },
    {
      id: "7",
      desc: "Descoração Infantil",
      imagem: "kid-masc-blue-1.7.jpeg",
      alt: "foto de aniversario para criança",
      genero: 'infantil'
    },
    {
      id: "8",
      desc: "Descoração Infantil",
      imagem: "kid-masc-blue-1.8.jpeg",
      alt: "foto de aniversario para criança",
      genero: 'infantil'
    },
    {
        id: "9",
        desc: "Descoração Infantil",
        imagem: "kid-masc-blue-1.9.jpeg",
        alt: "foto de aniversario para criança",
        genero: 'infantil'
      },
      {
        id: "10",
        desc: "Descoração Infantil",
        imagem: "kid-masc-blue-1.10.jpeg",
        alt: "foto de aniversario para criança",
        genero: 'infantil'
      },
      {
        id: "11",
        desc: "Descoração Infantil",
        imagem: "adulto_balao_personalizado_blue_dourado.jpg",
        alt: "foto de festa para adulto",
        genero: 'adulto'
      },
      {
        id: "12",
        desc: "Descoração Infantil",
        imagem: "adulto_decoracao_Mini_Table_Rose_Golden.jpeg",
        alt: "foto de festa para adulto",
        genero: 'adulto'
      },
      {
        id: "13",
        desc: "Descoração Infantil",
        imagem: "adulto_Kit_Floral_Luxo.jpg",
        alt: "foto de festa para adulto",
        genero: 'adulto'
      },
      {
        id: "14",
        desc: "Descoração Infantil",
        imagem: "adulto_MIni_table_Preto_Floral.jpg",
        alt: "foto de festa para adulto",
        genero: 'adulto'
      },
  ];

  const idsCartDecoracoes = {};

  function desenharCart (idCart){
    
    const myCart = catalogo.find((p) => p.id === idCart);

    const containerCatalogo =
     document.getElementById('cart');

    const elementoAside = document.createElement("aside");
    const asideClasses = [
        "flex",
        "my-2",
        "margin-auto",
        "bround-lg",
        "shadow-lg"
    ];

    for (const asideClass of asideClasses){
        elementoAside.classList.add(asideClass);
    }

    
    const myCartao = `<img class="cart-1 bround-lg shadow-lg" src="./assets/${myCart.imagem}" 
    alt="${myCart.alt} - ID${myCart.id}">`;

    elementoAside.innerHTML = myCartao;
    containerCatalogo.appendChild(elementoAside);

  }

  function renderizarCatalogo(){
    const container = document.getElementById('cart');

    for (const myCart in catalogo){
       const foto =  `<aside class="flex  my-2 margin-auto bround-lg shadow-lg">
            <img class="cart-1 bround-lg shadow-lg" 
            src="./assets/${myCart.imagem}" 
            alt="${myCart.alt}  - ID${myCart.id}">
        </aside>`


        container.innerHTML += foto;
    }



  }

renderizarCatalogo();
