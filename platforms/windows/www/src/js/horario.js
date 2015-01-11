var borda = "#6200E9 2px solid";
var desativado = "none";
var ativo = "block";


function selecao(turno){
    
    var objeto1 = document.getElementById('op1');
    var manha = document.getElementById('manha');

    var op2 = document.getElementById('op2');
    var tarde = document.getElementById('tarde');

    var op3 = document.getElementById('op3');
    var noite = document.getElementById('noite');
    
    if (turno == 1){
        objeto1.style.borderBottom = borda;
        manha.style.display = ativo;
        desativa(op2, tarde, op3, noite);
    }
    
    if (turno == 2){
        op2.style.borderBottom = borda;
        tarde.style.display = ativo;
        desativa(op1, manha, op3, noite);
    }
    
    if (turno == 3){
        op3.style.borderBottom = borda;
        noite.style.display = ativo;
        desativa(op1, manha, op2, tarde);
    }


}

function desativa(off1, obj1, off2, obj2){
    off1.style.borderBottom = desativado;
    obj1.style.display = desativado;
    off2.style.borderBottom = desativado;
    obj2.style.display = desativado;

}
