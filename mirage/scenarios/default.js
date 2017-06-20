export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);

  for (let i = 0; i < 10; i++) {
    const author = server.create('author');
    server.createList('blog-post', 5, { author });
  }
}
