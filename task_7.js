const mod = require("./custom_module/module")

//////////////////////////////////////////////////////////////////////////////

mod.add_Customer("Вася зі Сеньківки", 32);
mod.add_Customer("Петро Іванович", 45);
mod.add_Customer("Роман Владиславович", 26);

mod.get_Customers_List();

console.log("\nВидалення замовника: Вася зі Сеньківки");
mod.remove_Customer("Вася зі Сеньківки", 32);

mod.get_Customers_List();

mod.edit_Customer("Петро Іванович", 45, "Іван Петрович", 54);

mod.get_Customers_List();

let customer1 = mod.find_Customer("Петро Іванович", 45);
console.log(`\nПошук замовника Петра Івановича: ${customer1 !== -1 ? "знайдено" : "не знайдено"}`);
let customer2 = mod.find_Customer("Іван Петрович", 54);
console.log(`Пошук замовника Івана Петровича: ${customer2 !== -1 ? "знайдено" : "не знайдено"}`);

console.log("\n");
//////////////////////////////////////////////////////////////////////////////

mod.add_Executor("Софія Кириченко", 56);
mod.add_Executor("Назар Богданович", 34);
mod.add_Executor("Андрій Олегович", 23);

mod.get_Executors_List();

console.log("\nВидалення виконавця: Назар Богданович");
mod.remove_Executor("Назар Богданович", 34);

mod.get_Executors_List();

mod.edit_Executor("Андрій Олегович", 23, "Степан Андрійович", 16);

mod.get_Executors_List();

let executor1 = mod.find_Executor("Петро Іванович", 45);
console.log(`\nПошук виконавця Петра Івановича: ${executor1 !== -1 ? "знайдено" : "не знайдено"}`);
let executor2 = mod.find_Executor("Софія Кириченко", 56);
console.log(`Пошук виконавця Софії Кириченко: ${executor2 !== -1 ? "знайдено" : "не знайдено"}`);

console.log("\n");
//////////////////////////////////////////////////////////////////////////////

mod.add_Project("Amazon", "Іван Петрович", "Софія Кириченко");
mod.add_Project("Rozetka", "Роман Владиславович", "Степан Андрійович");
mod.add_Project("Tesla", "Роман Владиславович", "Софія Кириченко");
mod.add_Project("ChatGPT", "Роман Владиславович", "Софія Кириченко");
mod.add_Project("SpaceX", "Роман Владиславович", "Софія Кириченко");

mod.get_Projects_List();

console.log("\nВидалення проєкта: SpaceX");
mod.remove_Project("SpaceX", "Софія Кириченко", "Роман Владиславович");

mod.get_Projects_List();

mod.edit_Project("Андрій Олегович", 23, "Степан Андрійович", 16);

mod.get_Projects_List();

let project1 = mod.find_Project("Rozetka", "Роман Владиславович", "Степан Андрійович");
console.log(`\nПошук проєкта Rozetka: ${project1 !== -1 ? "знайдено" : "не знайдено"}`);
let project2 = mod.find_Project("Prom", "Роман Владиславович", "Степан Андрійович");
console.log(`Пошук проєкта Prom: ${project2 !== -1 ? "знайдено" : "не знайдено"}`);

/////////////////////////////////////////////////////////////////////////////

mod.get_User_Projects_List("Роман Владиславович");
mod.get_User_Projects_List("Софія Кириченко");