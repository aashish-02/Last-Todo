export const getId = function () {
  let id = 0;
  return () => id++;
};

export const genrateId = getId();
