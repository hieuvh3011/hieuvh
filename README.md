# My personal blog

## My story
At the beginning, I was a mobile developer. I want to create a blog for very simple purpose: share my knowledge about mobile developer to the other developers. But when I created a blog, it's complicate. I tried some CMS platform like [WordPress](https://wordpress.com/), [Joomla](https://www.joomla.org/), [Laravel](https://laravel.com/), etc. And after 2 weeks, even when I have a background in programming, I still can't get used to it. So I decided to create my blog by [ExpressJs](https://expressjs.com/) (or we usually call **NodeJs**). This time, everything seem to be easier, because I worked with the other *Javascript* framework before ([React Native](https://reactnative.dev/)). 

Because I struggled a lot to create a simple website, so I decide to public source code of my site to anyone who struggling with the same problem as I did. This source code is public and have standard MIT license. So if you guys want to use the source code, follow the instruction below. Or if you want to visit my website, go to [hieuvh.com](https://hieuvh.com).

## 1. Get the source code and run
### Step 1: Fork or clone repository
You can [fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) this project or directly clone it from GitHub: 
```bash
$ git clone https://github.com/hieuvh3011/hieuvh.git
```
### Step 2: Generate `node_modules` folder
Go to app's root directory and run: 
```bash
$ npm install
```
or 
```bash
$ yarn install
```
### Step 3: Run it on your localhost
I use [nodemon](https://www.npmjs.com/package/nodemon), a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected (it's similar to **Hot reload** in React Native and Flutter). So, make sure you have [nodemon](https://www.npmjs.com/package/nodemon) in your local machine. If you have not installed yet, just need to run: 
```bash
$ npm install -g nodemon
```
After that, you can run my custom script (inside `package.json` if you want to see): 
```bash
$ yarn devStart
```
then go to [localhost:5000](https://localhost:5000) to see the result.

## 2. Folder structure
My website follow simple [MVC pattern](https://developer.mozilla.org/en-US/docs/Glossary/MVC). So, here is structure: 

- `public`: this is the only folder that end-user can access (of course, if you don't public source code like me).
- `src`: the folder contain main source code of project
  - `assets`: assets folder contain all assets of application.
  - `controller`: contains control logic of application.
  - `models`: defines data structure (all models of application).
  - `router`: contain router (navigator) of application.
  - `views`: defines how the app's data should be displayed. I use [ejs](https://ejs.co/) as my view engine.
  - `entry_point.js`: config for [dotenv](https://www.npmjs.com/package/dotenv).
- `.env.*`: contain all the config for difference environments (develop, staging, production). It's also contain a lot of sensitive information (Database host, username, password), that's why you will not see it on git repository, cause I added it in `.gitignore`. You can create your .env file follow .env.example structure.
- `index.js`: standard endpoint file for NodeJs project.

## 3. License
Standard MIT license (refer [here](https://opensource.org/licenses/MIT))