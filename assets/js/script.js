const generateButton = document.getElementById('generate-button');
const emailAddress = document.getElementById('email-address');
const emailTitle = document.getElementById('email-title');
const sourceMedia = document.getElementById('media-found');
const extraNotes = document.getElementById('extra-notes');
const defaultEmail = document.getElementById('default-email-body');
const resumeOption = document.getElementsByName('resume-option');
const final = document.getElementById('display-final');
const outputBox = document.getElementById('final-output');
const output = [];

generateButton.addEventListener('click', (e) => {

    let newEmail = defaultEmail.value;
    let sourceText = [];
    let notes = extraNotes.value ? true : false;
    let allData = [
        emailAddress.value,
        emailTitle.value,
        sourceMedia.value,
        extraNotes.value,
        newEmail
    ];
    
    for (let i = 0; i < resumeOption.length; i++) {
        if (resumeOption[i].checked) {
            var checkedResOpt = resumeOption[i];
        }
    }

    for (let i = 0; i < sourceMedia.length; i++) {
        sourceText.push(sourceMedia[i].innerHTML);
    }

    console.log(allData);

    const finalText = ``;

    newEmail = newEmail.replace('<position>', emailTitle.value);
    newEmail = newEmail.replace('<group>', sourceText[sourceMedia.value]);

    console.log(newEmail);

    final.style.display = "block";
    outputBox.innerHTML = newEmail;
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();