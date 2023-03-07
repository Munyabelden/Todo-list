const localStorageMock = (() => {
    let store = {};
    return {
      getItem: (key) => store[key],
      setItem: (key, value) => store[key] = value.toString(),
      clear: () => store = {}
    };
  })();

  export { localStorageMock }