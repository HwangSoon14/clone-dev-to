
import { useHistory } from 'react-router-dom';
import urlcat from 'urlcat';

const useMyHistory = () => {
  const history = useHistory();

  const generateLink = (
    url,
    params
  ) => {
    return urlcat(url, params ?? {});
  };

  const push = (
    url,
    params,
    state
  ) => {
    const buildedUrl = generateLink(url, params);
    history.push(buildedUrl, state);
  };

  return {
    ...history,
    push,
    generateLink,
  };
};

export default useMyHistory;