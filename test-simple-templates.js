/**
 * Quick test script to show the simple templates working
 */

const { exec } = require('child_process');

console.log('🧪 Testing Simple Email Templates...\n');

const testData = {
  "firstName": "Sofia",
  "lastName": "Martinez", 
  "email": "sofia.test@gmail.com",
  "selectedClass": "Salsa",
  "experience": "beginner",
  "goals": ["Learn basic steps", "Have fun", "Meet new people"],
  "hearAbout": "Instagram"
};

const command = `curl -X POST http://localhost:3001/api/trial-signup \
  -H "Content-Type: application/json" \
  -d '${JSON.stringify(testData)}' | python3 -m json.tool`;

console.log('📧 Sending test signup...');
console.log('👤 Test User: Sofia Martinez');
console.log('💃 Dance Style: Salsa');
console.log('📊 Experience: Beginner\n');

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error('❌ Error:', error);
    return;
  }
  
  console.log('✅ Response:');
  console.log(stdout);
});
