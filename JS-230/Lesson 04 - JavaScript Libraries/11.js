let post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut <em>perspiciatis</em>f unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  tags: ['new', 'latin', 'rich'],
};

let post2 = {
  title: 'my fave',
  published: 'June 1, 2015',
  body: 'Well don\'t you know',
};

let posts = [post, post2];

$(function() {
  var postTemplate = Handlebars.compile($("#post").html(), {noEscape: true});
  var tagTemplate = Handlebars.compile($('#tag').html());
  var pageTemplate = Handlebars.compile($('#page').html());
  Handlebars.registerPartial('tagTemplate', $('#tag').html());
  Handlebars.registerPartial('postTemplate', $("#post").html())

  $('body').html(pageTemplate({posts}));
});