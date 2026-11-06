import Carta from "./components/Carta";

function App() {

  //Estructura basica de TSX - TypeScriptXML

  let nombre: string = "Jonatan";

  let operacion: number = 50 * 1273;

  return (
    <>
      <p>Hola mi nombre es {nombre}</p>
      <p>El resultado de la operacion es: {operacion}</p>
      <Carta 
        imagen="https://imgs.search.brave.com/6Sfrjx9vq-ciil5Hs1TB9MiVJ7gTrKPa2qRNs1Y1HQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY1/NjU4NDc2L2RlL3Zl/a3Rvci9idXNpbmVz/cy10ZWFtLW1pdGFy/YmVpdGVyLXZvbi1w/ZXJzb25lbi12ZXJz/Y2hpZWRlbmVyLWhl/cmt1bmZ0LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1BTGlV/djZjbElMZHJTTGhF/OGJsMzFEV0N2Y0tB/SWU3TnI1TXRDdFBf/QnZrPQ"
        titulo="Matroshka"
        descripcion="Juguete"
      />
      <Carta
        imagen="https://imgs.search.brave.com/BJ_KyNz4HADIJ3fJbhHwhKpDRJpSFt35S-6WvjhwTDY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vdmVqYWEvdmVq/YWExOTA4L3ZlamFh/MTkwODAwMDQ4LzEy/ODc2NDcxNi1mb25k/by1kZS1qdWd1ZXRl/cy1kZS1tYWRlcmEt/cGFyYS1uaSVDMyVC/MW9zLWd1c2Fuby1k/ZS1qdWd1ZXRlLWRl/LWJlYiVDMyVBOS1j/b2xvcmlkby15LWNv/Y2hlLWRlLW1hZGVy/YS1zb2JyZS5qcGc_/dmVyPTY"
        titulo="Juguete"
        descripcion="Juguete nuevo"
      />
      <Carta 
        
      />
    </>
  )
}

export default App