import { createInstance } from "localforage";
import { v4 } from "uuid";

const dbName = "medication-calendar";

export interface Entity {
  id: string;
}

export interface RepositoryConfig {
  storeName: string;
}

export default class Repository<T extends Partial<Entity>> {
  readonly #store: LocalForage;

  constructor({ storeName }: RepositoryConfig) {
    this.#store = createInstance({ name: dbName, storeName });
  }

  async remove(item: T): Promise<void> {
    if (!item.id) {
      return;
    }
    await this.#store.removeItem(item.id);
  }

  async save(item: T): Promise<void> {
    if (!item.id) {
      item.id = v4();
    }
    await this.#store.setItem(item.id, item);
  }

  async getAll(): Promise<(T & Entity)[]> {
    const items: (T & Entity)[] = [];
    await this.#store.iterate<T & Entity, void>((value) => {
      items.push(value);
    });
    return items;
  }
}
