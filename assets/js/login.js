let psswrdLabel = document.querySelector('.showPassword')

function showPsswrd() {
  const psswrdInput = document.getElementById("password");

  if (psswrdInput.type === "password") {
    psswrdInput.type = "text";

    psswrdLabel.innerHTML = `
        <span class="material-symbols-outlined">
            visibility_off
        </span>`;
  } else {
    psswrdLabel.innerHTML = `
        <span class="material-symbols-outlined">
            visibility
        </span>`;
    psswrdInput.type = "password";
  }
  console.log('sim')
}

document.getElementsByName('SenhaC').type = 'text'