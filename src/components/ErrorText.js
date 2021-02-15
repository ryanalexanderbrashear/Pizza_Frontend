import React from 'react';

function ErrorText(props) {
  const style = {
    errorTextStyle: {
      color: 'red'
    }
  }
  const { error } = props;
  return (
    error ? <p style={style.errorTextStyle}>{error}</p> : null
  );
}

export default ErrorText;