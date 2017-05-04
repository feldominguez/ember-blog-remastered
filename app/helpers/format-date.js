import Ember from 'ember';

export function formatDate(params, hash) {
    let start = hash.start;
    let maxLength = hash['max-length'];
    let inputText = params[0].toString();
    let outputText = '';

    if (inputText.length > maxLength) {
        outputText = inputText.substr(start, maxLength);
    } else {
        outputText = inputText;
    }


    return outputText;
}

export default Ember.Helper.helper(formatDate);