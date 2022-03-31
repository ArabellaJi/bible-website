import React, {useState, useEffect} from 'react'; 
import "./App.css"

const Verse = () => {
  const [verses, setVerses] = useState(null);
  
  const url = "https://labs.bible.org/api/?passage=";

  const fetchData = async (book, chapter, verse) => {
    if (verses == null || (book.length == 0 && chapter.length == 0 && verse.length == 0)) {
      const res = await fetch("https://labs.bible.org/api/?passage=random&type=json");
      /**newVerse */
      const Verses = await res.json();
      console.log(Verses);
      setVerses(Verses);
    } else if (chapter.length === 0 && verse.length === 0) {
      const res = await fetch("https://labs.bible.org/api/?passage=" + book + "%201:1&type=json");
      const Verses = await res.json();
      setVerses(Verses);
    } else if (verse.length === 0) {
      const res = await fetch("https://labs.bible.org/api/?passage=" + book + "%20" + chapter + ":1&type=json");
      const Verses = await res.json();
      setVerses(Verses);
      console.log(111);
    } else {
      const res = await fetch(url + book + "%20" + chapter + ":" + verse + "&type=json");
      const Verses = await res.json();
      setVerses(Verses);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  console.log(verses);

  const handleSubmit = (e) => {
    fetchData(document.getElementById("book").value, document.getElementById("chapter").value, document.getElementById("verse").value);
    e.preventDefault();
  };

  return (
    <div  className="page">
      <form action="/" method="get">
        <input type="text" id="book" placeholder="Book"/>
        <input type="text" id="chapter" placeholder="Chapter"/>
        <input type="text" id="verse" placeholder="Verse"/>
        <button type="submit" onClick={handleSubmit}>Search</button>
      </form>
      <h1 className="text">{verses ? (verses[0].bookname + ' ' + verses[0].chapter + ':' + verses[0].verse) : 'loading...'}</h1>
      <h3>{verses ? (verses[0].text) : 'loading...'}</h3>
    </div>
  );
}

export default Verse;