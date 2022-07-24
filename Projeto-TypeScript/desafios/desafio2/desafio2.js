var profissao;
(function (profissao) {
    profissao[profissao["Padeiro"] = 0] = "Padeiro";
    profissao[profissao["Atriz"] = 1] = "Atriz";
})(profissao || (profissao = {}));
var pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: profissao.Atriz
};
var pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: profissao.Padeiro
};
var pessoa3 = {
    nome: 'Laura',
    idade: 32,
    profissao: profissao.Atriz
};
var pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    profissao: profissao.Padeiro
};
