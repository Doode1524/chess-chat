class Game {

    id: number
    name: string
    winner: string
    white_player: string
    black_player: string

    static all: Game[] = [];
  
    constructor(id: number, name: string, winner: string, white_player: string, black_player: string) {
      
      this.id = id;
      this.name = name;
      this.winner = winner;
      this.white_player = white_player;
      this.black_player = black_player;
  
      Game.all.push(this);
    }
  
    renderGame() {
      let gamesDiv = document.getElementById("recent-games");
  
      (gamesDiv as HTMLElement).innerHTML += `
              <li><strong>${this.name}</strong> Winner: <strong>${this.winner}</strong> </li><br/>
              `;
    }
  
    static recentGames = () => {
      fetch(`${BASE_URL}/recent`)
        .then((resp) => resp.json())
        .then((games) => {
          for (const game of games) {
            let g = new Game(game.id, game.name, game.winner, game.white_player, game.black_player); /// add players breaks?
            g.renderGame();
          }
        });
    };
  
    static startGame = () => {
      wp = null;
      bp = null;
  
      let gamesDiv = document.getElementById("recent-games");
  
      (gamesDiv as HTMLElement).innerHTML = "";
  
      Game.recentGames();
  
      console.log("start button clicked!");
  
      (newGameDiv as HTMLElement).innerText = "Please Select White Player";
  
      let wpArray = document.querySelectorAll("#select-btn");
      wpArray.forEach((w) => w.addEventListener("click", selectUser));
    };
  }
  