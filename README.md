# NxWeatherApp

This weather application allows you to search for weather conditions around the globe!

## Running Locally

To run this application locally you will need to follow a few steps...
1. [Install Nx &raquo;](https://www.npmjs.com/package/nx)

You can run the following command in your terminal to install nx

```sh
npm install nx -g
```
2. run `npm install` to install all relevant dependencies

3. Add the `.env` file provided at the root level of the Nx repo. If you do not have this file you can send an email requesting it to `jekingfish94@yahoo.com`.

4. Run the following command from within the repo to spin up the frontend application

```sh
nx serve weather-app-frontend
```
5. Run the following command from within the repo to spin up the backend application

```sh
nx serve weather-app-backend
```
6. Alternatively, you may install the Nx Console extension and use the GUI to run each application from within your IDE. See details in the section below.


## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
