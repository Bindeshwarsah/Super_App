import React from 'react';
const LoadingError = ({ loading, error, children }) => (
  <div>
    {loading && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {!loading && !error && children}
  </div>
);

export default LoadingError;