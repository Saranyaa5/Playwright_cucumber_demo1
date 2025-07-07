module.exports = {
  default: {
    require: [
      'src/hooks/**/*.ts',
      'src/test/steps/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    format: ['progress'],
    paths: ['src/test/features/**/*.feature']
  
};