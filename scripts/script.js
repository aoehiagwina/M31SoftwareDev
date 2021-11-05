let button = document.getElementById("button");
let inputBox = document.getElementById("inputText");
let para = document.getElementById("Example");
let wpList = document.getElementById("wList");




let playerNames = [];
let weaponList = ["Sword ", "Spear ", "Arrow ", "Dagger"];

const player = {
    name:"", 
    weapon:[],
    bio:function(){
        para.innerHTML = alert(`Player Name: ${this.name}, and selected weapon is ${weapon[0]}`);
    }
};

let playerIndex = 1;
function userName(){
    player.name = inputBox.value + playerIndex;
    inputBox.value = "";
    playerIndex++; 
    para.innerHTML = "Please select weapon";
    selectWeapon();
}

function selectWeapon(){
    wpList.append(weaponList);
    player.weapon.push(inputBox.value);

    button.addEventListener('click', () =>{otherPlayer();})
}

let otherPlayer = "";
function nextPlayer(){
    para.innerHTML = "Enter Yes if another user or No if no other user";
    button.addEventListener('click', () =>{otherPlayer = inputBox.value;})
    if (otherPlayer == "Yes"){
        para.innerHTML = "Please enter other user name";
        button.addEventListener("click", () =>{ userName();})
    }
    else{
        player.bio();
    }

}

para.innerHTML = "Please enter user name";

button.addEventListener("click", () =>{ userName();})