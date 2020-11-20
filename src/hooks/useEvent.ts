import { useEffect, useContext } from 'react';

import EventContext from '../util/EventContext';

const useEvent = (event: string, callback: CallableFunction) => {
  const [subscribe, unsubscribe, _dispatch] = useContext(EventContext);

  useEffect(() => {
    subscribe(event, callback);

    return () => unsubscribe(event, callback);
  }, [subscribe, unsubscribe, event, callback]);
};

export default useEvent;
