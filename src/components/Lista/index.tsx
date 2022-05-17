import { ITarefa } from '../../types/ITarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
  tarefas: Array<ITarefa>,
  selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionarTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <ul>
        {tarefas.map((item => (
          <Item
            selecionarTarefa={selecionarTarefa}
            key={item.id}
            {...item}
          />
        )))}
      </ul>
    </aside>
  )
}

export default Lista;