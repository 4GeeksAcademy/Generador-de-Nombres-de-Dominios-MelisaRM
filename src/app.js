
let pronoun = ['nosotros', 'vosotros'];
let adj = ['grande', 'pequeño'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];


for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extensions.length; l++) {
        let domain = pronoun[i] + adj[j] + noun[k] + extensions[l];
        console.log(domain);
      }
    }
  }
}
