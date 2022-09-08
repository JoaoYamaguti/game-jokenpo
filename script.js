let ops = document.getElementsByName('ops')
let imgpl = document.getElementById('p1')
let clicavel = true

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
    if (!clicavel) {
        return;
    }
    clicavel = false
    let res = document.getElementById('res')
    let imgia = document.querySelector('img#ia')
    let p = document.createElement('p')

    let div_p1 = document.querySelector('.p1')
    let div_ia = document.querySelector('.ia')

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
                    p.innerHTML += 'DRAW!'
                    break;
                case 1:
                    p.innerHTML += 'YOU LOSE!'
                    break;
                case 2:
                    p.innerHTML += 'YOU WIN!'
                    break;
            }
        } else if (ops[1].checked){
            switch (opia) {
                case 1:
                    p.innerHTML += 'DRAW!'
                    break;
                case 2:
                    p.innerHTML += 'YOU LOSE!'
                    break;
                case 0:
                    p.innerHTML += 'YOU WIN!'
                    break;
            }
        } else if (ops[2].checked){
            switch (opia) {
                case 1:
                    p.innerHTML += 'YOU WIN!'
                    break;
                case 2:
                    p.innerHTML += 'DRAW!'
                    break;
                case 0:
                    p.innerHTML += 'YOU LOSE!'
                    break;
            }
        }

        div_p1.classList.add('p1Play')
        div_ia.classList.add('iaPlay')

    }, 2000);
    setTimeout(() => {
        div_p1.classList.remove('p1Play')
        div_ia.classList.remove('iaPlay')
        imgia.style.display = 'none'
        res.innerText = ' '
        clicavel = true
    }, 5000);
}