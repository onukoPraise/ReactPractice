/*
function MyButton() {
  return (
   <button>
     Click me
   </button>
  );
}


export default function MyApp() {
  return (
    <div>
      <h1>welcome to my app</h1>
    </div>
 );
}

*/

/*
const user = {
  name: 'heady Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};


export default function profile() {
  return (
    <>

      <h1>{user.name}</h1>
      <img
      className="Avatar"
      src={user.imageUrl}
      alt={'photo of ' + user .name}
      style={{
        width: user.imageSize,
        height: user.imageSize,
      }}
      />
    </>
    );
}

/*
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
{ title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
  }
*/

/*

import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
    <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

*/