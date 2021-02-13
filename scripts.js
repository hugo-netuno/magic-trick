const baralho = [
  "./cartas/asp.png",
  "./cartas/2p.png",
  "./cartas/3p.png",
  "./cartas/4p.png",
  "./cartas/5p.png",
  "./cartas/6p.png",
  "./cartas/7p.png",
  "./cartas/8p.png",
  "./cartas/9p.png",
  "./cartas/10p.png",
  "./cartas/vp.png",
  "./cartas/dp.png",
  "./cartas/rp.png",
  "./cartas/aso.png",
  "./cartas/2o.png",
  "./cartas/3o.png",
  "./cartas/4o.png",
  "./cartas/5o.png",
  "./cartas/6o.png",
  "./cartas/7o.png",
  "./cartas/8o.png",
  "./cartas/9o.png",
  "./cartas/10o.png",
  "./cartas/vo.png",
  "./cartas/do.png",
  "./cartas/ro.png",
  "./cartas/asc.png",
  "./cartas/2c.png",
  "./cartas/3c.png",
  "./cartas/4c.png",
  "./cartas/5c.png",
  "./cartas/6c.png",
  "./cartas/7c.png",
  "./cartas/8c.png",
  "./cartas/9c.png",
  "./cartas/10c.png",
  "./cartas/vc.png",
  "./cartas/dc.png",
  "./cartas/rc.png",
  "./cartas/ase.png",
  "./cartas/2e.png",
  "./cartas/3e.png",
  "./cartas/4e.png",
  "./cartas/5e.png",
  "./cartas/6e.png",
  "./cartas/7e.png",
  "./cartas/8e.png",
  "./cartas/9e.png",
  "./cartas/10e.png",
  "./cartas/ve.png",
  "./cartas/de.png",
  "./cartas/re.png",
  "./cartas/coringa.png"
];


let playSet = [];
let cardSetTop = [];
let cardSetMiddle = [];
let cardSetBottom = [];
let grouped = [];
let turns = 0;

const trigger = () => {
  alert("Bem vindo ao jogo de magica!");
  alert("Escolha uma carta qualquer e diga em que fileira ela esta.");
  alert("Para escolher uma fileira clique nos circulos: roxo, vermelho ou verde");
  alert("vamos embaralhar e repetir até você escolher 3 vezes, então vamos advinhar a carta!");
  alert("você pode reiniciar a qualquer momento apertando a tecla F5");
  startSelect(baralho);
  setColumnTop(playSet);
  setColumnMiddle(playSet);
  setColumnBottom(playSet);
}

const check = (element, playSet) => {
  if (playSet.indexOf(element)==-1) playSet.push(element);
};

const startSelect = (array) => {
  for (playSet; playSet.length < 21;) {
    const number = Math.floor((Math.random() * 52) + 0);
    console.log('number ', number);
    const element = array[number];
    console.log(element);
    check(element, playSet);
  }
  // console.log(playSet);
  playSet.forEach((element, index) => {
    document.getElementById(index.toString()).src = element;
  });
};

const setColumnTop = (playSet) => {
  for (let index = 0; index < playSet.length; index+=3) {
    const element = playSet[index];
    cardSetTop.push(element);
  }
};
const setColumnMiddle = (playSet) => {
  for (let index = 1; index < playSet.length; index+=3) {
    const element = playSet[index];
    cardSetMiddle.push(element);
  }
};
const setColumnBottom = (playSet) => {
  for (let index = 2; index < playSet.length; index+=3) {
    const element = playSet[index];
    cardSetBottom.push(element);
  }
};
const unsetColumns = () => {
  cardSetTop = [];
  cardSetMiddle = [];
  cardSetBottom = [];
}

const showResult = (path) => {
  const magic = document.getElementById('magic');
  magic.src = path;
  console.log(magic);
}

const reSet = (grouped) => {
  if (turns === 3) {
    showResult(grouped[10]);
    return;
  }
  grouped.forEach((element, index) => {
    document.getElementById(index.toString()).src = element;
  });
  unsetColumns();
    setColumnTop(grouped);
    setColumnMiddle(grouped);
    setColumnBottom(grouped);
};

const clickTop = () => {
  console.log('top');
  grouped = [];
  console.log('empty',grouped);
  grouped = grouped.concat(cardSetMiddle, cardSetTop, cardSetBottom);
  console.log(grouped);
  turns++
  reSet(grouped);
  console.log(grouped);
};
const clickMiddle = () => {
  grouped = [];
  grouped = grouped.concat(cardSetBottom, cardSetMiddle, cardSetTop);
  console.log(grouped);
  turns++
  reSet(grouped);
};
const clickBottom = () => {
  grouped = [];
  grouped = grouped.concat(cardSetMiddle, cardSetBottom, cardSetMiddle);
  console.log(grouped);
  turns++
  reSet(grouped);
};

document.getElementById('purple').addEventListener("click", clickTop);
document.getElementById('red').addEventListener("click", clickMiddle);
document.getElementById('green').addEventListener("click", clickBottom);

window.onload = trigger;