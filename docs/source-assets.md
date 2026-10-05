# Canva source asset manifest

The published Canva page exposed these persistent `_assets` paths in its text/DOM extraction. Direct binary downloads were blocked from this workspace, so these URLs are preserved here for a later manual export if the site owner can provide the original Canva project or files. The list is not an assertion that every item is needed in the React version; identify each image visually before reuse.

```text
https://tarsier-t5np51.my.canva.site/_assets/images/87e22a62965f141aa08e93699b0b3527.jpg
https://tarsier-t5np51.my.canva.site/_assets/media/c03a046089e82c9af24c93b98cf93997.png
https://tarsier-t5np51.my.canva.site/_assets/media/2f47734c5995c4c48f8aca7b3e3c9def.png
https://tarsier-t5np51.my.canva.site/_assets/media/85216ffe21c95e89f977f519e7607784.png
https://tarsier-t5np51.my.canva.site/_assets/media/20557b56283b5deb4867e921d66c0474.png
https://tarsier-t5np51.my.canva.site/_assets/media/933c70375f1c5b9c8ed496488cb79ebb.png
https://tarsier-t5np51.my.canva.site/_assets/media/776516485262f54c8342dd4e8126f665.png
https://tarsier-t5np51.my.canva.site/_assets/media/8413b1b736d961833a082a2d2158cc46.png
https://tarsier-t5np51.my.canva.site/_assets/media/b80adb157fe542172c1525527eabf951.png
https://tarsier-t5np51.my.canva.site/_assets/media/9889e0d88b0010796b9fa4cdcdcc5364.png
https://tarsier-t5np51.my.canva.site/_assets/media/031d0fe51cf46c9ed989545a60fec1cd.png
https://tarsier-t5np51.my.canva.site/_assets/media/e12f3ff099c4b036b6290462510dc107.png
https://tarsier-t5np51.my.canva.site/_assets/media/63d1c861867b5416303705b485474b05.png
https://tarsier-t5np51.my.canva.site/_assets/media/1915226e069b2d3bc4e903e3895e0d20.png
https://tarsier-t5np51.my.canva.site/_assets/media/d06b251abe8fc91ae49df7963a3725c4.png
https://tarsier-t5np51.my.canva.site/_assets/media/87c030f0682e52ec048a7031ac740566.png
https://tarsier-t5np51.my.canva.site/_assets/media/bb5c96df0d658bcaec9b069091357463.png
https://tarsier-t5np51.my.canva.site/_assets/media/09a3c155a0dd6c6b2b252c1b21da56e3.png
https://tarsier-t5np51.my.canva.site/_assets/media/a788d55d4b0e98ee822401d26a03025b.png
https://tarsier-t5np51.my.canva.site/_assets/media/1ec185d288aa077f94aaf11ccc881fb0.png
https://tarsier-t5np51.my.canva.site/_assets/media/a3d483fcb75c6bad5efaeacd4af4f173.png
https://tarsier-t5np51.my.canva.site/_assets/media/73b31a3aec1ba9ae09c7a9b754bbb48e.png
https://tarsier-t5np51.my.canva.site/_assets/media/aa4ec0b6b953c014667353152f81c396.png
https://tarsier-t5np51.my.canva.site/_assets/media/2a772dcd126157e200b0c85dc4b29301.png
https://tarsier-t5np51.my.canva.site/_assets/media/a4e4bc80e54cb404171d6720766ae9ac.png
https://tarsier-t5np51.my.canva.site/_assets/media/8dff9a721b5f4ac8ecacd02803e12559.png
https://tarsier-t5np51.my.canva.site/_assets/media/a5a52944110ffa4a5828f9363202a949.png
https://tarsier-t5np51.my.canva.site/_assets/media/9514f6f414131ea2bdaca6d96828898a.png
https://tarsier-t5np51.my.canva.site/_assets/media/eb70e35550011bd048882402eda93ba1.png
https://tarsier-t5np51.my.canva.site/_assets/media/f94f8ac3d2b41dbc3e66dd1d447c5f89.png
```

Several additional `blob:` images appeared in the rendered page. Those are browser-session URLs, not stable public assets, and cannot be recovered from their identifiers alone. The React prototype instead uses the locally stored `public/assets/vietsound-hero.jpg` plus original CSS/SVG artwork. If the exact source imagery is required, the safest route is to export the assets from the owner’s Canva design and confirm reuse rights.
