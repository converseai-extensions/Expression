# Expression
A simple plugin for evaluating expressions.

## Prerequisites
1. Ensure you have an account with [Converse.AI](http://www.converse.ai/)
2. Converse.AI extensions run on **Node.JS** `v6.11.2` on **Alpine Linux** so ensure your node development environment matches this setup. We recommend installing Node.JS via [Node Version Manager (NVM)](https://github.com/creationix/nvm).
3. Install and Authorize [Converse.AI CLI tool](https://dash.readme.io/project/converseai/v2/docs/converse-ai-cli).

## Install
4. Create a project folder
5. Clone repo into project folder
6. Initialize extension by running `converse-cli plugin init` from your project root.
7. Run `npm test` from your project root to ensure everything was initialized correctly.
8. Deploy the plugin to your Converse.AI account by running `converse-cli deploy` from your project root.
9. If there are no errors, the plugin should be available under "User" in the left hand menu of the designer.
