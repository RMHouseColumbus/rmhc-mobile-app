// Render the supplied vector logos without changing their paths or colors.
// Requires librsvg: brew install librsvg
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

process.chdir(fileURLToPath(new URL('..', import.meta.url)));
const suite = 'App Design Assets/Logos/Ronald McDonald House Central Ohio Logo Suite';
const vertical = readFileSync(`${suite}/Vertical/SVG - vector/rmh_centralohio_logo_vrt_color_rgb_pos.svg`, 'utf8');
const horizontal = readFileSync(`${suite}/Horizontal/SVG - vector/rmh_centralohio_logo_hrz_color_rgb_pos.svg`, 'utf8');

function placedLogo(source, x, y, width, height) {
  return source.replace(/<\?xml[^>]*\?>/, '').replace('<svg ', `<svg x="${x}" y="${y}" width="${width}" height="${height}" `);
}

function render(filename, content) {
  execFileSync('rsvg-convert', ['--output', filename], { input: content });
  console.log(filename);
}

const verticalRatio = 661.4951 / 993.1543;
const square = content => `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">${content}</svg>`;
const centered = height => placedLogo(vertical, (1024 - height * verticalRatio) / 2, (1024 - height) / 2, height * verticalRatio, height);

render('assets/images/icon.png', square('<rect width="1024" height="1024" fill="#8EE7F8"/>' + centered(1024)));
// The complete mark stays within Android's central 66/108 diameter safe circle.
render('assets/images/adaptive-icon.png', square(centered(700)));
render('assets/images/splash.png', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="756" viewBox="0 0 1200 756">${placedLogo(horizontal, 0, 0, 1200, 756)}</svg>`);
