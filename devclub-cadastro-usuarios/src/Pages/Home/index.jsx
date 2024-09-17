import './style.css'
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

    }


  ]





  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' />
        <input name='idade' type='number' />
        <input name='email' type='email' />
        <button type='button'>Cadastrar</button>

      </form>

      {users.map(user => (

        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
            <button>
              <img src={Trash} />
            </button>
          </div>
          </div>


      ))}


        </div>

      )}

      export default Home
