class Pokemon{
  constructor(name, number, type){
    this.name = name;
    this.number = number;
    this.type = type ;
  }

  static responseToHTML(text){
  return (`
  <div>
    <p>name : ${text.id}.  </p>
    <p>number : ${text.name}. </p>
    <p>type : ${text.types[0].type.name}. </p>
  </div>
  `)
}

  PokemonToHTML(){
    return (
    `<div>
      <p>name : ${this.name}.  </p>
      <p>number : ${this.number}. </p>
      <p>type : ${this.type}. </p>
      <p>habits : ${this.habits}. </p>
    </div>
    `);
  }


}


/*(`
<div>
  <p>name : ${this.name}.  </p>
  <p>number : ${this.number}. </p>
  <p>type : ${this.type}. </p>
  <p>habits : ${this.habits}. </p>
</div>
`)
*/
