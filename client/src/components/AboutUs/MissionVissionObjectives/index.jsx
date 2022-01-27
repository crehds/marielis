import React from 'react';
import { Article } from './components/Article';
import { MissionVissionObjectivesWrapper } from './styles';

import marielis from '../../../assets/aboutus/marielis_pasteleria.jpg';
import mision from '../../../assets/aboutus/mision_pasteleria.jpg';
import vision from '../../../assets/aboutus/vision_pasteleria.jpg';

export const MissionVissionObjectives = () => {
  return (
    <MissionVissionObjectivesWrapper>
      <Article title={"Misión"} paragraph={"Alegrar a nuestros clientes en sus celebraciones y momentos más especiales con familiares y amigos, volviéndolos únicos e incomparables"} src={mision} />
      <Article title={"Visión"} paragraph={"Ser reconocidos como una pastelería internacional de primer nivel, que inspira a crear lazos de unión y familiaridad en su comunidad. Utilizando los mismos principios y valores con los que empezamos y hasta hoy nos acompañán"} src={vision} />
      <Article title={"Objetivos"} paragraph={"Nuestro objetivo es inspirar a nuestro equipo a alcanzar todo su potencial y ayudarlos a cumplir sus metas y sueños"} src={marielis} />
    </MissionVissionObjectivesWrapper>
  )
} 