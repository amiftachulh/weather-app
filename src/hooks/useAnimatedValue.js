import { useEffect, useState } from 'react';

export default function useAnimatedValue(initialValue, targetValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(targetValue);
      return;
    }

    const increment = targetValue > value ? 1 : -1;
    const step = Math.abs(targetValue - value) / 30;

    let currentValue = value;

    const intervalId = setInterval(() => {
      currentValue += increment * step;
      setValue(parseInt(currentValue.toFixed()));

      if ((increment === 1 && currentValue >= targetValue) || (increment === -1 && currentValue <= targetValue)) {
        clearInterval(intervalId);
        setValue(parseInt(targetValue.toFixed()));
      }
    }, 16);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetValue]);

  return value;
}
