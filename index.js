#!/usr/bin/env node
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import prompts from "prompts";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createProject() {
    console.log(chalk.green("🚀 Створення нового проєкту..."));

    const response = await prompts({
        type: "text",
        name: "projectName",
        message: "Введіть назву проєкту:",
        initial: "my-new-project"
    });

    const projectName = response.projectName.trim();
    const targetPath = path.join(process.cwd(), projectName);

    if (fs.existsSync(targetPath)) {
        console.log(chalk.red(`❌ Папка ${projectName} вже існує.`));
        process.exit(1);
    }

    console.log(chalk.blue("📂 Копіюємо файли..."));
    await fs.copy(path.join(__dirname, "template"), targetPath);

    const packageJsonPath = path.join(targetPath, "package.json");
    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = projectName;
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

    console.log(chalk.green("✅ Проєкт успішно створено!"));
    console.log(chalk.yellow(`➡ Перейдіть у папку: cd ${projectName}`));
    console.log(chalk.yellow(`➡ Встановіть залежності: npm install`));
}

await createProject();