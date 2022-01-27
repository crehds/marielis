import { useEffect, useState } from 'react';

export function useOptionActive(args) {
  const [optionActive, setOptionActive] = useState(args);

  function handleOptionSelected(id) {
    const optionSelected = document.getElementById(id);
    const collection = document.getElementById(optionActive.navbar).childNodes;

    for (let i = 0; i < collection.length; i++) {
      if (collection[i].classList.contains('active')) {
        collection[i].classList.remove('active');
      }
    }

    optionSelected.classList.add('active');
  }
  useEffect(() => {
    handleOptionSelected(optionActive.option);
  }, [optionActive.option]);
  return [optionActive, setOptionActive];
}
