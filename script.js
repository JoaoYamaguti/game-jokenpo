let ops = document.getElementsByName('ops')
let imgpl = document.getElementById('p1')

function pedra() {
    imgpl.style.display = 'inline'
    imgpl.src = "imagens/pedra.png"
}
function papel(){
    imgpl.style.display = 'inline'
    imgpl.src = "imagens/papel.png"
}
function tesoura(){
    imgpl.style.display = 'inline'
    imgpl.src = "imagens/tesoura.png"
}

function jogar(){
    let res = document.getElementById('res')
    let p = document.createElement('p')
    p.setAttribute('id', 'res')
    p.innerHTML = 'JON ... '
    res.appendChild(p)
    setTimeout(() => {
        p.innerHTML += 'KEN ... '
    }, 1000);
    setTimeout(() => {
        p.innerHTML +='POH!!!<br>'
        
        let opia = 0

        if (ops[0].checked){
            switch (opia) {
                case 0:
                    p.innerHTML += 'Empatou!'
                    break;
                case 1:
                    p.innerHTML += 'Voçê Perdeu!'
                    break;
                case 2:
                    p.innerHTML += 'Voçê Ganhou!'
                    break
            }
        } else if (ops[1].checked){
            switch (opia) {
                case 1:
                    p.innerHTML += 'Empatou!'
                    break;
                case 2:
                    p.innerHTML += 'Voçê Perdeu!'
                    break;
                case 0:
                    p.innerHTML += 'Voçê Ganhou!'
                    break
            }
        } else if (ops[2].checked){
            switch (opia) {
                case 1:
                    p.innerHTML += 'Voçê Ganhou!'
                    break;
                case 2:
                    p.innerHTML += 'Empatou!'
                    break;
                case 0:
                    p.innerHTML += 'Voçê Perdeu!'
                    break
            }
        }
    }, 2000);

}