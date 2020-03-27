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
  const fields = CheckFields(forms, activeStep) || [];

  return new Promise((resolve) => {
    fields.forEach((field) => {
      if (!document) {
        disabled = true;
      } else if (
        (
          !field['input_type'].includes('divider')
        ) &&
        (field.required && (document && document[field.key] === undefined))
      ) {
        disabled = true;
      }
    });
    resolve({
      allow: disabled,
      fields,
    });
  });
}
