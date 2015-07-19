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
from './stackoverflow-client'

@
inject(Router, SOClient)
export class Question {
  constructor(Router, SOClient) {
    this.soClient = SOClient;
  }

  activate(params, routeConfig) {
    this.soClient.loadQuestion(params.id)
      .then(q => {
        this.question = q;
      });
  }
}
