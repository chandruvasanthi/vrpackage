import './WhyChooseUs.css'
import {FaShieldAlt,FaBoxOpen,FaLeaf,FaHandshake} from 'react-icons/fa'

const chooseData = [
  {
    id: 1,
    icon: <FaShieldAlt />,
    title: 'Strong Quality',
    description:'Premium quality corrugated boxes with maximum durability.'
  },

  {
    id: 2,
    icon: <FaBoxOpen />,
    title: 'Safe Packaging',
    description: 'Secure packaging solutions for safe product delivery.'
  },

  {
    id: 3,
    icon: <FaLeaf />,
    title: 'Eco Friendly',
    description: 'Recyclable and sustainable packaging materials.'
  },

  {
    id: 4,
    icon: <FaHandshake />,
    title: 'Trusted Service',
    description: 'Reliable support and on-time delivery services.'
  }

]

function WhyChoose() {
  return (
    <section className='why-choose' id='why-choose'>

      <div className='container'>

        <h2 className='heading center'> Why Choose Us </h2>
        <p className='choose-subtitle'>  Strong Packaging Solutions</p>

        <div className='choose-grid'>

          {chooseData.map((item) => (

            <div className='choose-card' key={item.id} >
              <div className='choose-icon'> {item.icon} </div>
              <h3>  {item.title} </h3>
              <p>  {item.description} </p>
            </div>

          ))}

        </div>

        <div className='bottom-banner'>  WE PACK WITH PROTECTION</div>

      </div>

    </section>
  )
}

export default WhyChoose;