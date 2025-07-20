const parseNumber = (number, defaultValue) => {
  const isStr = typeof number === 'string';
  if (!isStr) return defaultValue;

  const parsedNumber = parseInt(number);

  if (Number.isNaN(parsedNumber)) {
    return defaultValue;
  }
  return parseNumber;
};

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;

  const parsedPage = parseNumber(page, 1);
  const parsedPerPage = parseNumber(perPage, 10);
  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};
