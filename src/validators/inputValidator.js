const emailRegEx = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const commonError = 'Missing Field Required'

export const alphaNumeric = (value, errMsg) => {
    // const errorMsg = errMsg || 'The value is incorrect format';
    if (value == ''){
      return commonError
    }
    else if(!/^[a-z0-9 .-_]+$/i.test(value)){
      return errMsg
    }
    // return !val.trim() ? 'Missing Field Required' : !/^[a-z0-9 .-]+$/i.test(val) ? errorMsg : '';
  }

  export const alpha = function(value, errMsg){
    // console.log(errMsg);
    if(value == ''){
      return commonError
    }
    else if(!/^[a-z .-]+$/i.test(value)){
      return errMsg
    }
    // return !value.trim() ? '' :  ? errMsg : '';
  }

  export const phoneValidator = function(value, errMsg){
    if(value == ''){
      return commonError
    }
    else if(!/^([6-9][0-9]{10,})$/.test(value)){
      return errMsg
    }



    // return !val.trim() ? 'Missing Field Required' : !/^([7-9][0-9]{9,})$/.test(val) ? errorMsg : '';
  }

  export const emailValidator = function(value, errMsg){
    if(value == ''){
      return 'Missing Field Required'
    }
    else if(!emailRegEx.test(value)){
      return errMsg
    }
  }