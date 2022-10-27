import { useContext } from 'react'
import { ConnectionContext } from '../components/ConnectionProvider'

export const useConnectionContext = () => useContext(ConnectionContext)
