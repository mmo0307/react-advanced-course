function getQueryParams(params: OptionalRecord<string, string>): string {
  const urlObj = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      urlObj.set(key, value);
    }
  });

  return `?${urlObj.toString()}`;
}

function addQueryParams(params: Record<string, string>) {
  window.history.pushState(null, '', getQueryParams(params));
}

export { addQueryParams, getQueryParams };
