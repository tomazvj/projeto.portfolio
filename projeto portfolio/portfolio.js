
function mostrarsobremim(){
let res = document.getElementById('res');
res.innerHTML= "<p>-Me chamo João Victor Tomaz Nogueira Alves, tenho 21 anos e sou natural do Rio de Janeiro.<br> <br> -Sou bem novo nesse ramo da programação, embora desde pequeno eu sempre tenha me interessado por computadores e coisas que envolvam tencologia, como jogos, filmes e e desenhos que falavam sobre o gênero. <br><br>-Dentro desse ramo, inicialmente a parte que mais me interessou foi a de Front-end, mas depois tomei certo gosto pelo Back-end e hoje em dia meu desejo e me tornar um desenvolvedor fullstack.</p>"

let imagem = document.createElement('img');
imagem.src ='foto.joao.png'

res.append(imagem)

}

function mostrarcontato(){
let res = document.getElementById('res')
res.innerHTML = "<p>Você pode entrar em contato comigo por meio de: <br><br> -Celular: (21)994493308 <br><br> -Email: jtomaz777@yahoo.com <br><br> -Instagram: @tomazvj</p>"
}


function mostrarprojetos(){
 let res = document.getElementById('res')
 res.innerHTML = "<p>  1 projeto: <br> Meu primeiro projeto no mundo da programação, foi um contador feito com html, css e javaScript, no qual o usuário precisava colocar números e ao final do programa, ele diria quantos numeros foram adicionados .<br><br><br> 2 projeto: <br> Já meu segundo projeto, foi um verificador de idade, aonde o usário digitaria uma idade e o programa diria o sexo e a idade da pessoa escolhida. <br><br><br> 3 projeto: <br> Por fim, meu último projeto se trata de um site contando a história do sistema android, desde a sua fundação, até as atualizações mais atuais.</p> "
 let imagem = document.createElement('img');
imagem.src ='historia.android.png'
res.append(imagem)
}



function mostrarformacao(){
let res = document.getElementById('res')
res.innerHTML = '<p>-Possuo ensino médio completo e atualmente estou no segundo período do curso de: Análise e Desenvolvimento de Sistemas, pelo Cnetro Universitário Internacional(Uninter).<br><br>-Também possuo cursos na área de desenvovilento web e outro voltado para programação em python. <br><br> -Possuo inglês nivel avançado e espanhol nivel intermediário.</p>'
}