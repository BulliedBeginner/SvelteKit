import { supabase } from "../database/supabase"
import { writable } from "svelte/store"
export let todos = writable([])

export const loadTodo = async () => {
	const {data, error} = await supabase
		.from('Todos')
		.select()
	
	if (error) return console.error(error)
	todos.set(data)
}

export const addTodo = async (title : string, description : string) => {
	const {error} = await supabase
		.from('Todos')
		.insert([{title, description}])
	
	if (error) return console.error(error)
	todos.update((cur) : [] => [...cur, {title: title, description: description}]);
}
