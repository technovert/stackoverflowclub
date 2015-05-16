import 'bootstrap';
//import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'StackOverflow Aurelia Club';
    config.map([
      { route: ['','home'],  moduleId: './home',      nav: true, title:'Home' },
      { route: 'flickr',        moduleId: './flickr',       nav: true, title:'Flickr' },
      { route: 'child-router',  moduleId: './child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}
