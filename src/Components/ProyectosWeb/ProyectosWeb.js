import React from 'react';
import './ProyectosWeb.scss';

const ProyectosWeb = (props) => {
  const { data } = props;

  return (
    <div className="container-pw" data-testid="proyectoweb-test">
      <div className="titulo-pw">{data.title}</div>
      <div className="vert-divider" />
      <div className="content-pw">
        {data.items.map((item) => (
          <div className="child-pwc" key={item.title}>
            <div className="image-child-pwc">
              <img src={item.image} alt="proyectow" />
            </div>
            <div className="description-child-pwc">
              <div className="title">{item.title}</div>
              <div className="description">{item.description}</div>
              <div className="link">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Ir al sitio
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProyectosWeb;
