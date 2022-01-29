import { useEffect, useState } from 'react';

export function useGetWidth() {
  const [width, setWidth] = useState();

  useEffect(() => {
    let elementToSetWidth = document.getElementById('app').offsetWidth;
    const onResize = () => {
      let newWidth = document.getElementById('app').offsetWidth;
      setWidth(newWidth);
    };

    window.addEventListener('resize', onResize);
    setWidth(elementToSetWidth);
    return () => {
      return window.removeEventListener('resize', onResize);
    };
  }, [width]);

  return width;
}
