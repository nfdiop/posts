import { useEffect, useRef } from 'react';

export const MinimalResizeDemo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        const element = entry.target;

        // Change background color based on width
        if (width < 200) {
          element.style.backgroundColor = '#ff9999';  // Red
        } else if (width < 400) {
          element.style.backgroundColor = '#99ff99';  // Green
        } else {
          element.style.backgroundColor = '#9999ff';  // Blue
        }
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="resize …"
      style={{
        width: '200px',
        height: '100px',
        minWidth: '100px',
        minHeight: '50px'
      }}
    >
      Resize me!
    </div>
  );
};
