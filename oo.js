// Base Class
function Anime(Nome, Estudio, Estilo, ano) {
    this.Nome = Nome;
    this.Estudio = Estudio;
    this.Estilo = Estilo;
};

Anime.prototype.displayInfo = function() {
    console.log(`Nome: ${this.Nome}, Estudio: ${this.Estudio}, Estilo: ${this.Estilo} Ano: ${this.ano}`);
};


function OnePiece(Nome, Estudio, Estilo, ano) {
    Anime.call(this, Nome, Estudio, Estilo);
    this.ano = ano;
}

OnePiece.prototype = Object.create(Anime.prototype);
OnePiece.prototype.constructor = OnePiece;

OnePiece.prototype.displayInfo = function() {
    Anime.prototype.displayInfo.call(this);
};


function DragonBall(Nome, Estudio, Estilo, ano) {
    Anime.call(this, Nome, Estudio, Estilo);
    this.ano = ano;
}

DragonBall.prototype = Object.create(Anime.prototype);
DragonBall.prototype.constructor = DragonBall;

DragonBall.prototype.displayInfo = function() {
    Anime.prototype.displayInfo.call(this);
};


function Naruto(Nome, Estudio, Estilo, ano) {
    Anime.call(this, Nome, Estudio, Estilo);
    this.ano = ano;
}

Naruto.prototype = Object.create(Anime.prototype);
Naruto.prototype.constructor = Naruto;

Naruto.prototype.displayInfo = function() {
    Anime.prototype.displayInfo.call(this);
};

// Instanciando objetos
const anime1 = new OnePiece('One Piece', 'Toei Animation', 'Shonen', 1997);
const anime2 = new Naruto('Naruto', 'Studio Pierrot', 'Shonen', 2002);
const anime3 = new DragonBall('Dragon Ball', 'Toei Animation', 'Ação/Comédia', 1986);

// Exibindo informações
anime1.displayInfo();
anime2.displayInfo();
anime3.displayInfo();