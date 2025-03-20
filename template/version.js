import fs from 'fs';
const filePath = './project.json';

function incrementVersion(version) {
    const parts = version.split('.').map(Number);
    if (parts[2] < 9) {
        parts[2] += 1;
    } else {
        parts[2] = 0;
        if (parts[1] < 9) {
            parts[1] += 1;
        } else {
            parts[1] = 0;
            parts[0] += 1;
        }
    }
    return parts.join('.');
}

if (!fs.existsSync(filePath)) {
    console.warn(`\x1b[31m ${filePath} не знайдено. \x1b[34m Створюємо новий файл... \x1b[0m`);

    const defaultJson = {
        name: "Web APROG",
        version: "1.0.0"
    };

    fs.writeFileSync(filePath, JSON.stringify(defaultJson, null, 4), 'utf8');
    console.log(`\x1b[32m ${filePath} успішно створено. \x1b[0m`);
}

const projectJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const version = projectJson.version;
const newVersion = incrementVersion(version);

projectJson.version = newVersion;
fs.writeFileSync(filePath, JSON.stringify(projectJson, null, 4), 'utf8');

console.log(`\x1b[0m \nВерсію \x1b[32m ${newVersion} \x1b[0m записано у \x1b[34m ${filePath}\n \x1b[0m`);
