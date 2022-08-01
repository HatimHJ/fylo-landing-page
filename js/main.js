const email = document.querySelectorAll("#email");
const emailbtn = document.querySelectorAll("#submit");
const form = document.querySelector("form.grid");

emailbtn.forEach((btn, i) => {
	btn.onclick = (e) => {
		e.preventDefault();
		if (email[i].value === "") {
			email[i].nextElementSibling.textContent = "Please Enter Your Email";
			email[i].classList.remove("success-border");
			email[i].classList.add("error-border");
			email[i].nextElementSibling.style.height = "17px";
		}
		// email Validation
		else if (!ValidateEmail(email[i].value)) {
			email[i].nextElementSibling.textContent = "Please Check Your Email";
			email[i].classList.remove("success-border");
			email[i].classList.add("error-border");
			email[i].nextElementSibling.style.height = "17px";
		} else {
			email[i].classList.remove("error-border");
			email[i].classList.add("success-border");
			email[i].nextElementSibling.style.height = "0px";
		}
	};
});

// ==============================
// validation function
// ==============================
function ValidateEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
		return true;
	}
	return false;
}
