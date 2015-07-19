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
    http.configure(x => {
      x.withInterceptor({
        request: function(message) {}
      });
      x.withParams({
        key: 'kpVGBceNQ2eqZ4cwriKjyA((',
        site: 'stackoverflow.com',
        pagesize: 5,
        order: 'desc',
        sort: 'activity',
        filter: 'default',
        tagged: 'aurelia'
      })
    });
    this.questionsEndpoint = "https://api.stackexchange.com/2.2/questions";
  }

  loadRecentQuestions() {
    return this.http.get(this.questionsEndpoint)
      .then(response => {
        return response.content.items
          .map(i => Object.assign(new QuestionSummary(i), {
            answered: i.is_answered,
            id: i.question_id,
            answerCount: i.answer_count,
            viewCount: i.view_count,
            lastActivityDate: i.last_activity_date * 1000,
            creationDate: i.creation_date * 1000,
          }))
      });
  }
  loadQuestion(id) {
    return this.http.createRequest(this.questionsEndpoint + '/' + id)
      .asGet()
      .withParams({
        key: 'kpVGBceNQ2eqZ4cwriKjyA((',
        site: 'stackoverflow.com',
        filter: 'withbody'
      })
      .send()
      .then(response => {
        var result = response.content.items
          .map(i => Object.assign(new QuestionSummary(i), {
            answered: i.is_answered,
            id: i.question_id,
            answerCount: i.answer_count,
            viewCount: i.view_count,
            lastActivityDate: i.last_activity_date * 1000,
            creationDate: i.creation_date * 1000,
          }))
        return result.length > 0 ? result[0] : null;
      });
  }
}

export class QuestionSummary {
  constructor(args) {
    this.id = args.id;
    this.tags = args.tags;
    this.owner = args.owner;
    this.answered = args.answered;
    this.score = args.score;
    this.viewCount = args.viewCount;
    this.answerCount = args.answerCount;
    this.lastActivityDate = args.lastActivityDate * 1000;
    this.creationDate = args.creationDate * 10000;
    this.lastEditDate = args.lastEditDate * 1000;
    this.link = args.link;
    this.title = args.title;
    this.body=args.body;
    this.edited = args.creationDate == args.lastEditDate ? false : true;
  }
}
