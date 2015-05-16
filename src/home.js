import {
  computedFrom
}
from 'aurelia-framework';

export class Home {
  constructor(Router) {
    this.router = Router;
    this.questions.push(new Question({
      "tags": [
        "android",
        "json",
        "base64"
      ],
      "owner": {
        "reputation": 1,
        "user_id": 4181287,
        "user_type": "registered",
        "profile_image": "https://www.gravatar.com/avatar/e2eb71a2c3c0a875f22f1c724fb345ef?s=128&d=identicon&r=PG&f=1",
        "display_name": "don",
        "link": "http://stackoverflow.com/users/4181287/don"
      },
      "answered": false,
      "viewCount": 15,
      "answerCount": 0,
      "score": -1,
      "lastActivityDate": 1431782565,
      "creationDate": 1431781521,
      "lastEditDate": 1431782565,
      "id": 30276022,
      "link": "http://stackoverflow.com/questions/30276022/bitmapfactory-decodebytearray-returning-null",
      "title": "BitmapFactory.decodeByteArray returning null"
    }));
    this.questions.push(new Question({
      "tags": [
        "node.js",
        "rest",
        "loopbackjs",
        "strongloop"
      ],
      "owner": {
        "reputation": 1,
        "user_id": 4751669,
        "user_type": "registered",
        "profile_image": "http://graph.facebook.com/10206446861594807/picture?type=large",
        "display_name": "Yoshihisa Sato",
        "link": "http://stackoverflow.com/users/4751669/yoshihisa-sato"
      },
      "answered": false,
      "viewCount": 16,
      "answerCount": 0,
      "score": 0,
      "lastActivityDate": 1431782561,
      "creationDate": 1431680574,
      "lastEditDate": 1431782561,
      "id": 30255524,
      "link": "http://stackoverflow.com/questions/30255524/loopback-rest-findbyid-doesnt-work-well",
      "title": "Loopback REST findById doesn&#39;t work well"
    }));
  }
  questions = [];
  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  //@computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  welcome() {
    alert(`Welcome, ${this.fullName}!`);
  }
  goto(questionDetails) {
    this.router.navigate(questionDetails);
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}

export class Question {
  constructor(args) {
    this.tags = args.tags;
    this.owner = args.owner;
    this.answered = args.answered;
    this.score = args.score;
    this.viewCount = args.viewCount;
    this.answerCount = args.answerCount;
    this.lastActivityDate = args.lastActivityDate;
    this.creationDate = args.creationDate;
    this.lastEditDate = args.lastEditDate;
    this.id = args.lastEditDate;
    this.link = args.link;
    this.title = args.title;
  }

}
