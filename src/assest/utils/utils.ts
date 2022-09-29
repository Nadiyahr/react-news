export const getTime = (time: string) => {
  return new Date(time).toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const trasformDate = (d: string) => {
  const date = new Date(d);

  return date
    .toLocaleString('uk-UK', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    })
    .replace(/ о /, ':')
    .toUpperCase();
};
