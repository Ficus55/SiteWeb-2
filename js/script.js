//Counter animation for section-counter
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 250;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }
    };
    updateCounter();
})


//Copyright year
let year = new Date().getFullYear() + ".";
let copyrightYear = document.querySelector(".copyright-year").innerHTML = year;


//Button to top
const toTop = document.querySelector(".ui-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTop.classList.add("ui-to-top-active");
    } else {
        toTop.classList.remove("ui-to-top-active");
    }
})


//Form validation
function nameTest(item) {
    return !/^([A-Za-z]+([ -_]?[A-Za-z0-9])*){3,15}$/.test(item.value);
}

function emailTest(item) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(item.value);
}

function phoneTest(item) {
    return !/^(\+\d)?[ -.]?\(?\d{3}\)?[ -.]?\d{3}[ -.]?\d{2}[ -.]?\d{2}$/.test(item.value);
}


//Remove warning on input
document.addEventListener("input", function (event) {
    if (event.target.nextElementSibling !== null) {
        if (event.target.nextElementSibling.closest(".error")) {
            event.target.nextElementSibling.closest(".error").remove();
        }
    }
});




//Get in Touch Footer Form
let contactForm = document.forms.contactForm;
let contactFormName = contactForm.name;
let contactFormEmail = contactForm.email;
let contactFormMessage = contactForm.message;
let messageMaxCharacters = contactFormMessage.getAttribute("maxlength");
let charactersLeftCounter = document.querySelector(".counter-symbols span");

charactersLeftCounter.innerHTML = messageMaxCharacters;
contactFormMessage.addEventListener("input", function () {
    charactersLeftCounter.innerHTML = messageMaxCharacters - contactFormMessage.value.length;
})


contactForm.addEventListener("submit", function (event) {
    if (nameTest(contactFormName)) {
        if (!contactFormName.nextElementSibling.closest(".error")) {
            contactFormName.insertAdjacentHTML('afterend', `<div class="error">Enter valid name please! <div>First symbol should be letter</div><div>Length from 3 to 15 symbols</div></div>`);
        }
        event.preventDefault();
    }
    if (emailTest(contactFormEmail)) {
        if (!contactFormEmail.nextElementSibling.closest(".error")) {
            contactFormEmail.insertAdjacentHTML('afterend', `<div class="error">Enter valid email please! <div>Example: email-name@domain.name</div></div>`);
        }
        event.preventDefault();
    }
    if (contactFormMessage.value.length <= 20) {
        if (!contactFormMessage.nextElementSibling.closest(".error")) {
            contactFormMessage.insertAdjacentHTML('afterend', `<div class="error">Message should be more than 20 symbols</div>`);
        }
        event.preventDefault();
    }
});


//Contact Page Get in Touch Form
let contactPageForm = document.forms.contactPageForm;
if (contactPageForm) {
    let contactPageFormFirstName = contactPageForm.firstName;
    let contactPageFormLastName = contactPageForm.lastName;
    let contactPageFormEmail = contactPageForm.email;
    let contactPageFormPhone = contactPageForm.phone;
    let contactPageFormMessage = contactPageForm.message;
    let contactPageFormMessageLimit = contactPageFormMessage.getAttribute("maxlength");
    let contactPageFormMessageCounter = document.querySelector(".counter-symbols-contact-page span");

    contactPageFormMessageCounter.innerHTML = contactPageFormMessageLimit;
    contactPageFormMessage.addEventListener("input", function () {
        contactPageFormMessageCounter.innerHTML = contactPageFormMessageLimit - contactPageFormMessage.value.length;
    });

    contactPageForm.addEventListener("submit", function (event) {
        if (nameTest(contactPageFormFirstName)) {
            if (!contactPageFormFirstName.nextElementSibling) {
                contactPageFormFirstName.insertAdjacentHTML('afterend', `<div class="error">Enter valid first name please! <div>First symbol should be letter</div><div>Length from 3 to 15 symbols</div></div>`);
            }
            event.preventDefault();
        }
        if (nameTest(contactPageFormLastName)) {
            if (!contactPageFormLastName.nextElementSibling) {
                contactPageFormLastName.insertAdjacentHTML('afterend', `<div class="error">Enter valid last name please! <div>First symbol should be letter</div><div>Length from 3 to 15 symbols</div></div>`);
            }
            event.preventDefault();
        }
        if (emailTest(contactPageFormEmail)) {
            if (!contactPageFormEmail.nextElementSibling) {
                contactPageFormEmail.insertAdjacentHTML('afterend', `<div class="error">Enter valid email please! <div>Example: email-name@domain.name</div></div>`);
            }
            event.preventDefault();
        }
        if (phoneTest(contactPageFormPhone)) {
            if (!contactPageFormPhone.nextElementSibling) {
                contactPageFormPhone.insertAdjacentHTML('afterend', `<div class="error">Enter valid phone in international format please! <div>Example: +1 234 567 89 99</div><div>Example: 123 456 78 99</div></div>`);
            }
            event.preventDefault();
        }
        if (contactPageFormMessage.value.length <= 20) {
            if (!contactPageFormMessage.nextElementSibling.closest(".error")) {
                contactPageFormMessage.insertAdjacentHTML('afterend', `<div class="error">Message should be more than 20 symbols</div>`);
            }
            event.preventDefault();
        }
    });
}





























