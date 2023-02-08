import { useEffect } from 'react';

function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = '';
    };
  }, [title]);
}
export default usePageTitle;
