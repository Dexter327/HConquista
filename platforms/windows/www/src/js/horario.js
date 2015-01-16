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
