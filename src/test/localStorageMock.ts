const localStorageMock = () => {
  const store: Record<string, string> = {};

  return {
    getItem: jest
      .spyOn(global.Storage.prototype, 'getItem')
      .mockImplementation((key: string) => store[key] || null),
    setItem: jest
      .spyOn(global.Storage.prototype, 'setItem')
      .mockImplementation((key: string, value: string) => (store[key] = value)),
  };
};

export default localStorageMock;
