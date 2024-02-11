import { useId } from 'react'
import { useFilters } from '../../Hooks/useFilters'
import './Filters.css'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const pagesFilterId = useId()
  const gnreFilterId = useId()

  const handleChangePages = (event) => {
    setFilters(prevState => ({
      ...prevState,
      pages: event.target.value
    }))
  }

  const handleChangeGnre = (event) => {
    setFilters(prevState => ({
      ...prevState,
      genre: event.target.value
    }))
  }

  return (
    <section>

    <div className='range-container'>
      <label htmlFor={pagesFilterId}>Numero de paginas</label>
      <input
        type='range'
        id={pagesFilterId}
        min='0'
        max='1200'
        onChange={handleChangePages}
        value={filters.pages}
      />
      <span>{filters.pages} - 1200</span>
    </div>


      <div className=''>
        <label htmlFor={gnreFilterId}>Filtrar por genero</label>
        <select id={gnreFilterId} onChange={handleChangeGnre}>
          <option value='all'>Todos</option>
          <option value='Fantasía'>Fantasía</option>
          <option value='Ciencia ficción'>Ciencia ficción</option>
          <option value='Zombies'>Zombies</option>
          <option value='Terror'>Terror</option>
        </select>
      </div>

    </section>

  )
}
