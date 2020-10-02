let PptxGenJS = require("pptxgenjs"),
    pptx = new PptxGenJS(),
    config = require("./config");

function constructBulletPoints(data) {
  let bullets = [];
  for (const item of data) {
    bullets.push({ text: item.project, options: config.presets.projectHeader }); 
    
    for (const bullet of item.progress) {
      bullets.push({ text: bullet, options: config.presets.bulletPoint }); 
    }
  }
  return bullets;
}    

function generateSlideDeck(dataObject, outputFilename) {
  
  // default presentation setup
  pptx.layout = 'LAYOUT_WIDE';
  pptx.title = config.metaData.title;
  pptx.subject = config.metaData.subject;
  pptx.author = dataObject.author;
  pptx.company = config.metaData.company;
  pptx.revision = Date.now();
  
  if (!outputFilename) {
    outputFilename = config.outputFilename + '_ww' + dataObject.ww;
  }

  pptx.addSection({ title: pptx.title });

  // Slide
  {
    var slide = pptx.addSlide({ sectionTitle: pptx.title });

    slide.slideNumber = { x: '92%', y: '94%', fontFace: 'Arial', fontSize: 12, color: config.colours.black };
    
    // Slide Heading
    slide.addText(
      [
        { text: config.textLabels.slideHeader, options: config.presets.presentationHeaderStyle }
      ],
      {
        x: 0.5,
        y: 0.20,
        w: config.presets.global.columnWidth,
        h: config.presets.global.headerHeight,
        margin: 1,
      }
    );

    slide.addText(
      config.textLabels.leaderText.toUpperCase(),
      { x: 6.5, y: 0.13, w: 2.5, h: 0.6, valign: 'middle', bold: true, color: config.colours.teal, fontSize: 12, line: { color: config.colours.black, width: '1' } }
    );
    
    slide.addText(
      dataObject.author.toUpperCase(), 
      { x: 7.2, y: 0.13, w: 1.5, h: 0.6, valign: 'middle', bold: true, color: '969696', fontSize: 12 }
    );
    
    slide.addText(
      config.textLabels.periodText.toUpperCase(),
      { x: 9.1, y: 0.13, w: 3.8, h: 0.6, valign: 'middle', bold: true, color: config.colours.teal, fontSize: 12, line: { color: config.colours.black, width: '1' } }
      );
  
    slide.addText(
      `${dataObject.from} -> ${dataObject.to}\n(WW${dataObject.ww})`,
      { x: 10.6, y: 0.13, w: 2.5, h: 0.6, valign: 'middle', align: 'center', bold: true, color: '969696', fontSize: 10.5 }
    );

    // LEFT COLUMN ------------------------------------------------------------
    // Header
    slide.addText(
      [
        { text: config.textLabels.leftColHeader, options: config.presets.columnHeader }
      ],
      {
        x: 0.5,
        y: 1.0,
        w: config.presets.global.columnWidth,
        h: config.presets.global.headerHeight,
        margin: 5,
        fill: { color: config.colours.teal }
      }
    );

    // Body
    slide.addText(
      constructBulletPoints(dataObject.thisweek),
      {
        x: 0.5,
        y: 1.7,
        w: config.presets.global.columnWidth,
        h: config.presets.global.bodyHeight,
        margin: 5,
        fill: { color: config.colours.grey },
        valign: 'top'
      }
    );

    // RIGHT COLUMN ------------------------------------------------------------
    // Header
    slide.addText(
      [
        { text: config.textLabels.rightColHeader, options: config.presets.columnHeader }
      ],
      {
        x: 6.75,
        y: 1.0,
        w: config.presets.global.columnWidth,
        h: config.presets.global.headerHeight,
        margin: 5,
        fill: { color: config.colours.teal }
      }
    );

    // Body
    slide.addText(
      constructBulletPoints(dataObject.nextweek),
      {
        x: 6.75,
        y: 1.7,
        w: config.presets.global.columnWidth,
        h: config.presets.global.bodyHeight,
        margin: 5,
        fill: { color: config.colours.grey },
        valign: 'top'
      }
    );

    // Footer
    slide.addText(
      [
        { text: config.textLabels.footer , options: config.presets.defaultText }
      ],
      {
        x: '38%',
        y: '92%',
        w: 3,
        h: 0.5,
        margin: 5,
        align: 'center'
      }
    );
    
    // Aer Lingus logo
    slide.addImage({ data: config.eiLogo, x: '5%', y: '92%', w: 2.0, h: 0.37 });
  }

  pptx.writeFile(outputFilename)
    .catch((err) => {
        throw new Error(err);
    })
    .then((fileName) => {
        console.log(`Presentation exported: ${fileName}`);
    })
    .catch((err) => {
        console.log(`ERROR: ${err}`);
    });
}

module.exports.generateSlideDeck = generateSlideDeck;