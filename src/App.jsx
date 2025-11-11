import React, { useState } from "react";
import "./App.css";

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

  // Função única para atualizar qualquer campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Envio para API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const idadeNum = Number(formData.idade);
    if (isNaN(idadeNum) || idadeNum <= 0) {
      alert("Por favor, insira uma idade válida!");
      return;
    }

    try {
      // Exemplo com fetch (pode trocar por axios se quiser)
      const response = await fetch("https://suaapi.com/endpoint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar os dados para a API");
      }

      const data = await response.json();
      console.log("Resposta da API:", data);
      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <div id="root">
      <h1>Formulário</h1>

      <form onSubmit={handleSubmit} onChange={handleChange}>
        {/* Campos */}
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" value={formData.nome} />

        <label htmlFor="idade">Idade:</label>
        <input type="number" id="idade" name="idade" placeholder="Digite sua idade" value={formData.idade} />

        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" placeholder="(XX) XXXX-XXXX" value={formData.telefone} />

        <label htmlFor="instagram">Instagram:</label>
        <input type="text" id="instagram" name="instagram" placeholder="@seuinstagram" value={formData.instagram} />

        <label htmlFor="github">GitHub:</label>
        <input type="text" id="github" name="github" placeholder="seuUsuarioGitHub" value={formData.github} />

        <label htmlFor="pensamento">Pensamento:</label>
        <textarea id="pensamento" name="pensamento" placeholder="Compartilhe um pensamento" value={formData.pensamento} />

        <label htmlFor="probleminha">Probleminha:</label>
        <textarea id="probleminha" name="probleminha" placeholder="Um problema que você enfrenta" value={formData.probleminha} />

        <label htmlFor="ultimaSerie">Última série que assistiu:</label>
        <input type="text" id="ultimaSerie" name="ultimaSerie" placeholder="Nome da série" value={formData.ultimaSerie} />

        <label htmlFor="ultimoJogo">Último jogo que jogou:</label>
        <input type="text" id="ultimoJogo" name="ultimoJogo" placeholder="Nome do jogo" value={formData.ultimoJogo} />

        <label htmlFor="musica">Música favorita:</label>
        <input type="text" id="musica" name="musica" placeholder="Nome da música" value={formData.musica} />

        <label htmlFor="genero">Gênero:</label>
        <input type="text" id="genero" name="genero" placeholder="Seu gênero musical preferido" value={formData.genero} />

        <label htmlFor="habilidadeEspecial">Habilidade especial:</label>
        <input type="text" id="habilidadeEspecial" name="habilidadeEspecial" placeholder="Sua habilidade especial" value={formData.habilidadeEspecial} />

        <label htmlFor="poderEspecial">Poder especial:</label>
        <input type="text" id="poderEspecial" name="poderEspecial" placeholder="Seu poder especial" value={formData.poderEspecial} />

        <label htmlFor="timeTorce">Time que torce:</label>
        <input type="text" id="timeTorce" name="timeTorce" placeholder="Nome do time" value={formData.timeTorce} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioPerfil;

