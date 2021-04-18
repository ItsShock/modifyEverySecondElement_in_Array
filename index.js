
function modifyEverySecondElement(arr)
{
  for (i = 1; i < arr.length; i += 2)
    {
        arr[i]++;
    }
    return arr;
}

module.exports = modifyEverySecondElement;
