export const useURLSearchParams = (search, selectQuery) => {
  const query = new URLSearchParams(search);
  const currentQuery = query.get(selectQuery);
  return currentQuery;
};
