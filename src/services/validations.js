// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

function validation(label) {
    if (label.length < 8) return false;

    return true;
}

exports.isEmpty = isEmpty;
exports.validation = validation;
