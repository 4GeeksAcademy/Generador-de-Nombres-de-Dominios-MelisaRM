document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generarBtn").addEventListener("click", generarDominios);
});

function generarDominios() {
  let pronoun = ['nosotros', 'vosotros'];
  let adj = ['grande', 'pequeño'];
  let noun = ['jogger', 'racoon'];
  let extensions = ['.com', '.net', '.us', '.io'];

  let resultado = '';

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          let domain = pronoun[i] + adj[j] + noun[k] + extensions[l];
          resultado += domain + '<br>';
        }
      }
    }
  }

  document.getElementById("resultado").innerHTML = resultado;
}

