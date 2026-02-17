# @bpmn-io/svg-to-image

Converts an SVG to an image with decent quality.

## Usage

```javascript
import { svgToImage } from 'svg-to-image';

const svg = '<svg>...</svg>';

// Generate PNG
const result = await svgToImage(svg, {
    imageType: 'png',
    outputFormat: 'blob'
});
```

## Build and Run

```
# install dependencies
npm install

# run project, executing all tasks
npm run all
```

## How it works

This package uses [canvg](https://github.com/canvg/canvg) to render SVG elements onto a canvas and then exports them as image data URLs or Blobs.

## License

MIT