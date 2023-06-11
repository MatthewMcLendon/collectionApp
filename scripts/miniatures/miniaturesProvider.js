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

export const getMiniatureByID = (miniatureID) => {
  return fetch(`http://localhost:8088/miniatures/${miniatureID}`)
    .then((response) => response.json())
    .then((response) => {
      miniatures = response;
    });
};

export const updateMiniature = (updatedMiniature) => {
  return fetch(`http://localhost:8088/miniatures/${updatedMiniature.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedMiniature),
  });
};
