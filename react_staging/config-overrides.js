const { override, fixBabelImports,addLessLoader } = require('customize-cra');
const { styles } = require('./src/styles/theme')

module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   addLessLoader({
      lessOptions:{
          javascriptEnabled: true,
          modifyVars: styles//{ '@primary-color': 'green' },
      }
  }),
 );