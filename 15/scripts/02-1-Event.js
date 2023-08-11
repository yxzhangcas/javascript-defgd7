window.onload = function() {
    let form = document.querySelector("form#shipping");
    form.onsubmit = function(event) {
        if (!isFormValid(this)) {
            event.preventDefault();
        }
    };
};