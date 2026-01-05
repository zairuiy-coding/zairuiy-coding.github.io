import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    const baseTitle = 'Zairui Yang | Software Engineer';
    document.title = title ? `${title} - ${baseTitle}` : baseTitle;
  }, [title]);
};

export default usePageTitle;
