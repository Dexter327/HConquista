(function(){
    var app = angular.module('horario', []);
 
     app.controller('controleTurno', function(){
        this.horario = 1;
         
         this.setTurno = function(turno){
            this.horario = turno;
         };
         
         this.isTurno = function(tabAtivo){
             return this.horario === tabAtivo;
         };
         
     });   

})();

function dia(){
                var site = document.URL;
                var newSite = site.split('escolha.html').pop();
                if(newSite == '#diaBairro'){
                    showDia(1);
                }
                if(newSite == '#diaCentro'){
                    showDia(2);
                }
                if(newSite == '#diaBairroII'){
                    showDia(3);
                }
                if(newSite == '#diaCentroII'){
                    showDia(4);
                }
                
            }
            
function showDia(tipo){
    document.getElementById("local").style.display = "none";

    if(tipo == 1){    
        document.getElementById("refB").style.display = "block";
        document.getElementById("diaBairro").style.display = "block";
    }

    if(tipo == 2){
        document.getElementById("refC").style.display = "block";
        document.getElementById("diaCentro").style.display = "block";
    }

    if(tipo == 3){    
        document.getElementById("refBII").style.display = "block";
        document.getElementById("diaBairroII").style.display = "block";
    }

    if(tipo == 4){
        document.getElementById("refCII").style.display = "block";
        document.getElementById("diaCentroII").style.display = "block";
    }
}