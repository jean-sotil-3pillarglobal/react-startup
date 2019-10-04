
import React, { Fragment } from 'react';

// components
import FormBlock from './../../../components/commons/form';

function QuoteForm (props: {
  proxy: Object,
}) {
  const {
    proxy,
  } = props;

  const { form } = proxy;

  return (
    <Fragment key={`${form.value}_form`}>
      {form.rows && form.rows.map((row, y) => {
        const key = `${form.value}_row_${y}`;
        return <FormBlock key={key} proxy={proxy} copy={row} />;
      })}
    </Fragment>
  );
}

export default QuoteForm;
