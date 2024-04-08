export default function formatter(array) {
    let result = '';

    for (let i = 0; i < array.length; i++) {
        result += array[i].name;
        if (i !== array.length - 1) {
            result += " , ";
        }
    }

    return result;
}