import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss'

class Formulario extends React.Component {
  state = {
    tarefa: "",
    tempo: "0:00:00"
  }

  enviarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    console.log('state:', this.state);
    
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.enviarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={evento => this.setState({
              ...this.state,
              tarefa: evento.target.value
            })}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={evento => this.setState({
              ...this.state,
              tempo: evento.target.value
            })}
            id="tempo"
            min="00:00:00"
            max="06:00:00"
            required
          />
        </div>
        <Botao>
          enviar
        </Botao>
      </form>
    )
  }
}

export default Formulario;