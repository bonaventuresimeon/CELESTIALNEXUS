import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const media=JSON.parse(readFileSync('lib/media.json','utf8'));
test('all ten supplied images have originals and optimized previews',()=>{assert.equal(media.length,10);assert.equal(new Set(media.map(m=>m.id)).size,10);for(const m of media){assert.ok(existsSync('public'+m.src),m.src);assert.ok(existsSync('public'+m.preview),m.preview);assert.ok(m.width>0&&m.height>0)}});
