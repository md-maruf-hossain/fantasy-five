// common function
function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
}

const playerArray = [];

function getPlayer(playersName) {
  const olBody = document.getElementById("player-list");
  olBody.innerHTML = "";
  for (var i = 0; i < playersName.length; i++) {
    const name = playerArray[i].playerName;

    const ol = document.createElement("li");
    ol.innerHTML = `
    <ol>
    ${name}
    </ol>
    `;
    olBody.appendChild(ol);
  }
  return playersName;
}

function selectplayer(element) {
  const playerName = element.parentNode.children[0].innerText;
  const playersObject = {
    playerName: playerName,
  };
  if (playerArray.length < 5) {
    document.getElementById("selected-players").innerText = playerArray.length + 1;
  } else {
    alert("You cannot select more than 5 players");
    return;
    // olBody.innerHTML = "";
  }
  playerArray.push(playersObject);

  getPlayer(playerArray);
  // disable button
  event.target.disabled = true;
}

document.getElementById("btn-budget").addEventListener("click", function () {
  const playerTotalElement = getPlayer(playerArray);
  const playerTotalElementString = playerTotalElement.length;
  const playerTotal = parseFloat(playerTotalElementString);

  const playerPrice = getInputFieldValueById("player-price");
  const playerCost = playerTotal * playerPrice;

  const totalPlayerCost = document.getElementById("player-cost");
  totalPlayerCost.innerText = playerCost;
});

document.getElementById("btn-total-calculation").addEventListener("click", function () {
  // player expense
  const playerTotalElement = getPlayer(playerArray);
  const playerTotalElementString = playerTotalElement.length;
  const playerTotal = parseFloat(playerTotalElementString);

  const playerPrice = getInputFieldValueById("player-price");
  const playerCost = playerTotal * playerPrice;

  // manager and coach field
  const manager = getInputFieldValueById("manager-input");
  const coach = getInputFieldValueById("coach-input");

  // total calculation
  const managerAndCoachCost = manager + coach;
  const sumOfTotalCost = playerCost + managerAndCoachCost;

  const totalCost = document.getElementById("total-cost");
  totalCost.innerText = sumOfTotalCost;
});
