import { useEffect, useState } from 'react'
import './App.css'

export function FollowMouse(){
  
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({x: 0 , y: 0})
  
    useEffect(() => {
      console.log('Effect' , { enabled })
      const handleMove = (event) => {
        const{ clientX, clientY} = event      
        setPosition({ x: clientX, y: clientY})
      }
  

       // se activa el evento del cursor
      if (enabled){
      window.addEventListener('pointermove', handleMove)
      }
      
      //aca deja d ejecutar el efecto cuando necesario. ESTO SERIA LIMPIAR EL EFECTO
      return () =>{
        console.log('Clean up succesfully --> se borro el registro del efecto')
        window.removeEventListener('pointermove', handleMove) 
      }
    }, [enabled])
  
  
    return(
      <main>
      <h3>Following arrow cursor</h3>
      <div style ={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: 25,
        width: 48,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} 
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Unactivate ' : 'Activate '}
        Follow Pointer
      </button>
      </main>
    )
  }
  