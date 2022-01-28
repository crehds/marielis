import { useCallback, useEffect, useState } from 'react';

export function useOptionActive(args) {
  const [optionActive, setOptionActive] = useState(args);

  const handleOptionSelected = useCallback(() => {
    const optionSelected = document.getElementById(optionActive.option);
    const collection = document.getElementById(optionActive.navbar).childNodes;

    for (let i = 0; i < collection.length; i++) {
      if (collection[i].classList.contains('active')) {
        collection[i].classList.remove('active');
      }
    }

    optionSelected.classList.add('active');
  }, [optionActive.option, optionActive.navbar]);

  useEffect(() => {
    handleOptionSelected();
  }, [handleOptionSelected]);
  return [optionActive, setOptionActive];
}
