class Sorter {
  constructor() {
    this.arr = [];
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices = indices.sort(this.compareFunction);
    for(let i = 0; i < this.arr.length; i++) {
      for(let j = 0; j <  indices.length; j++) {
        if (this.arr[indices[j]] > this.arr[indices[j+1]]) {
          [this.arr[indices[j]], this.arr[indices[j + 1]]] = [this.arr[indices[j + 1]], this.arr[indices[j]]];
        }
      }
    }
    console.log(this.arr)
    return this.arr;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;