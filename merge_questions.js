const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/usuario/.gemini/antigravity/brain/6ae2ea24-0675-4aa4-8e24-1d8f4c9f4a0c/.system_generated/steps/';
const stepIds = [252, 258, 265, 273, 279, 285, 291, 298];
let allQuestions = [];

stepIds.forEach(id => {
    const filePath = path.join(baseDir, id.toString(), 'output.txt');
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const json = JSON.parse(content);
        let questionsStr = json.answer;
        
        // NotebookLM sometimes returns JSON wrapped in markdown, let's clean it just in case
        if (questionsStr.includes('```json')) {
            questionsStr = questionsStr.replace(/```json\n/g, '').replace(/```/g, '');
        }
        
        const batchQuestions = JSON.parse(questionsStr);
        allQuestions = allQuestions.concat(batchQuestions);
        console.log(`Batch ${id}: Added ${batchQuestions.length} questions.`);
    } catch (err) {
        console.error(`Error processing batch ${id}:`, err.message);
    }
});

const outputJs = `const ALL_QUESTIONS = ${JSON.stringify(allQuestions, null, 2)};`;
fs.writeFileSync('C:/Users/usuario/.gemini/antigravity/scratch/questions.js', outputJs);

console.log(`Total questions merged: ${allQuestions.length}`);
