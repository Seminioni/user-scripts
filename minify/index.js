const program = require('commander');
const imagemin = require('imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');

program
  .option('-p, --path', 'Initial-dir path')
  .option('-o, --out-dir', 'Out-dir path')
  .arguments('sPath, oPath')
  .action(function (sPath, oPath) {
    path = sPath;
    outDir = oPath;
 })
  .parse(process.argv);

if (program.path && program.outDir) {
  imagemin([`${path}*.{jpg,png}`], `${outDir}`, {
    plugins: [
      imageminJpegRecompress({
        quality: 'middle',
        min: '20',
        max: '70'
      }),
      imageminPngquant({quality: '65'})
    ]
  }).then(() => console.log('Everything is done :)'))
}
