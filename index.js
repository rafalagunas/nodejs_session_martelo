const fs = require("fs");
const users = require("./users.json");
const name = process.argv.slice(2)[0];
const lastname = process.argv.slice(2)[1];
const country = process.argv.slice(2)[2];
const nameFile = process.argv.slice(2)[3];
const { exec } = require("child_process");
const dotenv = require("dotenv");
dotenv.config();
/*
const main = () => {
  const array = [...users, ...object];
  console.log(array);
  fs.writeFile(`${nameFile}.json`, JSON.stringify(array), function (err, res) {
    if (err) {
      console.log(err);
    }
  });
};

const object = [
  {
    name: name,
    lastname: lastname,
    country: country,
  },
];*/

const main = (param) => {
  const { exec } = require("child_process");
  exec(`echo ${process.env.VALUE}`, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
};

main();
