Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
   this.render('upload');
});
Router.route('/mitarbeiter', function () {
   this.render('memberlist');
});