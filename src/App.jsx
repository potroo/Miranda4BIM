import React, { useState } from "react";

function FormularioPerfil() {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    telefone: "",
    instagram: "",
    github: "",
    pensamento: "",
    probleminha: "",
    ultimaSerie: "",
    ultimoJogo: "",
    musica: "",
    genero: "",
    habilidadeEspecial: "",
    poderEspecial: "",
    timeTorce: ""
  });

  // Atualiza o estado conforme usuário digita
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const idadeNum = Number(formData.idade);
    if (isNaN(idadeNum) || idadeNum <= 0) {
      alert("Por favor, insira uma idade válida!");
      return;
    }

    // Aqui você pode fazer a integração com a API na próxima etapa
    console.log("Dados capturados:", formData);
    alert("Formulário enviado com sucesso! (ainda sem integração com API)");
  }

  return (
    <div style={{ maxWidth: 600, margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Formulário de Perfil</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="idade">Idade:</label>
        <input
          type="number"
          id="idade"
          name="idade"
          placeholder="Digite sua idade"
          value={formData.idade}
          onChange={handleChange}
          required
        />

        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          placeholder="(XX) XXXX-XXXX"
          value={formData.telefone}
          onChange={handleChange}
        />

        <label htmlFor="instagram">Instagram:</label>
        <input
          type="text"
          id="instagram"
          name="instagram"
          placeholder="@seuinstagram"
          value={formData.instagram}
          onChange={handleChange}
        />

        <label htmlFor="github">GitHub:</label>
        <input
          type="text"
          id="github"
          name="github"
          placeholder="seuUsuarioGitHub"
          value={formData.github}
          onChange={handleChange}
        />

        <label htmlFor="pensamento">Pensamento:</label>
        <textarea
          id="pensamento"
          name="pensamento"
          placeholder="Compartilhe um pensamento"
          value={formData.pensamento}
          onChange={handleChange}
        />

        <label htmlFor="probleminha">Probleminha:</label>
        <textarea
          id="probleminha"
          name="probleminha"
          placeholder="Um problema que você enfrenta"
          value={formData.probleminha}
          onChange={handleChange}
        />

        <label htmlFor="ultimaSerie">Última série que assistiu:</label>
        <input
          type="text"
          id="ultimaSerie"
          name="ultimaSerie"
          placeholder="Nome da série"
          value={formData.ultimaSerie}
          onChange={handleChange}
        />

        <label htmlFor="ultimoJogo">Último jogo que jogou:</label>
        <input
          type="text"
          id="ultimoJogo"
          name="ultimoJogo"
          placeholder="Nome do jogo"
          value={formData.ultimoJogo}
          onChange={handleChange}
        />

        <label htmlFor="musica">Música favorita:</label>
        <input
          type="text"
          id="musica"
          name="musica"
          placeholder="Nome da música"
          value={formData.musica}
          onChange={handleChange}
        />

        <label htmlFor="genero">Gênero:</label>
        <input
          type="text"
          id="genero"
          name="genero"
          placeholder="Seu gênero musical preferido"
          value={formData.genero}
          onChange={handleChange}
        />

        <label htmlFor="habilidadeEspecial">Habilidade especial:</label>
        <input
          type="text"
          id="habilidadeEspecial"
          name="habilidadeEspecial"
          placeholder="Sua habilidade especial"
          value={formData.habilidadeEspecial}
          onChange={handleChange}
        />

        <label htmlFor="poderEspecial">Poder especial:</label>
        <input
          type="text"
          id="poderEspecial"
          name="poderEspecial"
          placeholder="Seu poder especial"
          value={formData.poderEspecial}
          onChange={handleChange}
        />

        <label htmlFor="timeTorce">Time que torce:</label>
        <input
          type="text"
          id="timeTorce"
          name="timeTorce"
          placeholder="Nome do time"
          value={formData.timeTorce}
          onChange={handleChange}
        />

        <button type="submit" style={{ marginTop: 20, padding: "10px 20px" }}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormularioPerfil;

