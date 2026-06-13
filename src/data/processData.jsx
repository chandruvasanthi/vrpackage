import {FaSearch, FaDraftingCompass,FaPencilRuler,FaCut,FaPrint,FaBoxes,FaCheckCircle,FaTruck} from 'react-icons/fa'

const processData = [
  {
    id: 1,
     icon: <FaSearch />,
    title: 'Requirement Analysis',
    description: 'Customer requirements are carefully analyzed.'
  },

  {
    id: 2,
      icon: <FaDraftingCompass />,
    title: 'Design & Planning',
    description: 'Custom box designs are created based on project needs.'
  },

  {
    id: 3,
    icon: <FaBoxes />,
    title: 'Box Formation',
    description: 'Boxes are manufactured and assembled with precision.'
  },

  {
    id: 4,
    icon: <FaCheckCircle />,
    title: 'Quality Check',
    description: 'Every box is inspected to ensure quality standards.'
  },

  {
    id: 5,
    icon: <FaTruck />,
    title: 'On-Time Delivery',
    description: 'Orders are delivered safely within the committed timeline.'
  }
];
export default processData;