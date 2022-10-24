const urlMock = () => {
  const mock = {
    createObjectURL: jest.fn((file: File) => {
      const buff = Buffer.from(file.name, 'utf-8');
      return buff.toString('base64');
    }),
  };

  Object.defineProperty(window, 'URL', {
    value: mock,
    writable: true,
  });
};

export default urlMock;
