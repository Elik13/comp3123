async function lowerCaseWords(mixedArray) {
  let result = mixedArray.filter(elem => (typeof elem === 'string' || elem instanceof String));
  if (result) {
    return Promise.resolve(result);
  } else {
    return Promise.reject('No values meet the criteria');
  }
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray).then((result) =>
  console.log(result)
);