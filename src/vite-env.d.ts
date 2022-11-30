/// <reference types="svelte" />
/// <reference types="vite/client" />

/**
 * Переменная страницы
 */
declare interface VariableDef {
	type: 'string' | 'number' | 'boolean',
	value: string | number | boolean
}

/**
 * Описание компонента
 */
export interface ComponentDef {

	/**
	 * От этой строки зависит, какой компонент будет загружен и виузализирован
	 */
	name: string,

	/**
	 * Пропсы компонента
	 */
	props: { [key: string]: any },

	/**
	 * Применяемые стили компонента
	 */
	style: CSSStyleDeclaration,

	/**
	 * Список дочерних компонентов
	 */
	children: ComponentDef[],
}
