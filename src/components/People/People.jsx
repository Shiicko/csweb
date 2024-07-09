import * as s from "./PeopleStyled";

export const People = () => {
  return (
    <>
      <s.Titulo>
        <h2>
          Comunidad <span>📩</span>
        </h2>
      </s.Titulo>
      <s.Texto>
        <s.Comunidad>
          <p>
            Nuestra comunidad está compuesta por personas apasionadas y
            dedicadas a mejorar sus habilidades y compartir conocimientos.
          </p>
          <p>
            Únete a nosotros y descubre un espacio donde puedes aprender, crecer
            y conectarte con otros profesionales.
          </p>
        </s.Comunidad>
        <s.Opiniones>
          <p>
            <strong>Reseñas de nuestros miembros:</strong>
          </p>
          <p>
            <strong>Ana:</strong> Las mejores cajas con premios espectaculares y
            justos. Sin duda, mi web favorita para abrir cajas de CS
          </p>
          <p>
            <strong>Juan:</strong> Las sesiones de intercambio de conocimientos
            son increíblemente útiles y siempre hay algo nuevo que aprender.
          </p>
          <p>
            <strong>María:</strong> Me encanta la variedad de cajas disponibles
            y la transparencia del sistema. Gané una skin legendaria en mi
            primera apertura!
          </p>
        </s.Opiniones>
      </s.Texto>
    </>
  );
};
