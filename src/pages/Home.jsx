import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";

function Home() {
  const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
  const filmNewsEndpoint = getNewsCategoriesEndpoint("film", 1, 6);
  const environmentNewsEndpoint = getNewsCategoriesEndpoint(
    "environment",
    1,
    6
  );
  // Generam endpoint-ul categoriei fashion.
  const fashionNewsEndpoint = getNewsCategoriesEndpoint("fashion", 1, 6);
  let technologyData = useFetch(technologyNewsEndpoint);
  let filmData = useFetch(filmNewsEndpoint);
  let environmentData = useFetch(environmentNewsEndpoint);
  // Fetch-uim datele categoriei fashion.
  let fashionData = useFetch(fashionNewsEndpoint);

  const adaptedTechnologyData = getNewsList(technologyData);
  const adaptedFilmData = getNewsList(filmData);
  const adaptedEnvironmentData = getNewsList(environmentData);
  // Adaptam datele categoriei fashion.
  const adaptedFashionData = getNewsList(fashionData);

  return (
    <Layout>
      <section className="tech my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          <NewsCardList newsList={adaptedTechnologyData} />
          <p>
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <Link to="/category/technology" className="text-secondary">
              Tech
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="film my-5">
        <Container>
          <h1 className="mb-5 pt-3">Film</h1>
          <NewsCardList newsList={adaptedFilmData} />
          <p>
            Vezi toate știrile legate de film în secțiunea{" "}
            <Link to="/category/film" className="text-secondary">
              Film
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="environment my-5">
        <Container>
          <h1 className="mb-5 pt-3">Environment</h1>
          <NewsCardList newsList={adaptedEnvironmentData} />
          <p>
            Vezi toate știrile legate de mediu în secțiunea{" "}
            <Link to="/category/environment" className="text-secondary">
              Environment
            </Link>
            .
          </p>
        </Container>
      </section>
      {/* Adaugam sectiunea ce afiseaza stirile despre fashion */}
      <section className="fashion my-5">
        <Container>
          <h1 className="mb-5 pt-3">Fashion</h1>
          <NewsCardList newsList={adaptedFashionData} />
          <p>
            Vezi toate știrile legate de fashion în secțiunea{" "}
            <Link to="/category/fashion" className="text-secondary">
              Fashion
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorite</h1>
          <p>
            Vrei să îți salvezi știrile favorite pentru a le reciti mai încolo?
          </p>
          <p>
            În cadrul fiecărei știri găsești un buton prin care poți adăuga
            știrea la favorite.
          </p>
          <p className="pb-3">
            Vizitează secțiunea{" "}
            <Link to="/favorites" className="text-secondary">
              Favorite
            </Link>{" "}
            pentru a vedea știrile adăugate.
          </p>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
