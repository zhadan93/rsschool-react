const localStorageMock = () => {
  const store: Record<string, string> = {};

  const mock = {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => (store[key] = value)),
  };

  Object.defineProperty(window, 'localStorage', {
    value: mock,
    writable: true,
  });

  return {
    getItem: window.localStorage.getItem,
    setItem: window.localStorage.setItem,
  };
};

export default localStorageMock;
