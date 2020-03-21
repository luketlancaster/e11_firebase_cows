const printToDom = (divId, text) => {
  $(`#${divId}`).html(text);
};

export default { printToDom };
