import Accordion from 'accordion-js';


export const AccordionLists = (names = [], params = {
  openOnInit: [0],
  // triggerClass: 'ac__tiger',
  triggerClass: 'ac__trigger',
  panelClass: 'ac__panel',
  activeClass: 'is-active',
}) => {
  for (const key in names) {
    // const accordionName = document?.querySelector(name);
    if (!document?.querySelector(names[key])) {
      continue;
    }
    new Accordion(names[key], params)
  }
}

