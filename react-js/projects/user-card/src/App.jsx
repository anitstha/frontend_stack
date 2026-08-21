import React from 'react'
import Cards from './components/Cards'

const App = () => {
  const userList = [
  {
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    name: "Anit Shrestha",
    position: "Frontend Developer",
    description: "I am a frontend developer specialized in React JS and modern UI design.",
  },
  {
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    name: "Samantha Lee",
    position: "UI/UX Designer",
    description: "Creative UI/UX designer focused on user-centered design and branding.",
  },
  {
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    name: "Rahul Sharma",
    position: "Backend Developer",
    description: "Backend developer experienced in Node.js, Express, and database management.",
  },
  {
    img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
    name: "Emily Johnson",
    position: "Project Manager",
    description: "Project manager ensuring smooth workflow and timely product delivery.",
  },
  {
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    name: "Michael Brown",
    position: "Full Stack Developer",
    description: "Full stack developer skilled in MERN stack and scalable web apps.",
  },
  {
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    name: "Priya Koirala",
    position: "Mobile App Developer",
    description: "Mobile developer building cross-platform apps using Flutter and React Native.",
  },
  {
    img: "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg",
    name: "David Wilson",
    position: "DevOps Engineer",
    description: "DevOps engineer specializing in CI/CD pipelines and cloud deployment.",
  },
  {
    img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
    name: "Sophia Martinez",
    position: "Graphic Designer",
    description: "Graphic designer creating visually engaging digital and print materials.",
  },
];

  return (
    <div className="hero">

      <h1>User Cards</h1>
    <div className='main'>
      {
        userList.map((user, index) => {
          
          return (
            <Cards
            key={index}
            userImg={user.img}
            name={user.name}
            position={user.position}
            description={user.description}
            />
          )
        })
      }
    </div>
      </div>
  )
}

export default App