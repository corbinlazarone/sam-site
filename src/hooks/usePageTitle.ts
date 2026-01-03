import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `Samantha Klein | ${title}` : 'Samantha Klein';

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}; 