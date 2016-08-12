import './main';

import 'angular-mocks';

const files = require.context('.', true, /\.spec\.js$/);
files.keys().forEach(files);

