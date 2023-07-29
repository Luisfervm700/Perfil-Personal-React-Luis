import React from 'react';

import img from './components/img/Luis_Fernando_Velásquez_Monsalve.jpg.jpg'; // Ruta de la imagen estática

import {Header} from './components/Header';
import {Profile} from './components/Profile';
import {AcademicBackground} from './components/AcademicBackground';
import {Experience} from './components/Experience';
import {Skills} from './components/Skills';
import {Interests} from './components/Interests';
import {Languages} from './components/Languages';

function App() {
  const profileData = {
      name: "Luis Fernando Velásquez Monsalve",
      profession: "FrontEnd Developer",
      address: "Filandia, Colombia.",
      email: "luisfernandovm700@gmail.com",
      website: "https://github.com/Luisfervm700/Perfil-Personal-React-Luis",
      phone: "3136623627",
      avatar: img,
      profile: "Soy un programador apasionado con experiencia en el desarrollo de software y soluciones innovadoras. Mi objetivo principal es crear aplicaciones de alta calidad que cumplan con las necesidades y expectativas de los usuarios. Con un enfoque en el diseño limpio y la funcionalidad eficiente, busco constantemente mejorar mis habilidades y mantenerme actualizado con las últimas tecnologías y tendencias en el mundo del desarrollo de software.",
    academic: [
      {
        degree: "Tecnologo en Analisis y Desarrollo de Software.",
        description: "Mi estudio incluye Desarrollo de Software, Bases de Datos y Diseño de Interfaces.",
        institution: "Sena",
        startDate: "Julio 2021",
        endDate: "Presente"
      }
    ],
    experience: [
      {
        company: "Sena",
        endDate: "Presente",
        jobDescription: "Colaboración con el equipo de desarrollo para mejorar la eficiencia y la calidad del código.",
        jobTitle: "Backend y Frontend",
        startDate: "Julio 2021"
      }
    ],
    skills: [
      {
        name: "React",
        percentage: "70%"
      }
    ],
    interest: ["React", "frontend"],
    languages: [
      {
        name: "Spanish",
        percentage: "95%"
      },
      {
        name: "English",
        percentage: "45%"
      }
    ]
  };


  return (
    <div className="container mx-auto p-4 bg-blue-200">
      <Header
        name={profileData.name}
        profession={profileData.profession}
        avatar={profileData.avatar} 
        address={profileData.address}
        email={profileData.email}
        website={profileData.website}
        phone={profileData.phone}
      />  
      <Profile profile={profileData.profile} />
      <Experience experience={profileData.experience} />

      <div className="flex w-full">
        <div className="w-1/2 pr-4">
          <AcademicBackground academic={profileData.academic} />
          <Interests interests={profileData.interest} />
        </div>
        
        <div className="w-1/2 pr-4">
          <Languages languages={profileData.languages} />
          <Skills skills={profileData.skills} />
        </div>
      </div>

    </div>
  );
}

export default App;