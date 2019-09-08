
import { Component, Fragment } from 'react';

// components
import FormBlock from './../../../components/commons/form/index.jsx';

// provider
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';

const NODE = 'quote';
const SLOT = 'section_1';
// copy:
// forms
const copy = LangGenerateTree([NODE, SLOT], [
  'forms',
]);

class QuoteForm extends Component {
  state = {}

  props: {
    proxy: Object,
  }

  render () {
    const { proxy } = this.props;
    const {
      document,
      errors,
      form,
      handleBlur,
      handleChange,
      language,
      value,
      verbiage,
    } = proxy;

    return (
      <Fragment key={`${form.value}_form`}>
        {form.rows && form.rows.map((row, y) => {
          return <FormBlock key={`${form.value}_row_${y}`} proxy={proxy} copy={row} />;
        })}
      </Fragment>
    );
  }
}

export default QuoteForm;
