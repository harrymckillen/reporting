# weekly-report-gen

Generates a powerpoint file based on the original template structure. 

## Installation

1. Clone or download repo
2. `cd` to directory 
3. Run `npm install`

## Usage

```
$ node pptxgen -h
Usage: pptxgen [options]

Options:
  -v, --version        output the version number
  -d, --debug          Debug
  -o, --output <file>  PPTX File to output parsed data to
  -i, --input <file>   JSON File containing content for Slides (required)
  -h, --help           display help for command
```

### Basic Example(s) - Just an input (required)

Takes an input file path. Uses the default output file name in the configuration, and appends the Work Week from the input file. 

`node pptxgen -i example.json`

This generates the file `Weekly_Report_wwXX.pptx`.

### Basic Example(s) - With an input (required) and output file (optional)

You can choose the path/name of the output file. You can either append the pptx file extension, or not. 

`node pptxgen -i example.json -o example-1.pptx`
`node pptxgen -i example.json -o example-1`

This generates the file `example-1.pptx` for both cases. .