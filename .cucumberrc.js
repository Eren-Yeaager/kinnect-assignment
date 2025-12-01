module.exports = {
  default: [
    'features/**/*.feature',
    '--require-module ts-node/register',
    '--require ./support/world.ts',
    '--require ./support/hooks.ts',
    '--require ./step-definitions/login.steps.ts',
    '--require ./step-definitions/cart.steps.ts',
    '--require ./step-definitions/checkout.steps.ts',
    '--format @cucumber/pretty-formatter',
    '--format json:./test-results/cucumber-report.json',
    '--format html:./test-results/cucumber-report.html',
  ].join(' '),
};