import './Process.css'
import processData from '../data/processData'
import { motion } from 'framer-motion'

function Process() {

  return (

    <section className='process-section' id='process'>
      <div className='process-heading'>
        <h2>  Manufacturing Process </h2>
       </div>

      <div className='horizontal-scroll'>

        <motion.div
          className='process-track'
          animate={{
    x: ['0px', '-1800px']
  }}

  transition={{
    x: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 32,
      ease: 'linear'
    }
  }}
        >

          {/* FIRST SET */}

          {processData.map((item) => (

            <div className='process-card' key={item.id} >
            <div className='card-number'> 0{item.id} </div>
            <div className='card-icon'> {item.icon} </div>
            <h3> {item.title} </h3>
            <p>  {item.description}</p>
            <div className='card-glow'></div>

            </div>

          ))}

          {/* DUPLICATE SET */}

          {processData.map((item) => (

            <div className='process-card' key={`duplicate-${item.id}`} >
            <div className='card-number'>  0{item.id} </div>
            <div className='card-icon'> {item.icon} </div>
            <h3>  {item.title} </h3>
            <p> {item.description} </p>
            <div className='card-glow'></div>

            </div>

          ))}

        </motion.div>

      </div>

    </section>

  )
}

export default Process;


