const delayedSuccess = () => {
  setTimeout(() => {
    let success = {'message': 'delayed success'};
    console.log('success');
  }, 500);
}

const delayedException = () => {
  setTimeout(() => {
    try {
      throw new Error('error: delayed exception!');
    } catch (error) {
      console.error(error);
    }
  }, 500)
};

const resolvedPromise = async () => new Promise((resolve) =>
  setTimeout(() => {
    resolve('resolvedPromise worked');
  }, 500)
);
const rejectPromise = async () => {
  return new Promise((resolve, reject) => setTimeout(() => {
    reject('rejectPromise worked');
  }, 500));
};

delayedSuccess();
delayedException();

resolvedPromise().then(message => console.log(message));
rejectPromise()
  .then(() => console.log('Trying to handle resolve'))
  .catch(message => console.error(message));