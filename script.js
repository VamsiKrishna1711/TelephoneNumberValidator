const phNum = document.getElementById("user-input");

const checkNum = document.getElementById("check-btn");

const clearNum = document.getElementById("clear-btn");

const result = document.getElementById("results-div");
checkNum.addEventListener("click", () => {
    const userValue = phNum.value.trim();

    if (!userValue) {
        alert("Please provide a phone number")
        return;
    }

    if (isValidPhn(userValue)) {
        result.textContent = `Valid US number: ${userValue}`;
        result.className = "result valid";
    } else {
        result.textContent = `Invalid US number: ${userValue}`;
        result.className = "result invalid";
    }
});

clearNum.addEventListener("click", () => {
    result.textContent = "";
    result.className = "result";
    phNum.value = "";
});

function isValidPhn(str) {
    const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)(\d{3})([\s-]?)(\d{4})$/;
    if (!pattern.test(str)) return false;

    if (str.includes("(") || str.includes(")")) {
        if (!(str.includes("(") && str.includes(")"))) {
            return false;
        }
        if (str.indexOf("(") > str.indexOf(")")) {
            return false;
        }
    }
    return true;
}