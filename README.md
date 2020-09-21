# 2020-product-analytics-group-project-hexchat

Group Members [Group 3]:
- [Akanksha](https://github.com/akanksha1304)
- [Daren Ma](https://github.com/darenma)
- [Geoffrey Hung](https://github.com/G-Hung)
- [Mikio Tada](https://github.com/mikiotada)
- [Nishat Parveen](https://github.com/nishatparveen21)
- [Annette Lin](https://github.com/RusLin-oir)
- [Sakshi Singla](https://github.com/sakshi-singla)

### Current Deployment Url - http://hexchat.eba-w82x2atf.us-west-2.elasticbeanstalk.com/

# We are not using Flask as main framework!
- We use Angular as our frontend, Firebase as our backend
- We will have Flask backend for API and admin stuffs
- But Python is relatively small portion in this project

# How to run Angular in local
- Make sure to install `Node.js` and `npm`. You can check by running `node -v` and `npm -v`
- Run `cd code/angular_firebase/` to go to frontend codebase
- Run `npm inasll` to install dependencies, `node_modules` will be created
- Run `ng s` and it will compile the code and show localhost list

# How to deploy changes to production (i.e Elastic Beanstalk)
- In `code/angular_firebase` directory, run `ng build` or `ng build --prod` and copy the `dist` folder to `code/servers/` (replace existing files).
- Test changes locally by running `sh start.sh`.
  - This will be the exact script that will be run by our production machine.
  - Verify by going to `http://localhost:<port>` and ensure the Angular application works.
- If you have made server changes in `server.js`, copy this file also to `code/servers/server.js` 
- Commit the changes in `code/servers` and push it to `master`.
- **You're DONE**. `Codepipeline` will take care of pulling new changes and deployment script will take care of taking all the new changes from `code/servers` and running appopriate commands.

# Testing Elastic BeanStalk deployment.
- Open `deploy.sh` and replace the `APPLICATION_NAME` to `HexchatTest1` (Note: make sure there isn't another `Application` with same name already deploy).
- Run the deployment script, `sh deploy.sh`.
- If you have `eb` installed, running `eb open` will open the Url in your browser.

