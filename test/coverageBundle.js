/**
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership.
 *
 * Camunda licenses this file to you under the MIT; you may not use this file
 * except in compliance with the MIT License.
 */

import './globals.js';

const allTests = import.meta.webpackContext('./spec', {
  recursive: true,
  regExp: /.spec\.js$/
});

allTests.keys().forEach(allTests);

const srcContext = import.meta.webpackContext('../src', {
  recursive: true,
  regExp: /\.js$/
});

srcContext.keys().forEach(srcContext);
