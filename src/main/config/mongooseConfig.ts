const mongooseConfig = {
  useNewUrlParser: process.env.NODE_ENV !== 'test',
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  auto_reconnect: true
};

export default mongooseConfig;