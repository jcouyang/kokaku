module.exports = function(grunt) {
  "use strict";

	grunt.initConfig({
		uglify:{
			kokaku:{
				src:['kokaku.js'],
				dest: 'kokaku.min.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask("default", ['uglify']);
};
