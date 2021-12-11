const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(array) {
    
    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < array.length; j++) {
            
            if (array[i] == array[j] && i != j) {

                array.splice(j, 1);

            }
            
        }
        
    }

    return array;

  }

  let newDuplicates = removeDuplicates(duplicates);

  console.log(newDuplicates);