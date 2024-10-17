module.exports = function (code) {
  console.log('[test-loader.js]', 'this.resourceQuery', [this.resourceQuery])
  return `export default () => "${code}"`
}
