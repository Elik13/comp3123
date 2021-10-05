import fs from 'fs';
import process from 'process';

const generateLogs = async (dirName) => {
  if (!fs.existsSync(dirName)) {
    fs.mkdir(dirName, () => {
      console.log('Directory created: ' + dirName);
      process.chdir(dirName);
      for (let i = 1; i < 10; i++) {
        const fileName = 'logFile' + i + '.log';
        fs.writeFileSync(fileName, 'File number ' + i, () => {
        });
      }
      
      fs.readdir('./', (err, files) => {
        files.forEach(i => {
          console.log('Existing file: ' + i);
        });
        return Promise.resolve();
      });
    });
  }
}

const clearLogs = async (dirName) => {
  fs.rmdir(dirName, {recursive: true}, () => {
      console.log('Removed');
      return Promise.resolve();
    }
  );
};

const dirName = './Logs';
await generateLogs(dirName);
setTimeout(() => {
  clearLogs(dirName).then(() => console.log('Waiting 3 sec'));
}, 3000);


