import {
  inject
}
from 'aurelia-framework';
import {
  HttpClient
}
from 'aurelia-http-client';

@
inject(HttpClient)
export class SOClient {
  constructor(http) {
    this.http = http;
  }
  loadRecentQuestions() {
    let questions = [];
    questions.push(new QuestionSummary({
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
      "lastActivityDate": 1431782565 * 1000,
      "creationDate": 1431781521 * 1000,
      "lastEditDate": 1431781521 * 1000,
      "id": 30276022,
      "link": "http://stackoverflow.com/questions/30276022/bitmapfactory-decodebytearray-returning-null",
      "title": "BitmapFactory.decodeByteArray returning null"
    }));
    questions.push(new QuestionSummary({
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
      "lastActivityDate": 1431782561 * 1000,
      "creationDate": 1431680574 * 1000,
      "lastEditDate": 1431782561 * 1000,
      "id": 30255524,
      "link": "http://stackoverflow.com/questions/30255524/loopback-rest-findbyid-doesnt-work-well",
      "title": "Loopback REST findById doesn&#39;t work well"
    }));
    return questions;
  }
}

export class QuestionSummary {
  constructor(args) {
    this.tags = args.tags;
    this.owner = args.owner;
    this.answered = args.answered;
    this.score = args.score;
    this.viewCount = args.viewCount;
    this.answerCount = args.answerCount;
    this.lastActivityDate = args.lastActivityDate;
    this.creationDate = args.creationDate;
    this.id = args.id;
    this.lastEditDate = args.lastEditDate;
    this.link = args.link;
    this.title = args.title;
    this.edited = args.creationDate == args.lastEditDate ? false : true;
  }
}
