import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import debounce from "debounce";
import styled from "styled-components";
import TopBar from "./components/TopBar";
import Form from "./components/Form";
import Results from "./components/Results";
import { Person } from "./types";

const Page = styled.div`
  width: 100%;
  height: 100vh;
`;

const Body = styled.div`
  min-height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function App() {
  const [people, setPeople] = useState<Array<Person>>([]);
  const [loading, setLoading] = useState(false);
  const allData = useRef<Array<Person>>([]);

  useEffect(() => {
    setLoading(true);
    axios.get("data.json").then(res => {
      setPeople(res.data);
      allData.current = res.data;
      setLoading(false);
    });
  }, []);

  function filter(e: React.ChangeEvent<HTMLInputElement>) {
    const results = allData.current.filter(person => person.name.toLowerCase().includes(e.target.value.toLocaleLowerCase()));
    setPeople(results);
  };

  return (
    <Page>
      <TopBar />
      <Body>
        <Form 
          filter={debounce(filter, 250)}
        />
        <Results 
          loading={loading}
          people={people}
        />
      </Body>
    </Page>
  );
};


export default App;
