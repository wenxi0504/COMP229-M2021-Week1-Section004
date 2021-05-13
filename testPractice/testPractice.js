
function removeSelectDefault() {
    var emptyBoxes = document.getElementsByTagName("select");
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
        
    }
}


function copyEntry1() {
    var entry1InputElements = document.querySelectorAll("#entry1 input");
    var entry2InputElements = document.querySelectorAll("#entry2 input");
    if (document.getElementById("sameEntry1").checked) {
        for (var i = 0; i < entry1InputElements.length; i++) {
            entry2InputElements[i + 1].value = entry1InputElements[i].value;
        }
        document.querySelector("#entry2 select").value = document.querySelector("#entry1 select").value;
    } else {
        for (var i = 0; i < entry1InputElements.length; i++) {
            entry2InputElements[i + 1].value = "";
        }
        document.querySelector("#entry2 select").selectedIndex = -1;

    }
}


function customvalidity()
{
    var namef = document.getElementById("firstnameinput");
    var namel = document.getElementById("lastnameinput");
    var address = document.getElementById("addressinput");
    var genderm = document.getElementById("genderinput");
    var phone1 = document.getElementById("phoheinput");
    var year1 = document.getElementById("yearinput");

    if (namef.validity.valueMissing  ) {
        namef.setCustomValidity("Please fill out this field.");
        namef.reportValidity();
    }
    if (namel.validity.valueMissing) {

        namel.setCustomValidity("Please fill out this field.");
        namel.reportValidity();
    }
    if (address.validity.valueMissing)
    {
        address.setCustomValidity("Please fill out this field.");
        address.reportValidity();
    }
    if (genderm.validity.valueMissing) {
        genderm.setCustomValidity("Please fill out this field.");
        genderm.reportValidity();

    }
    if (phone1.validity.valueMissing) {
        phone1.setCustomValidity("Please fill out this field.");
        phone1.reportValidity();
    }
    if (year1.validity.valueMissing) {
        year1.setCustomValidity("Please fill out this field.");
        year1.reportValidity();
    }
}



function createEventListeners() {
    var submit = document.getElementById("submitbutton");
    submit.addEventListener("click", customvalidity, false);
}



    var same = document.getElementById("sameEntry1");
    if (same.addEventListener) {
        same.addEventListener("click", copyEntry1, false);
    } else if (same.attachEvent) {
        same.attachEvent("onclick", copyEntry1);
    }

    function setUpPage() {
        removeSelectDefault();
        copyEntry1();
        customvalidity();
        createEventListeners();
    }

    

    if (window.addEventListener) {
        window.addEventListener("load", setUpPage, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", setUpPage);
    }




