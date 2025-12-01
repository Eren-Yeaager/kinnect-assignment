import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { CustomWorld } from './world';

setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  // this is for initial setup before all tests
});

AfterAll(async function () {
  // cleaning up after all tests
});

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld) {
  await this.close();
});
