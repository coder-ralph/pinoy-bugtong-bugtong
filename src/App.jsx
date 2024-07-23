import { useState, useEffect } from 'react';

function App() {
  const bugtong = [
    { bugtong: 'May dila pero di lalang', sagot: 'Sili' },
    { bugtong: 'Isang prinsesa, walang korona', sagot: 'Saging' },
    { bugtong: 'Bahay ni kuko', sagot: 'Niyog' },
    { bugtong: 'Buhok ni Adan, hindi mabilang', sagot: 'Sibuyas' },
    { bugtong: 'Isa ang tuka, apat ang paa', sagot: 'Langgam' },
    { bugtong: 'Dalawang magkapatid, iisa ang suot', sagot: 'Magas' },
    { bugtong: 'Bato-bato sa langit, tamaan wag magalit', sagot: 'Ulan' },
    { bugtong: 'Maliit man ay malakas', sagot: 'Langgam' },
    { bugtong: 'Isang butil, hindi mabilang', sagot: 'Palay' },
    { bugtong: 'Paa’y apat, ulo’y isa', sagot: 'Kama' },
    { bugtong: 'Nasa dulo ng dagat, walang tubig', sagot: 'Pulo' },
    { bugtong: 'Hindi hayop, hindi tao, araro’y labi', sagot: 'Kalabasa' },
    { bugtong: 'Munting butas puno ng hiyas', sagot: 'Kawayan' },
    { bugtong: 'Araw araw ito’y may palayok', sagot: 'Kaserola' },
    { bugtong: 'Binti’y marami, hita’y iisa', sagot: 'Dahon' },
    { bugtong: 'Mapulang bato, nadarang sa bagyo', sagot: 'Pula' },
    { bugtong: 'Higaan sa gabi, di mo mabitbit', sagot: 'Bituin' },
    { bugtong: 'Marumi ang damit, wala sa laba', sagot: 'Suka' },
    { bugtong: 'Nagsusuot ng kapote, digmaan ang kasangkapan', sagot: 'Kalasag' },
    { bugtong: 'Lumalakad ng paunti-unti, umuusad ng paurong', sagot: 'Araro' },
    { bugtong: 'Malaking punungkahoy, hindi nahihiwalay', sagot: 'Gubat' },
    { bugtong: 'Isang imahe, walang mata', sagot: 'Salamin' },
    { bugtong: 'Bumubuka pero hindi nagsasalita', sagot: 'Bulaklak' },
    { bugtong: 'Isang lagay, maraming butas', sagot: 'Palayok' },
    { bugtong: 'May paa pero hindi makalakad', sagot: 'Mesa' },
    { bugtong: 'Isang prutas, maraming buto', sagot: 'Papaya' },
    { bugtong: 'Puno ng buhok, ni hindi ka pumapatong', sagot: 'Uwak' },
    { bugtong: 'Nakapaa, hindi makakalakad', sagot: 'Puno' },
    { bugtong: 'Ilong ay pataas, tindig ay paikot', sagot: 'Sili' },
    { bugtong: 'Nakabilog, hindi butas', sagot: 'Bituin' },
	{ bugtong: 'Nang maliit ay mestiso, nang lumaki’y negro', sagot: 'Abo ng Sigarilyo' },
	{ bugtong: 'Sa init ay sumasaya, sa lamig ay nalalanta', sagot: 'Acacia' },
	{ bugtong: 'Baston ni Kapitan, Hindi ko mahawakan', sagot: 'Ahas' },
	{ bugtong: 'Tubig na nagiging bato, Batong nagiging tubig', sagot: 'Asin' },
	{ bugtong: 'Mataas kung naka-upo, mababa kung nakatayo', sagot: 'Aso' },
	{ bugtong: 'Palda ni Maria, ang kulay ay iba-iba', sagot: 'Bahaghari' },
	{ bugtong: 'Sa maling kalabit, may buhay na kapalit', sagot: 'Baril' },
	{ bugtong: 'Nagbibigay na, sinasakal pa', sagot: 'Bote' },
	{ bugtong: 'Isda ko sa upak, Nagtatatalak', sagot: 'Dila' },
	{ bugtong: 'Parang ipot na iniikot-ikot, Asukal ay ibinudbod', sagot: 'Ensaymada' },
	{ bugtong: 'Tumatakbong bahay, Tinutulak-tulak', sagot: 'Kariton' },
	{ bugtong: 'Apoy na iginuhit, isinulat sa langit', sagot: 'Kidlat' },
	{ bugtong: 'Hayan na si Katoto, dala-dala ang kubo', sagot: 'Pagong' },
	{ bugtong: 'Limang magkakapatid, iisa ang dibdib', sagot: 'Kamay' },
	{ bugtong: 'Mapa-tubig mapa-lupa, Ang dahon ay laging sariwa', sagot: 'Kangkong' },
	{ bugtong: 'Sinisindihan, wala namang inilawan', sagot: 'Sigarilyo' },
	{ bugtong: 'Tumingin ka sa akin, ang makikita mo’y ikaw din', sagot: 'Salamin' },
	{ bugtong: 'Pritong saging sa kalan, Lumutong pagkat dinamitan', sagot: 'Turon' },
	{ bugtong: 'Matanda na ang nuno, hindi pa naliligo', sagot: 'Pusa' },
	{ bugtong: 'Maliit pa si Nene, nakaka-akyat na sa tore', sagot: 'Langgam' },

  ];

  const [input, setInput] = useState('');
  const [current, setCurrent] = useState(0);

  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const [error, setError] = useState(false);

  const setRandomBugtong = () => {
    const randomIndex = Math.floor(Math.random() * bugtong.length);
    setCurrent(randomIndex);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.toLowerCase() === bugtong[current].sagot.toLowerCase()) {
      setStreak(streak + 1);
      setMaxStreak(streak + 1 > maxStreak ? streak + 1 : maxStreak);
      setError(false);

      localStorage.setItem('streak', streak + 1);
      localStorage.setItem('maxStreak', streak + 1 > maxStreak ? streak + 1 : maxStreak);
    } else {
      const b = bugtong[current].bugtong;
      const s = bugtong[current].sagot;
      setError(`Mali! Ang tamang sagot para sa "${b}" ay "${s}"`);
      setStreak(0);
      localStorage.setItem('streak', 0);
    }

    setInput('');
    setRandomBugtong();
  };

  useEffect(() => {
    setRandomBugtong();
    setStreak(parseInt(localStorage.getItem('streak')) || 0);
    setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 text-white text-center">
      <header className="p-6 mb-8">
        <h1 className="text-2xl font-bold uppercase">Pinoy Bugtong-Bugtong (Filipino Riddles)</h1>
        <div>
          <p>{streak} / {maxStreak}</p>
        </div>
      </header>

      <div className="text-4xl font-bold mb-8">
        <p>{bugtong[current].bugtong}</p>
      </div>

      <div className="mb-8">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={input}
			placeholder="sagot"
            className="block w-64 bg-transparent border-b-2 border-b-white mx-auto outline-none text-center text-4xl pb-2"
          />
        </form>
      </div>
      {error &&
        <div>
          <p className="text-red-500">{error}</p>
        </div>
      }
    </div>
  );
}

export default App;
