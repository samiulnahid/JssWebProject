import { Form } from '@sitecore-jss/sitecore-jss-react-forms';
import React from 'react';
import { sitecoreApiHost, sitecoreApiKey } from '../temp/config';
// import { withRouter } from 'react-router-dom';

// class FormDisplay extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <Form
//         form={this.props.fields}
//         sitecoreApiHost={sitecoreApiHost}
//         sitecoreApiKey={sitecoreApiKey}
//         onRedirect={(url) => this.props.history.push(url)}
//       />
//     );
//   }
// }

// export default withRouter(FormDisplay);

const JssReactForm = ({ fields, history }) => {
  return (
    <section className="sitecore__form">
      <Form
        form={fields}
        sitecoreApiHost={sitecoreApiHost}
        sitecoreApiKey={sitecoreApiKey}
        onRedirect={(url) => history.push(url)}
      />
    </section>
  );
};
export default JssReactForm;