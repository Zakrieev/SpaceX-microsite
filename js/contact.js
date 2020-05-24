const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#surname");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const email = document.querySelector("#email");


document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const firstnameEmpty = validate(firstName.value.trim().length > 0, document.querySelector("#firstNameError"));
  const surnameEmpty = validate(lastName.value.trim().length > 0, document.querySelector("#surNameError"));
  const subjectEmpty = validate(subject.value.trim().length > 0, document.querySelector("#subjectError"));
  const messageEmpty = validate(message.value.trim().length > 0, document.querySelector("#messageError"));
  const emailEmpty = validate(email.value.trim().length > 0, document.querySelector("#emailError"));
  if(!emailEmpty) {
    const emailInvalid = validate(/\S+@\S+\.\S+/.test(email.value), document.querySelector("#invalidEmailError"));
  }

  if (
    firstnameEmpty ||
    surnameEmpty ||
    subjectEmpty ||
    messageEmpty ||
    emailEmpty ||
    emailInvalid
  ) {
    document.querySelector("#submitMessage").style.display = "none";
  } else {
    document.querySelector("#submitMessage").style.display = "block";
  }
});

const validate = (condition, element) => {
  if(condition) {
    element.style.display = "none";
    return false;
  } else {
    element.style.display = "block"
    return true;
  }
}