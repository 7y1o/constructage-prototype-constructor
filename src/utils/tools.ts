/**
 * Класс, обозначающий элемент для панели инструментов (компонент Toolbar)
 */
export default abstract class Tool {
	/**
	 * Название инструмента
	 * @protected
	 */
	protected name: string
	public get Name() { return this.name }

	/**
	 * Описание инструмента
	 * @protected
	 */
	protected description: string
	public get Description() { return this.description }

	/**
	 * Список свойств инструмента
	 * @protected
	 */
	protected properties: { [key: string]: any }
	public get Properties() { return this.properties }

	/**
	 * Использование инструмента
	 */
	public abstract OnUse();
}
