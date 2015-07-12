import {
  inject
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
export class Question {
  constructor(Router, SOClient) {
    this.soClient = SOClient;
  }

  activate(params, routeConfig) {
    this.question = this.soClient.loadRecentQuestions()
      .filter((q) => q.id === parseInt(params.id))[0];
  }
}
