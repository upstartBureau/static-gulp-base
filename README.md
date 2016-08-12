### Static itemMaster

Gulp FE build tool w/ Sass compile & BrowserSync + HTML auto copy from `./src` to `./dist` directory

if gulp is not installed on your machine, install gulp
```sh
$ npm install gulp -g
```
clone the repo
```sh
$ git clone git@github.com:itemmaster/static.git ./itemmaster-static

```
move into project directory & install dependancies
```sh
$ cd itemmaster-static
$ npm install
```

to run development inside itemmaster-static root
```sh
$ gulp
```
the default gulp task is BrowserSync + Sass + HTML move with watch on the entire project directory.

edit the files in the `./src` directory & they will output to the `./dist` directory the dev-server listens @ `localhost:3000` as such add all asset dependancies (image files, font files etc.) into the dist directory, and be aware that all relative paths will treat `./dist` as root.


layout previews available @ http://prvw.space server is daemonized w/foreverJS
