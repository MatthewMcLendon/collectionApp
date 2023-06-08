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

export const saveMiniature = (newMiniature) => {
  return fetch(`http://localhost:8088/miniatures`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMiniature),
  });
};

export const deleteMinature = (miniatureID) => {
  return fetch(`http://localhost:8088/miniatures/${miniatureID}`, {
    method: "DELETE",
  });
};
