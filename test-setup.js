const fs = require('fs');
const path = require('path');

console.log('🧪 Testing Blog Website Setup...\n');

// Check if package.json exists
if (fs.existsSync('package.json')) {
  console.log('✅ package.json found');
} else {
  console.log('❌ package.json not found');
  process.exit(1);
}

// Check if node_modules exists
if (fs.existsSync('node_modules')) {
  console.log('✅ node_modules found');
} else {
  console.log('❌ node_modules not found - run npm install');
  process.exit(1);
}

// Check if key directories exist
const requiredDirs = ['app', 'lib', 'models'];
requiredDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`✅ ${dir}/ directory found`);
  } else {
    console.log(`❌ ${dir}/ directory not found`);
  }
});

// Check if key files exist
const requiredFiles = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/globals.css',
  'lib/mongodb.ts',
  'models/Post.ts',
  'next.config.js',
  'tsconfig.json',
  'tailwind.config.js'
];

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} found`);
  } else {
    console.log(`❌ ${file} not found`);
  }
});

console.log('\n🎉 Setup verification complete!');
console.log('\n📝 Next steps:');
console.log('1. Copy env.example to .env.local');
console.log('2. Add your MongoDB connection string to .env.local');
console.log('3. Run: npm run dev');
console.log('4. Open http://localhost:3000'); 