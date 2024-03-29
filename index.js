const purchaseBtn = document.getElementById("purchase");
purchaseBtn.addEventListener("click", showError);

function showError(event) {
    const errText = document.getElementById("error")
    errText.textContent = "Something went wrong, please try again"
}
