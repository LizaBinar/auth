import Card from "../UI/Card/Card";
import Auth from "../component/Auth/Auth";

import css from './App.module.css'

function App() {
  return (
    <main className={css.main}>
      <Card>
          <Auth />
      </Card>
    </main>
  );
}

export default App;
