export const Adding = (data) => {
  return { type: "ADDING", payload: data };
};

export const Remove = (id) => {
  return { type: "REMOVE", payload: id };
};

export const Edit = (updatedData) => {
  return { type: "EDIT", payload: updatedData };
};
