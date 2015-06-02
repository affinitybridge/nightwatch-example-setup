module.exports = {
  tags: ['example-tag'],
  'example-test' : function (client) {
    //Your test here
  },

  after : function(client) {
    client.end();
  }
};
