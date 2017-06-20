import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.lorem.words();
  },
  text() {
    return faker.lorem.paragraph();
  }
});
