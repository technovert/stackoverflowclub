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
    this.router.navigate(`questions/${questionDetails}`);
  }
}

export class TimeAgoValueConverter {
  toView(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
}
