// Forms on this site have no server yet, so show a confirmation message instead of submitting.
document.querySelectorAll("form[data-demo]").forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var msg = form.querySelector(".form-msg");

    var pw = form.querySelector("#password");
    var confirm = form.querySelector("#confirmPassword");
    if (pw && confirm && pw.value !== confirm.value) {
      msg.className = "form-msg alert alert-danger mt-3";
      msg.textContent = "Passwords don't match. Type the same password in both fields.";
      return;
    }
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }
    msg.className = "form-msg alert alert-success mt-3";
    msg.textContent = form.dataset.demo;
    form.reset();
    form.classList.remove("was-validated");
  });
});
