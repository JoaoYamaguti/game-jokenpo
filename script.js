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
    let imgia = document.querySelector('img#ia')
    let p = document.createElement('p')
    p.setAttribute('id', 'res')
    p.innerHTML = 'JAN... '
    res.appendChild(p)
    setTimeout(() => {
        p.innerHTML += 'KEN... '
    }, 1000);
    setTimeout(() => {
        p.innerHTML +='PON!!!<br>'
        
        let opia = Math.floor(Math.random() * (2 - 0 + 1)) + 0
        switch (opia) {
            case 0:
                imgia.src = 'imagens/pedra.png'
                break;
            case 1:
                imgia.src = 'imagens/papel.png'
                break;
            case 2:
                imgia.src = 'imagens/tesoura.png'
                break;
        }
        imgia.style.display = 'inline'
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
                    break;
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
                    break;
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
                    break;
            }
        }
    }, 2000);
    setTimeout(() => {
        imgia.style.display = 'none'
        res.innerText = ' '
    }, 5000);
}