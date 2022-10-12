const list = document.getElementById("playersWaitingList");
const allPlayersRef = firebase.database().ref(`players`);

(function () {
    refreshWaitingList()
})();

function refreshWaitingList(){
 
    allPlayersRef.on("value", (snapshot) => {
        players = snapshot.val() || {}

        let itemClass = "";
        let listItems = "";

        // <tr class="active-row">
        //     <td>img</td>
        //     <td>name</td>
        // </tr>
        Object.keys(players).forEach((key) => {
            itemClass = (players[key].id == playerId) ? 'active-row' : 'listItem';

            listItems += `
                <tr id='${key}' class='${itemClass}'>
                    <td>${players[key].color}</td>
                    <td>${players[key].name}</td>
                </tr>
            `;
        });
        
        list.innerHTML = listItems;
    });   
    
}