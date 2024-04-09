import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:9009/acme/auth'

export function useAuth(redirect) {

}

export function useInput(name, initialValue = '') {
    const [value, setValue] = useState(initialValue)

    const onChange = e => setValue(e.target.value)

    return {name, value, onChange}
}