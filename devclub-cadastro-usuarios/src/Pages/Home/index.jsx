import './style.css'
import '../../App'
import Trash from '../../assets/trash.png'


function Home() {

  const users = [
    {
      id: 'f5f5f5fvf5vfvf',
      name: 'Mariana Chaves',
      age: 33,
      email: 'Mar@email.com'


    },
    {
      id: 'gegd5gdg5dgf',
      name: 'Helena Soares',
      age: 29,
      email: 'Hele@email.com'

    },
    {
      id: 'kjkfdg5454hffgh',
      name: 'Luiza Rosa',
      age: 18,
      email: 'LuRosa@email.com'

    }


  ]





  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name='nome' type='text' />
        <input placeholder="Idade" age='idade' type='number' />
        <input placeholder="E-mail" email='email' type='email' />
        <button type='button'>Cadastrar</button>

      </form>

      {users.map(user => (

        <div key={user.id}>
          <div className='card'>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <button>
              <img src={Trash} />
            </button>
          </div>
        </div>


      ))}


    </div>

  )
}

export default Home
