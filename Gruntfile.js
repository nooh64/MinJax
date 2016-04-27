module.exports = function(grunt) {
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	concat: {
	  options: {
		separator: ';'
	  },
	  dist: {
		src: ['src/**/*.js'],
		dest: 'build/mjax.js'
	  }
	},
	uglify: {
	  options: {
		banner: '/*! Minjax <%= grunt.template.today("dd-mm-yyyy") %> */\n',
	  },
	  dist: {
		files: {
		  'build/mjax.min.js': ['<%= concat.dist.dest %>']
		}
	  }
	}
  });
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat','uglify']);
}