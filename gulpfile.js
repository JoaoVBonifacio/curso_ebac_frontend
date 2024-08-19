// Importando os módulos necessários
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

// Caminhos dos arquivos
const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  },
  images: {
    src: 'src/imagens/**/*',
    dest: 'dist/imagens'
  }
};

// Tarefa para compilar o SASS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest));
}

// Tarefa para comprimir imagens usando importação dinâmica
async function images() {
  const imagemin = (await import('gulp-imagemin')).default;
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

// Tarefa para comprimir o JavaScript
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
}

// Tarefa para observar mudanças nos arquivos
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
}

// Exporta as tarefas para que possam ser executadas
exports.styles = styles;
exports.images = images;
exports.scripts = scripts;
exports.watch = watch;

// Tarefa padrão
exports.default = gulp.series(styles, images, scripts, watch);
