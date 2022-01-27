import React from 'react';
import { Article } from './components/Article';
import { MisionVissionObjectivesWrapper } from './styles';

import marielis from '../../assets/aboutus/marielis_pasteleria.jpg';
import mision from '../../assets/aboutus/mision_pasteleria.jpg';
import vision from '../../assets/aboutus/vision_pasteleria.jpg';

export const MisionVissionObjectives = () => {
  return (
    <MisionVissionObjectivesWrapper>
      <Article title={"Misión"} paragraph={"Alegrar a nuestros clientes en sus celebraciones y momentos más especiales con familiares y amigos"} src={mision} />
      <Article title={"Visión"} paragraph={"Ser reconocidos como una pastelería internacional de primer nivel, que inspira a crear lazos de unión"} src={vision} />
      <Article title={"Valores"} paragraph={"Nuestro propósito es inspirar a nuestro equipo a alcanzar todo su potencial y ayudarlos a cumplir sus metas y sueños"} src={marielis} />
    </MisionVissionObjectivesWrapper>
  )
} 