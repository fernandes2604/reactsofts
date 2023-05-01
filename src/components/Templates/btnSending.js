/*
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
  const [isLoading, setLoading] = useState();

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading();
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      type='submit'
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Enviando...' : 'Enviar'}
    </Button>
  );
}

export default LoadingButton
*/