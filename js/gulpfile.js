var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-jshint');
var buildProduction = utilities.env.production;

"overrides":{
    "bootstrap" : {
      gulp.task('bower', ['bowerJS', 'bowerCSS']);
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
 });

  var browserSync = require('browser-sync').create();
  var lib = require('bower-files')();
  gulp.task('bower', ['bowerJS', 'bowerCSS']);
  gulp.task('jshint', function(){
    return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
  });
             //gulp bower tasks
  gulp.task('build', ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
});
          //variables with gulp-util
  gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
    if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
       //clean tasks
    gulp.task("clean", function(){
  return del(['build', 'tmp']);
          //build task
  gulp.task("build", ['clean'], function(){
    if (buildProduction) {
      gulp.start('minifyScripts');
    } else {
      gulp.start('jsBrowserify');
             //concat
     gulp.task('concatInterface', function() {
     return gulp.src(['./js/pingpong-interface.js', './js/signup-interface.js'])
     .pipe(concat('allConcat.js'))
     .pipe(gulp.dest('./tmp'));
  });
          //gulp bowerJS
  gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});
           //linting tasks
           //bower packages in gulpfile
    gulp.task('bowerJS', function () {
      return gulp.src(lib.ext('js').files)
      .pipe(concat('vendor.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('./build/js'));
    });
       //gulp task
    gulp.task('serve', function() {
    browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
});

  gulp.watch(['js/*.js'], ['jsBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);
  gulp.watch(['*.html'], ['htmlBuild']);

});
gulp.task('htmlBuild', function() {
  browserSync.reload();
});

      gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
              //loading jsBuild
    gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){
  browserSync.reload();
});
gulp.task('bowerBuild', ['bower'], function(){
  browserSync.reload();
});
});
}
   });
  });
    }
  });
});
  }
});
