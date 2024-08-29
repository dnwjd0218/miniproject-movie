import { useState, useEffect } from "react"

function useDebounce(value, delay){
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        },delay)

        return() => {
            clearTimeout(handler)
        }
    },[value, delay])
console.log(debounceValue)
    return debounceValue
}


export default useDebounce