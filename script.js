const wgt = process.argv.slice(2)[0];
const emulator = process.argv.slice(2)[1];

const { exec } = require("child_process");
exec(`tizen install -n ${wgt} -s ${emulator}`, (err, stdout, stderr) => {
  if (err) {
    console.log(err);
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
