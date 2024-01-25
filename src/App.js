// App.js
import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'reactstrap'
import './App.css';
import DetailsPage from './DetailsPage';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detailsData, setDetailsData] = useState([])
  const [openModal, setOpenModal] = useState(false)

  // click the details button to fetch the pokemon details and open the modal
  const handleDetailsPage = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id + 1}`);;
      const data = await response.json();
      setDetailsData(data);
      setOpenModal(true)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  // fetch list of pokemon data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        console.log(response);
        const data = await response.json();
        setPokemonData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  return (
    <div className='App'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 className='mb-3'>Pokemon Data</h1>
          <Container>
            <Table bordered hover striped responsive
            >
              <thead>
                <tr>
                  <th>
                    #
                  </th>
                  <th>
                    Name
                  </th>
                  <th>
                    Action
                  </th>

                </tr>
              </thead>
              <tbody>
                {pokemonData.results.map((pokemon, index) => (
                  <tr key={index}>
                    <th scope="row">
                      {index + 1}
                    </th>
                    <td>
                      {pokemon.name}
                    </td>
                    <td>
                      <Button onClick={() => handleDetailsPage(index)}>Details</Button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </div>
      )}
      <DetailsPage openModal={openModal} setOpenModal={setOpenModal} detailsData={detailsData} />
    </div>
  );
};

export default App;

