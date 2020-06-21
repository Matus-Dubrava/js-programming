import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
		super();
	}

	get length(): number {
		return this.data.length;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		if (this.data[leftIndex] > this.data[rightIndex]) {
			return true;
		} else {
			return false;
		}
	}

	swap(leftIndex: number, rightIndex: number): void {
		const temp = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = temp;
	}
}
