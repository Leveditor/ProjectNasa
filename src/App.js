import { useState, useEffect } from 'react';
import api from './Services/Api';
export default function App(){
  const  [data, setData] = useState('')
    const [nasa, setNasa] = useState();

    useEffect(() => {
      async function loadNasa() {
        const nasa = await api.get(`/natural/date/${data}?api_key=QD5x373IdSEXHJoITRbR8RjB0F2BBK9F3ansk8f0`);
        
        setNasa(nasa.data);
      }
  
      loadNasa();
    });
  
    function handleInputChange(e) {
      setData(e.target.value);
    }

  let convertDate = data.replace(/-/g, '/');

  return (
    <>
    
      <input onChange={handleInputChange}/>
      <div className=" grid gap-5 md:grid-cols-4 grid-cols-2 place-items-center mt-20">
        {Array.isArray(nasa) ? nasa.map(item => {
              return (
                  <div>
                    <img src={`https://epic.gsfc.nasa.gov/archive/natural/${convertDate}/png/${item.image}.png?api_key=QD5x373IdSEXHJoITRbR8RjB0F2BBK9F3ansk8f0`} />
                  </div>
                )
        }) : null}
      </div>
    </>
  )
}
