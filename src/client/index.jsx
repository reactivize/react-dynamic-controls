require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
import React from 'react';
import ReactDOM from 'react-dom';
import R from 'ramda';
window.R2 = R; //hacketyhack
import dynamicControls from './lib/dynamicControls';


/**
 * @component dynamically inject form controls from json file
 * 
 */
export class App extends React.Component {

  //
  componentWillMount() {
    console.log('DynamicForm.js: start: componentDidMount');
    this.setState({ formdata: 'Waiting...' });

    window.fetch('http://localhost:3000/questions') // http://192.168.99.100:3000/questions docker ip
      .then(function (response) {
        // console.log('DynamicForm.js: fetch.then, response: ', response);
        return response.json();
      }).then(function (jsObj) {
        // console.log('DynamicForm.js: start: componentDidMount, jsObj: ', jsObj);
        this.setState({ formdata: dynamicControls(jsObj) });
      }.bind(this));

  }


  //
  handleSubmit(evt) {
    evt.preventDefault();
    //   debugger;
    console.log('DynamicForm.js: start: handleSubmit', evt);
    console.log('this', this);

    const cbPrintReport = (e) => {
      console.log(e.name, ': ', e.value); //create a report in the devTools console window
    };
    window.R2.map(cbPrintReport, evt.target);

  }



  render() {

    return (<div>
      <div className="jumbotron">
        <h1>Application Questions</h1>
      </div>

      <form
        className="questionForm form-horizontal"
        onSubmit={e => this.handleSubmit(e)}
        >

        {this.state.formdata}

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button
              className="btn btn-primary"
              type="submit"
              >
              Post Answers
            </button>
          </div>
        </div>
      </form>
    </div>);



  }
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));


