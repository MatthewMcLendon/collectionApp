let miniatures = [];

export const useMiniatures = () => {
  return miniatures;
};

export const getMiniatureCollection = () => {
  return fetch(`http://localhost:8088/miniatures`)
    .then((response) => response.json())
    .then((response) => {
      miniatures = response.slice();
    });
};
