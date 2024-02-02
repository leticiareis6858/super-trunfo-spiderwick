var carta1 = {
  nome: "River Troll",
  imagem:
    "https://static.wikia.nocookie.net/spiderwick/images/7/7a/River_troll.jpg",
  atributos: {
    ataque: 9,
    defesa: 10,
    magia: 4,
  },
};
var carta2 = {
  nome: "Common Ground Goblin",
  imagem:
    "https://i.pinimg.com/564x/39/4f/e6/394fe67fb57da7ab184c925afb2afb40.jpg",
  atributos: {
    ataque: 8,
    defesa: 7,
    magia: 2,
  },
};
var carta3 = {
  nome: "Male Wood Elf",
  imagem:
    "https://i.pinimg.com/236x/f9/6c/c6/f96cc6b035430b061a66563516e5f1f1.jpg",
  atributos: {
    ataque: 7,
    defesa: 7,
    magia: 6,
  },
};
var carta4 = {
  nome: "Female Wood Elf",
  imagem:
    "https://i.pinimg.com/236x/f5/db/99/f5db995056f578c4f1ae4285e6dc839e.jpg",
  atributos: {
    ataque: 7,
    defesa: 7,
    magia: 8,
  },
};
var carta5 = {
  nome: "Maple Hamadryad",
  imagem:
    "https://i.pinimg.com/236x/2b/a4/16/2ba4169099cfb3112eeb40d5b8d0c554.jpg",
  atributos: {
    ataque: 4,
    defesa: 3,
    magia: 8,
  },
};
var carta6 = {
  nome: "Orangutroll",
  imagem:
    "https://i.pinimg.com/236x/02/b4/fc/02b4fcbe370893266171ae53598a2b79.jpg",
  atributos: {
    ataque: 9,
    defesa: 9,
    magia: 2,
  },
};
var carta7 = {
  nome: "Spitting Gargoyle",
  imagem:
    "https://i.pinimg.com/236x/fd/88/0c/fd880c267375173adcafac95cd0a03de.jpg",
  atributos: {
    ataque: 9,
    defesa: 4,
    magia: 5,
  },
};
var carta8 = {
  nome: "Freshwater Nixie",
  imagem:
    "https://i.pinimg.com/236x/9a/8d/32/9a8d32e5e9fd7cc8ecd08be3012dc0d2.jpg",
  atributos: {
    ataque: 8,
    defesa: 6,
    magia: 8,
  },
};
var carta9 = {
  nome: "Mulgarath",
  imagem: "https://diterlizzi.com/wp-content/uploads/2017/05/Mulgarath.jpg",
  atributos: {
    ataque: 10,
    defesa: 10,
    magia: 10,
  },
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 9);
  cartaMaquina = cartas[numeroCartaMaquina];
  var numeroCartaJogador = parseInt(Math.random() * 9);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 9);
  }
  cartaJogador = cartas[numeroCartaJogador];
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
