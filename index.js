let squares = document.querySelectorAll("#table td");
start(squares);

function start(squares) {
  let y = 0;
  let show = document.getElementById("table");
  for (let square of squares) {
    square.addEventListener("click", function click() {
      this.textContent = ["x", "o"][y % 2];
      this.removeEventListener("click", click);
      y++;
      if (isVictory(squares) && this.textContent == "x") {
        show.textContent = "Победил игрок 1";
        // setTimeout(location.reload(), 3000);
        setTimeout(window.location.reload.bind(window.location), 1000);
      } else if (isVictory(squares) && this.textContent == "o") {
        show.textContent = "Победил игрок 2";
        setTimeout(window.location.reload.bind(window.location), 1000);
      } else if (y == 9) {
        show.textContent = "Ничья";
        setTimeout(window.location.reload.bind(window.location), 1000);
      }
    });
  }
}

function isVictory(squares) {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  for (let win of wins) {
    if (
      squares[win[0]].textContent == squares[win[1]].textContent &&
      squares[win[1]].textContent == squares[win[2]].textContent &&
      squares[win[0]].textContent != ""
    ) {
      return true;
    }
  }
  return false;
}
