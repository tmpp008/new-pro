import './App.css';
import { Card } from './components/card/Card';
import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'
import image4 from './images/image4.jpeg'
import image5 from './images/image5.jpeg'
import image6 from './images/image6.jpeg'



function App() {
  const cards = [
    {
      url:image1,
      title:"DUKE",
      description:"The Duke bike is a high-performance sports motorcycle known for its sleek design and powerful engine, offering riders an exhilarating experience on the road. "
    },
    {
      url:image2,
      title:"KTM",
      description:"The KTM sports bike is renowned for its high-performance features, cutting-edge technology, and aggressive design, making it a favorite among motorcycle enthusiasts. "
    },
    {
      url:image3,
      title:"HONDA",
      description:"The sports Honda bike is a high-performance two-wheeler known for its cutting-edge technology, sleek design, and powerful engine, delivering an exhilarating riding experience for motorcycle enthusiasts. "
    },
    {
      url:image4,
      title:"SPORTS BIKE",
      description:"A sports bike is a high-performance motorcycle designed for speed, agility, and aerodynamics, characterized by a lightweight frame, powerful engine, and a forward-leaning riding position. "
    },
    {
      url:image5,
      title:"ROYAL ENFIELD",
      description:"The Sports Royal Enfield bike is a powerful and stylish motorcycle designed for enthusiasts who seek a blend of performance and classic design. With its iconic retro look and robust engine, it delivers an exhilarating riding experience for those who appreciate both speed and timeless aesthetics."
    },
    {
      url:image6,
      title:"SUZUKI",
      description:"The Suzuki sports bike is known for its powerful performance, sleek design, and advanced technology, making it a popular choice among motorcycle enthusiasts. With a focus on speed and agility, Suzuki's sports bikes deliver an exhilarating riding experience on both the road and the track."
    },
  ]
  return (
     <div className="app">
       {
         cards.map((card,index)=><Card key={index} card={card}/>)
       }
     </div>
  );
}

export default App;
