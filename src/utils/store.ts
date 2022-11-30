import { writable } from 'svelte/store'
import type { ComponentDef, VariableDef } from '../vite-env'


export interface StoreData {
	variables: VariableDef[],
	components: ComponentDef[]
}

const store = writable<StoreData>()
export default store
