import { Card, Col, Input, Row, Tooltip } from "antd";
import "../assets/css/movies.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const MoviesPage = () => {

  const [movies, setMovies] = useState();
  const [searchWord, setSearchWord] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const rightMenu = [
    { name: "İngilizce Filmler", key: "en" },
    { name: "Fransızca Filmler", key: "fr" },
    { name: "Korece Filmler", key: "ko" },
    { name: "Hint Filmleri", key: "hi" },
    { name: "Macera Filmleri", key: "adventure" }, //ben key'e göre arama yaptığım için bu türden bir key yok ondan dolayı macera kategorisi gelmeyecek
  ];

  //Apiye istek atıyordu çoklu , bundan dolayı useeffect içine alıyoruz bu sayede sayfa ilk yüklendiğinde geliyor tekrar apiye istek atmıyor.
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjcxYWYxYzRhODlkZGY3MjZjMTEzMzczNjFlY2ZmMyIsInN1YiI6IjY2MDY2ZDQ1MzAzYzg1MDE3Y2I4Y2I1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iMIy2bZohfSEv2Fp0t0Ulw2sOUEjo1X5LJma5x0m6I0",
      },
    };

    axios(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => setMovies(response.data.results))
      .catch((err) => console.error(err))
  }, []);

  // console.log("dilek", searchWord);
  // console.log("movies", movies);
  //console.log("image",image[0].path)

  return (
  
     <div
      style={{
        backgroundColor: "#000000",
        padding: "3rem",
      }}
    >
      <Row style={{ marginTop: "100px",minHeight:"100vh" }}>

        {/* Buradı lg de 18 ayırdığımız ilk kolon */}
        <Col xs={12} sm={18} md={18} lg={18} xl={18}>
          <Row className="d-flex p-0 m-0">
            {movies
              ?.filter((item) => {
                return searchWord.toLocaleLowerCase("tr-TR") === ""  // toLocaleLowerCase("tr-TR")--> burada bütün tr ifadelerini de almak istedim, küçük büyük harf duyarlılığı olmasın diye kullandım.
                  ? item //bütün veri dönsün. 
                  : item.title.toLocaleLowerCase("tr-TR").includes(searchWord);  //İncludes bizim title ifadelerimiz içinde searchden aldığımız değer var mı yok mu diye kontrol eder.
              })
              .filter((item) => {
                if (selectedLanguage === "") return item; //eğer dil seçilmediyse var olan bütün verileri getir.
                return item.original_language.includes(selectedLanguage); //Burada da bir döngü var filitreleme dışında , 20 veri içinde language kısımlarına bakıyor state de var mı o dil diye.
              })
              .map((item) => {
                return (
                  <Col xs={24} sm={12} md={8} lg={6} xl={6} className="mb-5">
                    <Card
                      style={{
                        width: "80%",
                        backgroundColor: "rgb(26,24,24)",
                        border: "1px solid gray",
                      }}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} // basic kısımda döküman kısmından buldum
                        alt=""
                        style={{ width: "100%", height: "260px" }}
                      />

                      <Col
                        xs={24}
                        sm={18}
                        md={24}
                        lg={24}
                        xl={24}
                        className="mt-2"
                      >
                        {/* Tooltip ile title prop. imleç geldiğinde hepsini göstermeyi sağladık*/}
                        <Tooltip title={item.title}>
                          <p
                            style={{
                              fontWeight: "bold",
                              width: "150px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap", //yazıların taşan kısımlarında textOverflow ve whitespace kullandık. --> ... alındı taşan kısımlar
                              color: "white",
                            }}
                          >
                            {item.title}
                          </p>
                        </Tooltip>
                      </Col>

                      <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={24}
                        xl={24}
                        className="d-flex justify-content-between mt-2"
                      >
                        <span className="fw-bold text-white">
                          {item.original_language.toUpperCase()}
                        </span>
                        <span className="fw-bold text-white">
                          {item.release_date}
                        </span>
                      </Col>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </Col>

        {/* Buradı lg de 6'ya ayırdığımız ikinci kolon */}
        <Col
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          className="px-2 "
          style={{ backgroundColor: "rgb(26,24,24)", borderRadius: "5px" }}
        >
          <Input
            className="movies-search-input"
            type="text"
            placeholder="Film Ara"
            onChange={(e) =>
              setSearchWord(e.target.value.toLocaleLowerCase("tr-TR"))
            } //burada search deki kelimleri aldık tek tek
            style={{
              height: "50px",
              backgroundColor: "rgb(35,35,35)",
              marginTop: "10px",
            }}
          />

          {rightMenu.map((item) => {
            return (
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                className="d-flex align-items-center mt-3"
              >
                <span
                  onClick={() => setSelectedLanguage(item.key)}
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer", // Tıklanabilir imleç çıkması için kullandık
                  }}
                  className="ms-2"
                >
                  {item.name}
                </span>
              </Col>
            );
          })}
        </Col>
      </Row>
    </div>

  );
};
