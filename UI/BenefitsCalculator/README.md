# UI: Unemployment Insurance Claimants Benefits Calculator

Welcome to the Commonwealth of Massachusetts' Single Page Application (SPA), powering the "Unemployment Insurance Claimants Benefits Calculator" . This is a static website built with React, [Mayflower React](https://github.com/massgov/mayflower/) (Commonwealth's Design System), and our [Mayflower React Starter](https://github.com/massgov/mayflower-react-starter/). The [Mayflower React Starter](https://github.com/massgov/mayflower-react-starter/) is a customized instance of [Facebook's Create React App](https://github.com/facebook/create-react-app).

## Quick start

- $ ``git clone https://github.com/massgov/Mayflower-React-Starter.git``
- $ ``cd Mayflower-React-Starter``
- $ ``npm i``
- $ ``npm start``
- Browse to http://localhost:3000, or the custom port shown in the output of npm start.

## System Requirements

- node.js, currently standardized on version 8.9.4
- npm, currently standardized on version 10.10.0
- To run tests locally, you will need to install [Watchman](https://facebook.github.io/watchman/docs/install.html).
- That's it! All other dependencies should be included when you run ``npm i``.

## Production build
- $ ``npm run build`` (Builds production app)

## Other Handy Commands
- $ ``npm run lint`` (Runs linter)
- $ ``npm run lint-fix`` (Runs linter and fixes what it can automagically)
- $ ``npm run build && serve`` (Serves production app after built)
- $ ``npm run build-css`` (Compiles css files from scss)


## [Business Logic](./docs/README.md)
### Update the Max Benefits Duration
Because the max benefits duration changes between 26 and 30 weeks based on the state unemployment level, it is pulled into the variable `maxBenefitDuration` in [Variables](../BenefitsCalculator/src/data/variables.json) so that it's easy to update. 
To change max benefit duration from 26 weeks to 30 weeks (or to change it back), change `maxBenefitDuration` in [Variables](../BenefitsCalculator/src/data/variables.json) to `30` (or `26`).
