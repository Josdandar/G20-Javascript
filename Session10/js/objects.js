/* Dado el siguiente lleva a cabo las las operaciones indicadas

const player = {
 score: 88888,
 level: 7,
 lives: 2,
 vitalEnergy: 1,
 isAlive: true,
};
 
console.log(jugador);
 
 
! 1 Jugador recibe un golpe crítico que le resta 25 puntos de energía vital "vital Energy"
Realizar código para llevar a cabo las operaciones
! 2 Si la energía vital del jugador es menor a 0 pasado "isAlive" = false
 Realizar código para llevar a cabo las operaciones
! 3 Revisamos nuestro jugador
 Realizar código para llevar a cabo las operaciones

  4  Si No está vivo pero tienen más vidas entonces -> Puntaje = 0, Vida -1, nivel = 0, energia vital = 100
 Realizar código para llevar a cabo las operaciones */

 const player = {
    score: 88888,
    level: 7,
    lives: 2,
    vitalEnergy: 1,
    isAlive: true,
   };

   function criticalHit(input){
    input.vitalEnergy = input.vitalEnergy - 25
    console.log(input.vitalEnergy)
   }

   function isplayerAlive(input, hit){
    if(input.vitalEnergy <= 0){
        input.isAlive = false
        console.log(input.isAlive)
        return player
    }
   }

   function playerStatus(isplayerAlivee){
    console.log()
   }

   console.log(criticalHit(player))
   console.log(isplayerAlive(player, criticalHit))