export class LinkedList<TElement> {
  private list: Array<TElement> = []
  public push(element: TElement) {
    this.list.push(element)
  }

  public pop(): TElement | undefined {
    return this.list.pop()
  }

  public shift(): TElement | undefined {
    return this.list.shift()
  }

  public unshift(element: TElement) {
    this.list.unshift(element)
  }

  public delete(element: TElement) {
    const i = this.list.indexOf(element);
    if (i === -1) {return}
    this.list.splice(i, 1)
  }

  public count(): number {
    return this.list.length
  }
}
