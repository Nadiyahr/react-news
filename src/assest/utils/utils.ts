export const getTime = (time: Date) => {
  return new Date(time).toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit'
  });
};
