import "./index.css";

interface Pizza {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
}

const pizzaData: Pizza[] = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Fast React Pizz Co.</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menus</h2>
      {pizzaData.map((pizza, index) => (
        <Pizza
          key={index}
          name={pizza.name}
          ingredients={pizza.ingredients}
          photoName={pizza.photoName}
          price={pizza.price}
          soldOut={pizza.soldOut}
        />
      ))}
    </main>
  );
};

const Pizza = (props: Pizza) => {
  const { name, ingredients, photoName, price, soldOut } = props;

  return (
    !soldOut && (
      <>
      <div className="pizza">
      <img src={photoName} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>$ {price}</span>
        </div>
      </div>
      </>
    )
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? `We're currently open` : `Sorry we're currently close`}!
    </footer>
  );
};

export default App;
