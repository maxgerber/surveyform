window.addEventListener("DOMContentLoaded", function() {
    var party = document.getElementById("partyvote");
    var button = document.getElementById("button");
    var otherBool = document.getElementById("othercheck");
    var otherText = document.getElementById("othertext");
    party.addEventListener("change", function() {
        switch(party.selectedIndex) {
            case 0:
                document.body.style.backgroundColor = "#A9D7D1";
                button.style.backgroundColor = "#A9D7D1";
                button.style.color = "black";
                break;
            case 1:
                document.body.style.backgroundColor = "#DC241F";
                button.style.backgroundColor = "#DC241F";
                button.style.color = "white";
                break;
            case 2:
                document.body.style.backgroundColor = "#0087DC";
                button.style.backgroundColor = "#0087DC";
                button.style.color = "white";
                break;
            case 3:
                document.body.style.backgroundColor = "#FAA61A";
                button.style.backgroundColor = "#FAA61A";
                button.style.color = "black";
                break;
            case 4:
                document.body.style.backgroundColor = "#6AB023";
                button.style.backgroundColor = "#6AB023";
                button.style.color = "white";
                break;
            case 5:
                document.body.style.backgroundColor = "#BABABA";
                button.style.backgroundColor = "#BABABA";
                button.style.color = "black";
                break;
    }
  });

  otherBool.addEventListener("change", function() {
     if ( !otherBool.checked ) {
         otherText.classList.add("hidden");
     } else {
         otherText.classList.remove("hidden");
     }
  });
});
