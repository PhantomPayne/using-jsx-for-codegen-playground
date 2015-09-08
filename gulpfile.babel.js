
import gulp from 'gulp'
import babel from 'gulp-babel'
import eslint from 'gulp-eslint'
import lazypipe from 'lazypipe'
import through from 'through2'
import replace from 'gulp-replace'
import rename from 'gulp-rename'
import header from 'gulp-header'

import React from 'react'

function renderToStaticMarkup(filePath, props) {
	var component = React.createFactory(require(filePath));
	var element = component(props);
	return new Buffer(React.renderToStaticMarkup(element));
}

gulp.task('generateMFiles', () => {
  let sources = gulp.src('src/example/*.js')
    .pipe(eslint())
    .pipe(eslint.format())

		let mFiles = render(sources, false);
		mFiles = cleanup(mFiles);
		mFiles = save(mFiles, '.m');

		return mFiles;
});

gulp.task('generateHFiles', () => {
  let sources = gulp.src('src/example/*.js')
    .pipe(eslint())
    .pipe(eslint.format())

		let hFiles = render(sources, true);
		hFiles = cleanup(hFiles);
		hFiles = save(hFiles, '.h');

		return hFiles;
});

gulp.task('runTemplates', ['generateHFiles', 'generateMFiles']);

function render(files, isHeader) {
	return files
		.pipe(through.obj( function (file, enc, cb) {
			file.contents = renderToStaticMarkup(file.path, {renderHeader: isHeader});
			this.push(file);
			cb();
		}));
}

function cleanup(files) {
	return files
		.pipe(replace(/<\/?removeme>/g,''))
    .pipe(header('//AUTO GENERATED DO NOT EDIT\n\n'));
}

function save(files, extension) {
	return files
	 .pipe(rename({
      extname: extension
    }))
	  .pipe(gulp.dest('dist/'));
}

gulp.task('watch', () => {
  gulp.watch('src/*.js', ['runTemplates']);
});
