import React, { useState } from 'react';

/** <img> that retries a couple of times when the remote CDN drops a request. */
export const RetryImg: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ src, onError, ...rest }) => {
  const [attempt, setAttempt] = useState(0);

  return (
    <img
      {...rest}
      key={attempt}
      src={src}
      onError={(e) => {
        onError?.(e);
        if (attempt < 3) window.setTimeout(() => setAttempt((a) => a + 1), 800 * (attempt + 1));
      }}
    />
  );
};
