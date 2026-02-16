# svg-to-image

> Utility for generating images from SVG markup

This package provides a simple utility to convert SVG markup into PNG or JPEG images. It uses [canvg](https://github.com/canvg/canvg) to render SVG elements onto a canvas and then exports them as image data URLs or Blobs.

## Usage

```javascript
import { generateImageFromSvg } from 'svg-to-image';

const svg = '<svg>...</svg>';

// Generate PNG
const result = await generateImageFromSvg(svg, {
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


## License

MIT