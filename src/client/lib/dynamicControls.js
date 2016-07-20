//require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
import React from 'react';
import ReactDOM from 'react-dom';
import R from 'ramda'; //functional utility library



/**
 * add html formfield types here as you need them
 * 
 */
const cbFields = (e) => {

  switch (e.type) {

    case 'text':
      return (<div className="form-group">
        <label className="col-sm-2 control-label" htmlFor={e.name}>{e.label}: </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            type={e.type}
            name={e.name}
            placeholder={e.label}
            />
        </div>
      </div>);

    case 'email':
      return (<div className="form-group">
        <label className="col-sm-2 control-label" htmlFor={e.name}>{e.label}: </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            type={e.type}
            name={e.name}
            placeholder={e.label}
            required
            />
        </div>
      </div>);

    case 'dropdown':
      return (<div className="form-group">
        <label className="col-sm-2 control-label" htmlFor={e.name}>{e.label}: </label>
        <div className="col-sm-10">
          <select
            className="form-control"
            name={e.name}
            >
            {R.map(eo => (<option value={eo}>{eo}</option>))(e.options) }
          </select>
        </div>
      </div>);

    case 'dropdownMultiple':
      return (<div className="form-group">
        <label className="col-sm-2 control-label" htmlFor={e.name}>{e.label}: </label>
        <div className="col-sm-10">
          <select
            multiple
            className="form-control"
            name={e.name}
            >
            {R.map(eo => (<option value={eo}>{eo}</option>))(e.options) }
          </select>
        </div>
      </div>);

    case 'checkbox':
      return (<div className="form-group">
        <label className="col-sm-2 control-label" htmlFor={e.name}>{e.label}: </label>
        <div className="col-sm-10">
          <input
            type="checkbox"
            name={e.name}
            />
        </div>
      </div>);

    case 'radio':
      return (<div className="form-group">
        <label className="col-sm-2 control-label">{e.label}: </label>
        <div className="col-sm-10">
          {
            R.map(er => (<div className="radio">
              <label>
                <input type="radio" name={e.name} id={er.id} />
                {er.text}
              </label>
            </div>))(e.radios)
          }
        </div>
      </div>);

    case 'textarea':
      return (<div className="form-group">
        <label className="col-sm-2 control-label" htmlFor={e.name}>{e.label}: </label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            name={e.name}
            rows="3">
          </textarea>
        </div>
      </div>);


  }
};


const cbQuestions = (e) => {
  return (<div>
    <h2>{e.title}</h2>
    <p>{R.map(cbFields)(e.fields) }</p>
  </div>);
};


const q = R.compose(
  R.map(cbQuestions),
  R.identity // placeholder (passthrough) for now; more pipeline processing expected here
);






/**
 * export the questions
 * 
 * @param {object} the json file containing the form field data
 * @return {jsx} the block of jsx to declare in the return statement of the react component's render function
 * 
 * json -> jsx
 */
export default (formdata) => {
  return q(formdata.questions);
};


