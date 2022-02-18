import fs from 'fs';

interface IsFindable {
  id: string;
}

export class DataTool<T extends IsFindable> {
  private dataPath = 'data/devices.json';
  private data: T[] = [];

  constructor() {
    const file = JSON.parse(
      fs.readFileSync(this.dataPath, { encoding: 'utf-8' })
    );

    this.data = file.data;
  }

  public getAll(): T[] {
    return this.data;
  }

  public getById(id: string): T | null {
    const dataObject = this.data.find(x => x.id === id) || null;

    return dataObject;
  }
}
