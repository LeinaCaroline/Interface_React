import './style.css'
import '../../App'
import Trash from '../../assets/trash.png'
import api from '../../services/Api'
import { useEffect, useState, useRef } from 'react'



function Home() {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data)

  }

  async function createUsers() {

    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value


    })

    getUsers() //carregando uma pessoa na tela


  }




  async function deleteUsers(id) {

    await api.delete(`/usuarios/${id}`)

         getUsers() //carregando uma pessoa na tela
  }




  useEffect(() => {
    getUsers()
  }, [])


  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name='nome' type='text' ref={inputName} />
        <input placeholder="Idade" age='idade' type='number' ref={inputAge} />
        <input placeholder="E-mail" email='email' type='email' ref={inputEmail} />
        <button type='button' onClick={createUsers}>Cadastrar</button>

      </form>

      {users.map(user => (

        <div key={user.id}>
          <div className='card'>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
            <button onClick={() => deleteUsers(user.id)}>
              <img src={Trash} />
            </button>
          </div>
        </div>


      ))}


    </div>

  )
}

export default Home
