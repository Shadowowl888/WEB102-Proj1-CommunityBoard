import './App.css'
import Card from './components/Card'

const App = () => {

  const RESTAURANTS = [
    {
      name: "Din Tai Fung",
      price: "$$",
      cuisine: "Taiwanese",
      image: "src/assets/dintaifung.jpeg",
      link: "https://dintaifungusa.com/"
    },
    {
      name: "Castaway",
      price: "$$$$",
      cuisine: "Steak House",
      image: "src/assets/castaway.jpeg",
      link: "https://www.castawayburbank.com/"
    },
    {
      name: "Nobu",
      price: "$$$$",
      cuisine: "Japanese Fusion",
      image: "src/assets/nobu.jpeg",
      link: "https://noburestaurants.com/"
    },
    {
      name: "Ramen Nagi",
      price: "$$",
      cuisine: "Japanese",
      image: "src/assets/ramen-nagi.jpeg",
      link: "https://ramennagiusa.com/"
    },
    {
      name: "CAVA",
      price: "$$",
      cuisine: "Mediterranean",
      image: "src/assets/cava.jpeg",
      link: "https://cava.com/"
    },
    {
      name: "Philippe The Original",
      price: "$$",
      cuisine: "French Dip Sandwich",
      image: "src/assets/phillipe.jpeg",
      link: "https://www.philippes.com/"
    },
    {
      name: "GRANVILLE",
      price: "$$",
      cuisine: "New American",
      image: "src/assets/granville.jpeg",
      link: "https://www.granvillerestaurants.com/"
    },
    {
      name: "In-N-Out Burger",
      price: "$",
      cuisine: "Fast Food",
      image: "src/assets/innout.jpeg",
      link: "https://www.in-n-out.com/"
    },
    {
      name: "Urth Caffé",
      price: "$$",
      cuisine: "European-style Café",
      image: "src/assets/urthcaffe.jpeg",
      link: "https://www.urthcaffe.com/urthcaffe.jpeg"
    },
    {
      name: "Café Santorini",
      price: "$$",
      cuisine: "Mediterranean",
      image: "src/assets/cafesantorini.jpeg",
      link: "https://cafesantorini.com/"
    },
    {
      name: "Fishwives",
      price: "$$",
      cuisine: "Seafood",
      image: "src/assets/fishwives.jpeg",
      link: "https://www.fishwives.com/"
    },
    {
      name: "Mi Piace",
      price: "$$",
      cuisine: "Italian",
      image: "src/assets/mipiace.jpeg",
      link: "http://www.mipiace.com/"
    },
  ]
  
  return (
    <div className="App">
      <header>
        <h1>Flavor Finder</h1>
        <h3>Popular Restaurants in Los Angeles</h3>
      </header>

      <div className="card-container">
        {RESTAURANTS.map((restaurant, i) => (
          <Card 
            key={i}
            name={restaurant.name}
            price={restaurant.price}
            cuisine={restaurant.cuisine}
            image={restaurant.image}
            link={restaurant.link}
          />
        ))}
      </div>
    </div>
  )
}

export default App