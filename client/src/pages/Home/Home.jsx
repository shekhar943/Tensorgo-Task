import React, { useState } from 'react';
import QuerySection from './QuerySection';

import './Home.css';

const Home = () => {
  const [queries, setQueries] = useState({
    general: [],
    features: [],
    pricing: [],
    implementation: [],
  });
  const logout = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	};

  const addQuery = (section, query, price) => {
    setQueries((prevQueries) => ({
      ...prevQueries,
      [section]: [...prevQueries[section], { query, price }],
    }));
  };


  return (
    <div className="app">
      <header>
        <h1>Customer Service Platform</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#general">General Queries</a>
          </li>
          <li>
            <a href="#features">Product Features Queries</a>
          </li>
          <li>
            <a href="#pricing">Product Pricing Queries</a>
          </li>
          <li>
            <a href="#implementation">Product Feature Implementation Requests</a>
          </li>
        </ul>
      </nav>
      <main>
        <QuerySection
          title="General Queries"
          section="general"
          queries={queries.general}
          addQuery={addQuery}
        />
        <QuerySection
          title="Product Features Queries"
          section="features"
          queries={queries.features}
          addQuery={addQuery}
        />
        <QuerySection
          title="Product Pricing Queries"
          section="pricing"
          queries={queries.pricing}
          addQuery={addQuery}
          includePrice
        />
        <QuerySection
          title="Product Feature Implementation Requests"
          section="implementation"
          queries={queries.implementation}
          addQuery={addQuery}
          includePrice
        />
      </main>

      <button className='btn-btn-btn' onClick={logout}>
						Log Out
					</button>
      <footer>
        <p>&copy; 2023 Customer Service Platform</p>
      </footer>
    </div>
  );
};

export default Home;
