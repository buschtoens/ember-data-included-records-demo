import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  include: ['blogPosts'],

  _getResourceObjectForModel(...args) {
    const hash = JSONAPISerializer.prototype._getResourceObjectForModel.apply(this, args);

    if (hash.relationships) {
      for (const relationship of Object.values(hash.relationships)) {
        relationship.links = {
          related: '/show-stopper'
        };
      }
    }

    return hash;
  }
});
