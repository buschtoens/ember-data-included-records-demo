import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },
  lastName() {
    return faker.name.lastName();
  },
  age() {
    return faker.list.random(18, 20, 28, 32, 45, 60)();
  }
});
