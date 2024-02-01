const textArea = document.getElementById('text_to_summarize');
const submitButton = document.getElementById('submit-button')
const summarizedTextArea = document.getElementById('summary');

textArea.addEventListener('input', verifyTextLength)
submitButton.addEventListener('click', submitData)

submitButton.disabled = true;

function verifyTextLength(e) {
    const textarea = e.target

    if (textarea.value.length > 200 && textarea.value.length < 10000) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}