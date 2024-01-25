import { useEffect, useState } from 'react';

export default function useDelayUnmount(isMounted, delay = 500) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delay);
    }

    return () => clearTimeout(timeoutId);
  }, [isMounted, delay, shouldRender]);

  return shouldRender;
}
