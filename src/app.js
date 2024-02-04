import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

function App() {
  const [content, setContent] = useState('');

  useEffect(() => {
    client
      .getEntry('helloWorld') // Remplacez par l'ID de votre entrée Contentful
      .then((entry) => {
        setContent(entry.fields.helloWorld);
      })
      .catch((error) => console.error('Erreur lors de la récupération du contenu Contentful', error));
  }, []);

  return (
    <div>
      <h1>Contenu de Contentful</h1>
      <p>{content}</p>
    </div>
  );
}

export default App;
