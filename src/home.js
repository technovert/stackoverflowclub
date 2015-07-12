import {
  inject
}
from 'aurelia-framework';
import {
  computedFrom
}
from 'aurelia-framework';
import {
  Router
}
from 'aurelia-router';
import {
  SOClient
}
from './stackoverflowclient'

@
inject(Router, SOClient)
export class Home {
  questions = [];
  constructor(Router, SOClient) {
    this.router = Router;
    this.soClient = SOClient;
    this.questions = this.soClient.loadRecentQuestions();
  }

  goto(questionDetails) {
    this.router.navigate(`questions/${questionDetails}`);
  }
}
