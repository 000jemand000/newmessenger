
let cnt = 0;
let username;

function login(){
    username = document.getElementById("txbx_usrname").value + ":";
    //txfield.removeChild(document.getElementById("p1"));
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("messageSection").style.display = "block";
}

function sendMsg(){
    let msgList = document.getElementById("messages");
    let msgText = document.getElementById("txbx_eingabe").value;
    cnt++;
    let mkbox = document.createElement("ueberbox");
        mkbox.id = "box_" + cnt;
        msgList.appendChild(mkbox);
    let box = document.getElementById("box_" + cnt);
    let userLabel = document.createElement("user-label");
        userLabel.id="user_" + cnt;
        box.appendChild(userLabel);
    let message = document.createElement("message-box");
        message.id="message_" + cnt;
        box.appendChild(message);
        document.getElementById("user_" + cnt).innerHTML = username;
        document.getElementById("message_" + cnt).innerHTML = msgText;
        document.getElementById("txbx_eingabe").value = "";
}

function submitOnEnter(event){
    if(event.which === 13 && !event.shiftKey){
        event.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
        event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
    }
}

document.getElementById("txbx_eingabe").addEventListener("keypress", submitOnEnter);
