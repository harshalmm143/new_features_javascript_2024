function groupBy(array, key) {
    return array.reduce((acc, obj) => {
        const keyValue = obj[key];
        (acc[keyValue] = acc[keyValue] || []).push(obj);
        return acc;
    }, {});
}

const data = [
    { id: 1, category: 'Fruit', name: 'Apple' },
    { id: 2, category: 'Fruit', name: 'Banana' },
    { id: 3, category: 'Vegetable', name: 'Carrot' },
    { id: 4, category: 'Fruit', name: 'Orange' },
    { id: 5, category: 'Vegetable', name: 'Lettuce' }
];

const groupedData = groupBy(data, 'category');
console.log(groupedData);
