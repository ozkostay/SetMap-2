import ErrorRepository from './errorRepository';

const myErrorRep = new ErrorRepository();

myErrorRep.add(1, 'Ошибка 1');
myErrorRep.add(2, 'Ошибка 2');
myErrorRep.add(3, 'Ошибка 3');
myErrorRep.add('4', 'Ошибка 3');
console.log('errorsList: ', myErrorRep.errorsList);
console.log('Работа translate()');
console.log(myErrorRep.translate(2));
console.log(myErrorRep.translate('1'));
