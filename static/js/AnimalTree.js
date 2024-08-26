import { Transformer } from 'markmap-lib/no-plugins';

const transformer = new Transformer();


const { root, features } = transformer.transform(markdown);

const assets = transformer.getAssets();

import { fillTemplate } from 'markmap-render';

const html = fillTemplate(root, assets);

