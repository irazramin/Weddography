import { useEffect, useState } from 'react';

const useFetch = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://irazramin.github.io/wedData/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services, setServices];
};

export default useFetch;
