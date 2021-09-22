const mediumToMarkdown = require('medium-to-markdown');
 
// Enter url here
mediumToMarkdown.convertFromUrl('https://medium.com/p/6fc3f16cfdb4')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});


// To run: node medium-to-markdown.js