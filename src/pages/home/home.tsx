import { useState, useEffect } from "react";
import images from "../../assets";
import Header from "../../components/header/header";

const Home = () => {
  const [currentNotice, setCurrentNotice] = useState(0);

  // Avisos dinâmicos (pode ser substituído por chamada API)
  const notices = [
    "Próximo evento beneficente: Dia 25/11 às 14h na sede do CAPC",
    "Campanha do agasalho: Estamos arrecadando cobertores para o inverno",
    "Inscrições abertas para novas oficinas de arteterapia",
    "Precisamos de voluntários para nosso telemarketing solidário",
  ];

  // Rotação automática dos avisos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotice((prev) => (prev + 1) % notices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f8f8f8",
        minHeight: "80vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Header/Navbar */}
      <Header />

      {/* Hero Section */}
      <div
        style={{
          backgroundColor: "#F77C2C",
          width: "100%",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Elementos decorativos */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "5%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            zIndex: 1,
          }}
        ></div>

        {/* Conteúdo principal */}
        <div
          style={{
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <img
            src={images.LOGO_LARANJA}
            alt="Logo CAPC"
            style={{
              width: "250px",
              height: "auto",
              marginBottom: "30px",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
            }}
          />

          <h1
            style={{
              color: "#fff",
              fontSize: "2.5rem",
              fontWeight: 700,
              margin: "0 0 20px 0",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Centro de Auxílio às Pessoas com Câncer
          </h1>

          <p
            style={{
              color: "#fff",
              fontSize: "1.5rem",
              fontWeight: 500,
              margin: "0 0 40px 0",
              maxWidth: "700px",
              lineHeight: 1.5,
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            A esperança é a estrela que nos guia em busca de um novo amanhã
          </p>
        </div>
      </div>

      {/* Avisos Section */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#323232",
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "30px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            position: "relative",
            minHeight: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "6px",
              backgroundColor: "#F77C2C",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
          ></div>

          <div
            style={{
              textAlign: "center",
              padding: "20px",
            }}
          >
            <h2
              style={{
                color: "#F77C2C",
                fontSize: "1.8rem",
                marginBottom: "20px",
              }}
            >
              Avisos e Notícias
            </h2>

            <p
              style={{
                fontSize: "1.2rem",
                color: "#333",
                lineHeight: 1.6,
              }}
            >
              {notices[currentNotice]}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                gap: "10px",
              }}
            >
              {notices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNotice(index)}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "none",
                    background: currentNotice === index ? "#F77C2C" : "#ccc",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>    
    
    </div>
  );
};

export default Home;
