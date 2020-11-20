import { useEffect } from 'react';

import { useIsDrawerOpen } from '@react-navigation/drawer';
import useEventDispatch from './useEventDispatch';

const useSyncMenu = () => {
  const isOpen = useIsDrawerOpen();
  const dispatchEvent = useEventDispatch();
  useEffect(() => {
    if (isOpen) {
      dispatchEvent('menu@open', true);
    } else {
      dispatchEvent('menu@close', true);
    }
  }, [isOpen, dispatchEvent]);
};

export default useSyncMenu;
