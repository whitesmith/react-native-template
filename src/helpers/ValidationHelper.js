export const validateString = (value) => {
  return (value.length !== 0);
};

export const validateDecimal = (value) => {
  return !isNaN(parseFloat(value)) && value.length !== 0;
};

export const validateEmail = (value) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};

export const validateServerValue = (value) => {
  if (value == null) {
    return '-';
  }
  return value;
};
