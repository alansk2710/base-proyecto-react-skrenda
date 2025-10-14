import { createContext, useContext, useState, useEffect } from "react"


const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  // 1. Estado de usuarios
  // Inicializamos vacío; luego lo cargamos de localStorage o mock
  const [users, setUsers] = useState([])

  // 2. Estado del usuario seleccionado
  const [selectedUser, setSelectedUser] = useState(null)

  // 3. Al montar el Provider, revisamos si hay usuarios guardados en localStorage
  //    - Si existen, los usamos
  //    - Si no existen, cargamos los mock iniciales
  useEffect(() => {
    const storedUsers = localStorage.getItem("users")

    if (storedUsers !== null) {
      setUsers(JSON.parse(storedUsers))
    } else {
      const initialUsers = [
        {
          id: 1,
          name: "Santiago Mendez",
          status: "online",
          lastSeen: "",
          messages: [
            { id: 1, text: "Hola, como estas?", time: "01:40" }
          ]
        },
        {
          id: 2,
          name: "Martin Rios",
          status: "offline",
          lastSeen: "1 hours ago",
          messages: [
            { id: 1, text: "Buenas, perdona que te moleste", time: "15:00" },
            { id: 2, text: "Necesitaria saber un presupuesto para arreglar la moto", time: "15:10" },
            { id: 3, text: "No regula bien y necesitaria hacerle un cambio de aceite", time: "15:20" }
          ]
        },
        {
          id: 3,
          name: "Daiana Benitez",
          status: "online",
          lastSeen: "",
          messages: [
            { id: 1, text: "Buenas", time: "19:00" },
            { id: 2, text: "Estas en tu casa?", time: "19:01" }
          ]
        },
        {
          id: 4,
          name: "Raul Gonzalez Blanco",
          status: "offline",
          lastSeen: "1 minute ago",
          messages: [
            { id: 1, text: "Estoy ocupado haciendo un trabajo, después te mando...", time: "18:59" }
          ]
        }
      ]
      setUsers(initialUsers)
      // Actualizamos la lista de usuarios en el localstorage
      localStorage.setItem("users", JSON.stringify(initialUsers))
    }
  }, [])

  // 4. Cada vez que `users` cambie, sincronizamos con localStorage
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users))
    }
  }, [users])

  return (
    <ChatContext.Provider value={{ users, setUsers, selectedUser, setSelectedUser }}>
      {children}
    </ChatContext.Provider>
  )
}

const useChat = () => useContext(ChatContext)

export { useChat, ChatProvider }
