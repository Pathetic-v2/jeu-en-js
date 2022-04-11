let create_map = []
let position_player_y = 3;
let position_player_x = 3;
let direction_player = "../img/player_move_down.png";
/* Liste de valeur exclu pour le joueur */
let exclure = [30, 31];



/* Mes pnjs */ 
let pnj_1 = new pnj ("Amanda", "../img/player_move_down.png","../img/player_move_left.png","../img/player_move_right.png", "../img/player_move_up.png","../img/player_move_down.png", 4, 7, map_1.image, 30, "pnj_1")
let pnj_2 = new pnj ("Thierry", "../img/player_move_up.png","../img/player_move_left.png","../img/player_move_right.png", "../img/player_move_up.png","../img/player_move_down.png", 7, 7, map_1.image, 31, "pnj_2")
/* fin */

let image_map_actuelle = map_1.image
let table_map_actuelle = map_1.tableau
refresh()

document.addEventListener("keydown", move_player);

/* "value" correspond à la valeur du span à la position d'arrivée du joueur */
function obstacle(value, exclure){
  for(let i = 0 ; i < exclure.length ; i++){
    if(value == exclure[i]){
      return true;
    }
  }
  return false;
};



function move_player(e){
  for(let i = 0 ; i < create_map.length ; i++){
    for(let j = 0 ; j < create_map[i].length ; j++){
      if(create_map[i][j] == 2){
        position_player_y = i
        position_player_x = j
      }
    }
  }
  // console.log(position_player_y)
  // console.log(position_player_x)
  // left
  if(e.keyCode == 37){
    let un_obstacle = obstacle(create_map[position_player_y][position_player_x -1], exclure)
    if(create_map[position_player_y][position_player_x -1] != 1 && !un_obstacle ){
      position_player_x = position_player_x - 1 
    }
    direction_player = "../img/player_move_left.png"
  }
  // up
  if(e.keyCode == 38){
    let un_obstacle = obstacle(create_map[position_player_y - 1][position_player_x], exclure)
    if(create_map[position_player_y - 1][position_player_x] != 1 && !un_obstacle){
      position_player_y = position_player_y - 1
    }
    direction_player = "../img/player_move_up.png"
  }
  // right
  if(e.keyCode == 39){
    let un_obstacle = obstacle(create_map[position_player_y][position_player_x + 1], exclure) 
    if(create_map[position_player_y][position_player_x + 1] != 1 && !un_obstacle){
      position_player_x = position_player_x + 1
    }
    direction_player = "../img/player_move_right.png"
  }
  // down
  if(e.keyCode == 40){
    let un_obstacle = obstacle(create_map[position_player_y + 1][position_player_x], exclure)
    if(create_map[position_player_y + 1][position_player_x] != 1 && !un_obstacle){
      position_player_y = position_player_y + 1
      
    }
    direction_player = "../img/player_move_down.png"
  }
  change_map()

  if(image_map_actuelle == map_1.image){ /* Ces évènements ne se lance que sur la map1 */
    pnj_1.parler(e)
    pnj_2.parler(e)}

  evenement()
  refresh()
};


function change_map(){
  if(create_map[position_player_y][position_player_x] == 5){
    image_map_actuelle = map_2.image
    table_map_actuelle = map_2.tableau
    position_player_y = 19;
    position_player_x = 16;
  }
  if(create_map[position_player_y][position_player_x] == 6){
    image_map_actuelle = map_1.image
    table_map_actuelle = map_1.tableau
    position_player_y = 8;
    position_player_x = 1;
  }
  if(create_map[position_player_y][position_player_x] == 7){
    image_map_actuelle = map_3.image
    table_map_actuelle = map_3.tableau
    position_player_y = 17;
    position_player_x = 23;
  }
  if(create_map[position_player_y][position_player_x] == 8){
    image_map_actuelle = map_2.image
    table_map_actuelle = map_2.tableau
    position_player_y = 17;
    position_player_x = 1;
  }
}

function refresh(){
  create_map = []
  /* pnj_test sert à créer un pnj fixe sur la carte. Possible de le remplacer par "create_map" */
  pnj_test = create_map
  
  for (let i = 0; i < table_map_actuelle.length; i++){
    tampon = []
    for (let j = 0; j < table_map_actuelle[i].length; j++){
      tampon.push(table_map_actuelle[i][j])
    }
    create_map.push(tampon)
  }

  /* Pose les chiffres représentant le pnj sur la carte */
  create_map[position_player_y][position_player_x] = 2;
  pnj_1.creer()
  pnj_2.creer() 

  document.getElementById("map").remove()
  const div = document.createElement("div");
  div.setAttribute("id","map");
  document.body.appendChild(div);
  for (let i = 0; i < create_map.length; i++){
    for (let j = 0; j < create_map[i].length; j++){
      const span = document.createElement("span");
      if (create_map[i][j] == 2){
        span.setAttribute("id","img");
      }
      span.innerHTML = create_map[i][j]
      document.getElementById("map").appendChild(span);

      /* Apparition du pnj + condition pour qu'il n'apparaisse que sur la bonne carte. */
      if(image_map_actuelle == pnj_1.location){
        if (pnj_test[i][j] == pnj_1.chiffre){   
          span.setAttribute("id",pnj_1.identifiant);
          span.setAttribute("class", "pnj")
        }
      /* span.innerHTML = pnj_test[i][j] */
      /* document.getElementById("map").appendChild(span); */
      };

      if(image_map_actuelle == pnj_2.location){
        if (pnj_test[i][j] == pnj_2.chiffre){
          span.setAttribute("id",pnj_2.identifiant);
          span.setAttribute("class", "pnj")
        }
      /* span.innerHTML = pnj_test[i][j] */
      /* document.getElementById("map").appendChild(span); */
      };
      /* Fin de l'apparition du pnj */
      
      
    }
    
  }
 
  document.getElementById("map").style.backgroundImage = 'url('+image_map_actuelle+')';
  document.getElementById("img").style.backgroundImage = 'url('+direction_player+')';
 
  
  /* Pose le pnj si les conditions sont remplies. */
  pnj_1.pose_pnj();
  pnj_2.pose_pnj();

  
  
}