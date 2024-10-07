// Complex useEffect

import { useEffect } from 'react';

function ComplexDashboard({ userId, theme }) {
  // ... state initialization ...

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const result = await fetchData({userId, page, sortBy, filterType});
        setData(result);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    // Update the document title
    document.title = `Dashboard - ${theme} mode - Page ${page}`;

    // Log analytics
    logPageView(userId, page, sortBy, filterType);

    // This is just to demonstrate another unrelated side effect
    const handleResize = () => {
      console.log(`Window resized. Current theme: ${theme}`);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [userId, page, sortBy, filterType, theme]);

  // ... rest of the component code ...
}

export default ComplexDashboard;
