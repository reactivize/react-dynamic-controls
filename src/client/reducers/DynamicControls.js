const DynamicControls = (state = 'GET_JSON', action) => {
  switch (action.type) {
    case 'GET_JSON':
      return {

    // window.fetch('http://localhost:3000/questions') // http://192.168.99.100:3000/questions docker ip
    //   .then(function (response) {
    //     // console.log('DynamicForm.js: fetch.then, response: ', response);
    //     return response.json();
    //   }).then(function (jsObj) {
    //     // console.log('DynamicForm.js: start: componentDidMount, jsObj: ', jsObj);
    //     this.setState({ formdata: dynamicControls(jsObj) });
    //   }.bind(this));

      }//action.filter;
    default:
      return state;
  }
};

export default DynamicControls;
