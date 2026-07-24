function getInfo(): [string, number] {
  return ["javohir", 22];
}

const logger = getInfo();

const [fullName, age] = logger;
console.log(age)
console.log(fullName)