/** @type {import('@capacitor/cli').CapacitorConfig} */
const config = {
  appId: 'com.vocabcache.app',
  appName: 'VocabCache',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  android: {
    backgroundColor: '#060201',
    allowMixedContent: true
  }
};

module.exports = config;
