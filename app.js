const btn = document.getElementById("btn-proximo");
const img = document.getElementById("img");
const texto = document.getElementById("texto-principal");

const slides = [
  {
    imagem: "img/van-gogh1.png",
    texto: "Quem foi Van Gogh? Vincent van Gogh foi um pintor holandês considerado um dos artistas mais importantes da história da arte...",
    fundo: "img/noite-estrelada.webp"
  },
  {
    imagem: "img/girassois.webp",
    texto: "Van Gogh pintou 'Girassóis', usando cores vibrantes e pinceladas únicas, mostrando seu estilo pós-impressionista.",
    fundo: "img/girassois.webp"
  },
  {
    imagem: "img/obra3.jpg",
    texto: "Ele enfrentou dificuldades pessoais, mas produziu mais de 2.000 obras, incluindo cerca de 900 pinturas reconhecidas mundialmente.",
    fundo: "img/obra3.jpg"
  }
];

let indice = 0;

btn.addEventListener("click", () => {
  indice++;
  if(indice >= slides.length) indice = 0; // volta ao primeiro slide
  img.src = slides[indice].imagem;
  texto.textContent = slides[indice].texto;
  document.body.style.backgroundImage = `url('${slides[indice].fundo}')`;
});