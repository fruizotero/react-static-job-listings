/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { Filter } from "./components/Filter";
import { ListJobs } from "./components/ListJobs";
import { Header } from "./components/Header";

function App() {
  let [filterData, setFilterData] = useState([]);
  let [dataRender, setDataRender] = useState([]);
  let { data, isLoading, error } = useFetch("src/assets/data/data.json");

  const deleteValue = (value) => {
    let newData = filterData.filter((el) => el.toLowerCase() != value.toLowerCase());
    setFilterData(newData);
  };
  const addValue = (value) => {

    let isDuplicate = false;
    isDuplicate = filterData.some((el) => {
      if (el.toLowerCase() == value.toLowerCase()) return true;
    });

    if (isDuplicate) return;

    let newData = [...filterData, value];
    setFilterData(newData);
  };
  const empty = () => setFilterData([]);

  const modifyData = {
    filterData,
    deleteValue,
    addValue,
    empty,
  };

  useEffect(() => {
    if (data != null) setDataRender(data);
  }, [data]);

  useEffect(() => {
    if (data == null) return;

    if (filterData.length != 0) {
      let newData = [];
      let isInclude = false;

      data.forEach((el) => {
        let { role, level, languages, tools } = el;
        let labels = `${role}, ${level}, ${languages.join(", ")}, ${tools.join(
          ", "
        )}`;

        isInclude = filterData.every((el) => {
          if (!labels.toLowerCase().includes(el.toLowerCase())) return false;
          return true;
        });

        if (isInclude) newData.push(el);
      });

      setDataRender(newData);
    } else {
      setDataRender(data);
    }
  }, [filterData]);

  return (
    <>
      <main className="main">
        <Header>
          <Filter modifyData={modifyData} />
        </Header>
        <article className="main_content">
          <ListJobs dataRender={dataRender} modifyData={modifyData} />
        </article>
      </main>
    </>
  );
}

export default App;
