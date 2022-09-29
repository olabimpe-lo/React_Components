import React from 'react';
//create a component
function Greetings(){
  return <p>Good evening! How are you?</p>
}

function UserProfileCard(){
  return (
    <div className='card'>
      <img
        className='card-image'
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Avatar"
        style={{ width: 100 }}
      />
      <div className='card-name'>Jesus Christ</div>
      <div>He is the so of God</div>
    </div>
  );
}

//A list item component
function ListItem(){
  return (
    <li>
      Tesla
    </li>
  )
}

//Create our root component => App Component

function App() {

  // List of items...
  const items = ['Audi', 'Tesla', 'BMW', 'Mercedes']

  //Create a list of list items
    const listItems = items.map(item => {
      return <li key={item}>{item }</li>
    })

    return(
      <ol>
        {listItems}
      </ol>
    );

  return (
    <section className='main-page'>
        <UserProfileCard/>
    </section>
  );
}

export default App;
