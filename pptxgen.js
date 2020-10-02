let program = require('commander'),
  presentation = require('./core/presentation'),
  utils = require('./core/utils');

program.version('1.0.0', '-v, --version');

program
  .option('-d, --debug', 'Debug')
  .option('-o, --output <file>', 'PPTX File to output parsed data to')
  .option('-i, --input <file>', 'JSON File containing content for Slides (required)');

program.parse(process.argv);

if (program.debug) {

  console.log(program.opts());
  
}

if (program.input === undefined) {

  console.error('ERROR: Sorry, you have not provided any input file with the -i flag. Please check out the help menu, by trying: node pptxgen -h.');

} else {
  
  if (utils.checkPathExists(program.input)) {

    let file = utils.readFile(program.input);

    if (program.output !== undefined) {
      // when the output file is specified, pass it in
      presentation.generateSlideDeck(file, program.output);

    } else {
      // if no out, it takes the system default from the config
      presentation.generateSlideDeck(file);
    }
  }
  else {
    console.error('ERROR: Sorry, could not find the input file.')
  }
}
