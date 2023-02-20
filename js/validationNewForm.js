function resetForm() {
    const firstNameInput = document.getElementById('firstName');
    const secondNameInput = document.getElementById('secondName');
    const blockInput = document.getElementById('block');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');

    const errorFirstName = document.getElementById('errorFirstName');
    const errorSecondName = document.getElementById('errorSecondName');
    const errorBlock = document.getElementById('errorBlock');
    const errorStartDate = document.getElementById('errorStartDate');
    const errorEndDate = document.getElementById('errorEndDate');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([firstNameInput, secondNameInput, startDateInput, endDateInput, blockInput], [errorFirstName, errorSecondName, errorStartDate, errorEndDate, errorBlock], errorsSummary);
}

function validateForm() {

    const firstNameInput = document.getElementById('firstName');
    const secondNameInput = document.getElementById('secondName');
    const blockInput = document.getElementById('block');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');

    const errorFirstName = document.getElementById('errorFirstName');
    const errorSecondName = document.getElementById('errorSecondName');
    const errorBlock = document.getElementById('errorBlock');
    const errorStartDate = document.getElementById('errorStartDate');
    const errorEndDate = document.getElementById('errorEndDate');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([firstNameInput, secondNameInput, startDateInput, endDateInput, blockInput], [errorFirstName, errorSecondName, errorStartDate, errorEndDate, errorBlock], errorsSummary);

    let valid = true;

    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Field is Required ";
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 60)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Field should have 2 - 60 characters "
    }

    if (!checkRequired(secondNameInput.value)) {
        valid = false;
        secondNameInput.classList.add("error-input");
        errorSecondName.innerText = "Field is Required ";
    } else if (!checkTextLengthRange(secondNameInput.value, 2, 60)) {
        valid = false;
        secondNameInput.classList.add("error-input");
        errorSecondName.innerText = "Field should have 2 - 60 characters "
    }

    if (!checkRequired(blockInput.value)) {
        valid = false;
        blockInput.classList.add("error-input");
        errorBlock.innerText = "Field is Required ";
    } else if (!checkTextLengthRange(blockInput.value, 1, 2)) {
        valid = false;
        blockInput.classList.add("error-input");
        errorBlock.innerText = "Field should have 1-2 characters "
    }

    let nowDate = new Date(),
        month = '' + (nowDate.getMonth() + 1)
    day = '' + nowDate.getDate(),
        year = nowDate.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    const nowString = [year, month, day].join('-');

    if (!checkRequired(startDateInput.value)) {
        valid = false;
        startDateInput.classList.add("error-input");
        errorStartDate.innerText = "Field is Required";
    } else if (!checkRequired(endDateInput.value)) {
        valid = false;
        endDateInput.classList.add("error-input");
        errorEndDate.innerText = "Field is Required";
    } else if (!checkDate(startDateInput.value)) {
        valid = false;
        startDateInput.classList.add("error-input");
        errorStartDate.innerText = "Correct field format: yyyy-MM-dd (i.e. 2000-01-01)";
    } else if (!checkDate(endDateInput.value)) {
        valid = false;
        endDateInput.classList.add("error-input");
        errorEndDate.innerText = "Correct field format: yyyy-MM-dd (i.e. 2000-01-01)";
    } else if (checkDateIfAfter(startDateInput.value, nowString)) {
        valid = false;
        startDateInput.classList.add("error-input");
        errorStartDate.innerText = "Date cannot be from the future";
    } else if (checkRequired(endDateInput.value) && checkDate(endDateInput.value) && !checkDateIfAfter(endDateInput.value, startDateInput.value)) {
        valid = false;
        endDateInput.classList.add("error-input");
        errorEndDate.innerText = "Date cannot be earlier than Start Date"
    }

    if (!valid) {
        errorsSummary.innerText = "Form has errors"
    }

    return valid;

}