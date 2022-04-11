function evenement(){
    if(create_map[position_player_y][position_player_x -1])
    if(position_player_x == 2 && position_player_y == 3){
      /* alert("Evenement !") */
      };
    if(position_player_x == 0 && position_player_y == 8){ /* && current_map == "xx" */
      /* alert("Sortie !") */
    }
  };

  /* position_x et position_y désigne l'emplacement du pnj sur la carte. */
  /* /!\ Transformer les orientations du personnage en tableau */
class pnj{
  constructor(nom, image, left, right, up, down, position_x, position_y, image_map_ou_il_apparait, chiffre, identifiant){
    this.nom = nom;
    this.image = image;
    this.left = left;
    this.right = right;
    this.up = up;
    this.down = down;
    this.position_x = position_x;
    this.position_y = position_y;
    this.location = image_map_ou_il_apparait;
    this.chiffre = chiffre;
    this.identifiant = identifiant
  }
  pose_pnj(){
    if(image_map_actuelle == this.location){
    document.getElementById(this.identifiant).style.backgroundImage = 'url('+this.image+')'};
  }

  creer(){
    if(image_map_actuelle == this.location){
      pnj_test[this.position_x][this.position_y] = this.chiffre};
  }

  parler(e){
    if(e.keyCode == 32){
      if(direction_player == "../img/player_move_left.png"){ /* left */
        if(create_map[position_player_y][position_player_x -1] == this.chiffre){
          this.image = this.right;
          console.log("Oui, je suis", this.nom, " je regarde à droite")
        }
      }else if(direction_player == "../img/player_move_right.png"){ /* right */
        if(create_map[position_player_y][position_player_x + 1] == this.chiffre){
          this.image = this.left;
          console.log("Oui, je suis", this.nom, " je regarde à gauche")
        }
      } else if(direction_player == "../img/player_move_up.png"){ /* up */
          if(create_map[position_player_y - 1][position_player_x] == this.chiffre){
            this.image = this.down;
            console.log("Oui, je suis", this.nom, " je regarde en bas")
          }
      } else if(direction_player == "../img/player_move_down.png"){ /* down */
          if(create_map[position_player_y + 1][position_player_x] == this.chiffre){
            this.image = this.up;
            console.log("Oui, je suis", this.nom, "je regarde en haut")
          }
      }
    } 
    
  }


}



