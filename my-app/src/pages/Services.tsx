import React from 'react';
import people from './api/data'

const Services = () => {
  return (
    <>
     <div className="mx-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {people.map((person) => (
          <div key={person.name} className="bg-white p-6 rounded-md">
            <h2 className="text-lg font-bold mb-2">{person.name}</h2>
            <p className="text-gray-500 mb-6 ">{person.discription}</p>
            <img src='https://www.racksolutions.com/news//app/uploads/AdobeStock_90603827-scaled.jpeg'/>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
export const getStaticProps = async () => {
    const response = await fetch('./api/data.ts')
    const people = await response.json()
  
    return {
      props: { people },
    }
  }

export default Services