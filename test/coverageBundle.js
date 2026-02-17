const allTests = import.meta.webpackContext('./spec', {
  recursive: true,
  regExp: /.spec\.js$/
});

allTests.keys().forEach(allTests);

const srcContext = import.meta.webpackContext('../lib', {
  recursive: true,
  regExp: /\.js$/
});

srcContext.keys().forEach(srcContext);
