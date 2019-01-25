import React, { Component } from 'react';

class Home extends Component {
  state = {};
  render() {
    return (
      <section id='home'>
        <div className='container'>
          <h2>Witamy na stronie głównej</h2>
          <div>
            <p>
              Serdecznie zapraszamy do spędzenia miłego wypoczynku w Olczańskim Domu! Dzięki połączeniu nowoczesności z
              regionalnym wystrojem wnętrz poczują Państwo unikalną atmosferę naszego regionu. Tanie noclegi w czystych
              i ładnie urządzonych sypialniach są naszym niewątpliwym atutem. Zapraszamy gości indywidualnych jak i
              zarówno grupy zorganizowane.
            </p>
            <p>
              Obiekt Olczański Dom jest oddalony o 2,4 km od wyciągu narciarskiego Pardałówka w Zakopanem. Do dyspozycji
              Gości jest taras oraz bezpłatny prywatny parking. Park wodny jest oddalony o 3 km. We wszystkich
              pomieszczeniach można korzystać z bezpłatnego WiFi.
            </p>
            <p>
              Obiekt obejmuje część wypoczynkową oraz aneks kuchenny. Dla Gości przygotowano pościel i ręczniki. Obiekt
              nie zapewnia wyżywienia. Na miejscu dostępny jest taras słoneczny.
            </p>
            <p>
              Obiekt jest oddalony o 4,2 km od skoczni narciarskiej Wielka Krokiew oraz 4,3 km od Gubałówki. W okolicy
              panują dogodne warunki do uprawiania rozmaitych form aktywnego wypoczynku, w tym turystyki pieszej i
              rowerowej. Port lotniczy Kraków-Balice jest oddalony od obiektu o 85 km.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
