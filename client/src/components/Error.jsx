import React from 'react';

class ErrorMessage extends React.Component {
  render() {
    const { error } = this.props;
    if (!error) {
      return null;
    }

    return (
      <div className="error-message">
        <h2>Erreur</h2>
        <p>{error.message}</p>
        <h3>Stack Trace</h3>
        <pre>{error.stack}</pre>
      </div>
    );
  }
}

export default ErrorMessage;