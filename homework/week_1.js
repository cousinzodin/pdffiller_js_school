/**
 * Реализовать такие методы работы над массивами
 */

/**
 * метод создает новый массив элементов, состоящий из элементов массива array за вычетом элементов массива itemsToExclude
 */
function difference(arr, itemsToExclude) {
  return arr.filter(item => !itemsToExclude.includes(item));
}

difference([2, 1, 5], [2, 3])
//console.log(difference([2, 1, 5], [2, 3]));
// => [1, 5]

/**
 * метод принимает массив обьектов array и ключ value по которому нужно эти обьекты сгруппировать
 */
function groupBy(array, value) {
  return array.reduce((result, item) => {
    const key = item[value];
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, []);
}

groupBy([{gender: 'male', name: 'Max'}, {gender: 'male', name: 'Fred'}, {gender: 'female', name: 'Jane'}], 'gender');
//console.log(groupBy([{gender: 'male', name: 'Max'}, {gender: 'male', name: 'Fred'}, {gender: 'female', name: 'Jane'}], 'gender'));
/**
 * => {
 *  male: [{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'}],
 *  female: [{ gender: 'female', name: 'Jane'}]
 * }
 */

/**
 *  если метод принимет многомерный массив, он должен "сплюснуть" его на одно измерение
 */
function flatten(array) {
  return array.reduce((result, item) => result.concat(item), []);
}

flatten([1, [2, [3, [4]], 5]]);
//console.log(flatten([1, [2, [3, [4]], 5]]));
// => [1, 2, [3, [4]], 5]

flatten([1, 2, 3, 4, 5]);
//console.log(flatten([1, 2, 3, 4, 5]));
// => [1, 2, 3, 4, 5]

flatten([1, [2, 3], 4, 5]);
//console.log(flatten([1, [2, 3], 4, 5]));
// => [1, 2, 3, 4, 5]

/**
 * метод должен убрать все повторяющиеся элементы из массива
 */

// function uniq(array) {
//   return array.filter((item, index) => array.indexOf(item) === index);
// }

function uniq(array) {
  const map = {};
  return array.reduce((result, item) => {
    if (!map[item]) {
      map[item] = true;
      result.push(item);
    }
    return result;
  }, []);
}

uniq([2, 1, 2]);
console.log(uniq([2, 1, 2]));
// => [2, 1]

/**
 *
 * метод должен собирать элементы массива в группы с заданным размером
 */
function chunk(array, size) {
  const result = [];
  while (array.length > 0) result.push(array.splice(0, size));
  return result;
}

chunk(['a', 'b', 'c', 'd'], 2);
//console.log(chunk(['a', 'b', 'c', 'd'], 2));
// => [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3);
//console.log(chunk(['a', 'b', 'c', 'd'], 3));
// => [['a', 'b', 'c'], ['d']]
