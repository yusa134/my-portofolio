export const setBodyFixed = (): void => {
  if (typeof document === 'undefined') return;
  const body = document.querySelector('body') as HTMLBodyElement;
  body.style.overflow = 'hidden';
};

export const removeBodyFixed = (): void => {
  if (typeof document === 'undefined') return;
  const body = document.querySelector('body') as HTMLBodyElement;
  body.style.overflow = 'auto';
};
