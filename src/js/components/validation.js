import { validateForms } from '../functions/validate-forms';


const rulesModal = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Заполните2 имя!',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!',
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];



const afterForm = () => {
};

validateForms('.form--modal', rulesModal, afterForm);


