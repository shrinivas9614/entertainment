import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { Card } from "../utils";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const Main = () => {
  const [url, setUrl] = useState(
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=68c91f583f5eeeb897f4a19583efd498&hash=273d3c50c72d286afb696ade0768b0f1"
  );
  const [item, setItem] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      setItem(res.data.data.results);
    };
    fetchData();
  }, [url]);

  const searchMarvel = () => {
    setUrl(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=68c91f583f5eeeb897f4a19583efd498&hash=273d3c50c72d286afb696ade0768b0f1`
    );
  };

  return (
    <div className="header">
      <div className="bg">
        <img src="./images/bg.png" alt="" />
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div className="search-bar">
              <img src="./images/logo.jpg" alt="logo" />
              <InputGroup className="mb-3">
                <FormControl
                  type="search"
                  placeholder="Search Here"
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={searchMarvel}
                />
                <Button variant="outline-secondary" onClick={searchMarvel}>
                  Search
                </Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12}>
            <div className="content">
              {!item ? <p>Items Not Found</p> : <Card data={item} />}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
