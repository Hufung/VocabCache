const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const srcDir = path.resolve(__dirname, '..');
const destDir = path.resolve(__dirname, 'www');
const files = ['index.html', 'logo.jpeg'];

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

files.forEach(file => {
  const src = path.join(srcDir, file);
  const dest = path.join(destDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('Copied: ' + file);
  } else {
    console.warn('Warning: ' + file + ' not found in project root');
  }
});

console.log('\nRunning cap sync android...');
try {
  execSync('npx cap sync android', { cwd: __dirname, stdio: 'inherit' });
  console.log('\nAPK sync complete.');
} catch (e) {
  console.error('cap sync failed:', e.message);
  process.exit(1);
}
