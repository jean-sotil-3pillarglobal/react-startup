export function CheckFields (forms, activeStep) {
  let fields = [];

  forms.forEach((form, i) => {
    if (i <= activeStep) {
      form.rows.forEach((row) => {
        fields = [...fields, row.fields];
      });
    }
  });

  return fields[activeStep];
}

export function CheckNext (forms, activeStep, document) {
  let disabled = false;

  return new Promise((resolve) => {
    CheckFields(forms, activeStep).forEach((field) => {
      if (!document) {
        disabled = true;
      } else if (
        (
          !field['input_type'].includes('checkbox') &&
          !field['input_type'].includes('divider')
        ) &&
        (field.required && (document && !document[field.key]))
      ) {
        disabled = true;
      }
    });
    resolve(disabled);
  });
}
