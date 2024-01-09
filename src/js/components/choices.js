// import Accordion from 'accordion-js';
import Choices from "choices.js";

const defSelect = () => {
  let arrSelect = document?.querySelectorAll('.default');
  arrSelect.forEach((elem) => new Choices(elem))
}


defSelect()
