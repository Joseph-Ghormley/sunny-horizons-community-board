import './App.css';

function Card({ title, description, category, buttonText }) {
  return (
    <div className="card">
      <p className="card-category">{category}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}

function App() {
  const cards = [
    {
      title: 'Starter Guide',
      category: 'Getting Started',
      description: 'Learn how to begin your journey in TerraNova and prepare for survival.',
      buttonText: 'View Guide',
    },
    {
      title: 'Warps',
      category: 'Travel',
      description: 'Find important warp locations across the Sunny Horizons Network.',
      buttonText: 'View Warps',
    },
    {
      title: 'Economy',
      category: 'Server System',
      description: 'Learn how currency, trading, and player progression work on the server.',
      buttonText: 'Learn More',
    },
    {
      title: 'Shopkeepers',
      category: 'Trading',
      description: 'Discover server shops, market areas, and useful shopkeeper locations.',
      buttonText: 'Find Shops',
    },
    {
      title: 'Weapons',
      category: 'Combat',
      description: 'Explore custom weapons and gear used throughout the server world.',
      buttonText: 'View Weapons',
    },
    {
      title: 'Guilds',
      category: 'Community',
      description: 'Join or create guilds, compete with other players, and build your team.',
      buttonText: 'View Guilds',
    },
    {
      title: 'Claiming Land',
      category: 'Protection',
      description: 'Protect your builds and bases by learning how land claiming works.',
      buttonText: 'Claim Land',
    },
    {
      title: 'Soul System',
      category: 'Progression',
      description: 'Understand the Soul System and how it connects to long-term progression.',
      buttonText: 'Learn System',
    },
    {
      title: 'Mob Rush',
      category: 'Event',
      description: 'Fight waves of mobs and test your survival skills in server challenges.',
      buttonText: 'Join Event',
    },
    {
      title: 'Event Boss',
      category: 'Boss Battle',
      description: 'Team up with players to defeat powerful bosses during community events.',
      buttonText: 'View Bosses',
    },
    {
      title: 'Goo Lagoon',
      category: 'Exploration',
      description: 'Explore the mysterious Goo Lagoon and uncover unique server content.',
      buttonText: 'Explore',
    },
    {
      title: 'Server Events',
      category: 'Community',
      description: 'Stay updated on build contests, boss fights, and community activities.',
      buttonText: 'See Events',
    },
  ];

  return (
    <div className="app">
      <header className="hero">
        <h1>Sunny Horizons Network</h1>
        <p className="tagline">From the Heart of TerraNova to the Heights of GreenCliff</p>
        <p className="subtitle">One Network — Endless Horizons</p>
      </header>

      <section className="intro">
        <h2>Community Board</h2>
        <p>
          Sunny Horizons Network is a Minecraft survival server focused on exploration,
          guild competition, player economy, and community events.
        </p>
      </section>

      <section className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            category={card.category}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </section>

      <footer>
        <p>Sunny Horizons Network — Community-run Minecraft server</p>
        <p>Not affiliated with Mojang or Microsoft.</p>
      </footer>
    </div>
  );
}

export default App;