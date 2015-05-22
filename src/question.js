import {
  inject
}
from 'aurelia-framework';
import {
  Router
}
from 'aurelia-router';

@inject(Router)
export class Question {
  constructor(Router) {

  }

  activate(params, routeConfig) {
    console.log(`Question with ${params.id} loaded.`);
  }
}
