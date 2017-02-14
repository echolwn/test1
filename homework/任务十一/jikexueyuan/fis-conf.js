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

 fis.match('*', {
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
 fis.match('*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
});
 