window.addEventListener("DOMContentLoaded", function() {
    var party = document.getElementById("party");

    party.addEventListener("change", function() {
        switch(party.selectedIndex) {
            case 0:
                document.body.style.backgroundColor = "#A9D7D1";
                break;
            case 1:
                document.body.style.backgroundColor = "#DC241F";
                break;
            case 2:
                document.body.style.backgroundColor = "#0087DC";
                break;
            case 3:
                document.body.style.backgroundColor = "#FAA61A";
                break;
            case 4:
                document.body.style.backgroundColor = "#6AB023";
                break;
            case 5:
                document.body.style.backgroundColor = "#BABABA";
                break;
    }
  });
});
