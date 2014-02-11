module.exports = function (poppins) {

  /*
   * checklist for PRs
   */
  poppins.couldYouPlease('poppins-pr-checklist');
  //poppins.couldYouPlease('poppins-check-commit');

  poppins.plugins.prChecklist.greeting = "Thanks for the PR! Please check the items below to help " +
    "us merge this faster. See the [contributing docs]" +
    "(https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#contributing-to-angularjs) " +
    "for more information.";

  poppins.plugins.prChecklist.checks.push({
    message: "Uses the issue template",
    condition: function (issue) {
      return '[#' + issue.number +
        '](http://issuetemplate.com/#/angular/angular.js/issue/' +
        issue.number + ')';
    }
  });

  poppins.plugins.prChecklist.closing = "If you need to make changes to your pull request, you can update the commit with `git commit --amend`.\n" +
                                        "Then, update the pull request with `git push -f`.\n\n" +
                                        "Thanks again for your help!";

  /*
   * Pinned message for issues
   */
  poppins.couldYouPlease('poppins-pin');

  poppins.plugins.pin.message = function (issue) {
    return "Thanks for the opening this issue! If you haven't already, please use this " +
      "[issue template](http://issuetemplate.com/#/angular/angular.js/issue/" +
      issue.number + "). This helps us resolve issues faster.";
  };

  poppins.config = {
    // Github repo to watch
    // https://github.com/myname/myrepo
    target: {
      user: 'angular',
      repo: 'angular.js'
    },

    // Credentials for user who leaves comments, etc.
    // You may want to load these from a seperate file like `config-credentials.js`, and
    // add this file to your `.gitignore` list
    login: require('./credentials'),

    // port for poppins to listen on and URL for Github to ping
    hook: require('./hook')
  };

};
