fis.config.set('modules.postpackager','simple');  
fis.config.set('pack',{
	'pkg/lib.js':[
	'js/**.js'
	],
	'pkg/lib.css':[
	'css/**.css'
	]
});
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*.{js,css,jpg,png}', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});
fis.match('*.html', {
  //invoke fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')
});

