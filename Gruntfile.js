module.exports = function(grunt) {

	grunt.initConfig({

		xml_validator: {
			src: [ 'xml/**.xml']
		},

		watch: {
			files: ['xml/**.xml'],
			tasks: ['xml_validator']
		}

	});

	grunt.loadNpmTasks('grunt-xml-validator');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['xml_validator', 'watch']);
};