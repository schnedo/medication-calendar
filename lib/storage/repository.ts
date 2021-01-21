import { createInstance } from "localforage";
import { v4 } from "uuid";

const dbName = "medication-calendar";

export interface Entity {
  id: string;
}

function addId<T extends Record<string, unknown>>(item: T): T & Entity {
  return item.id ? (item as T & Entity) : { ...item, id: v4() };
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

  async save(item: T): Promise<T & Entity> {
    const withId = addId(item);
    await this.#store.setItem(withId.id, withId);
    return withId;
  }

  async getAll(): Promise<(T & Entity)[]> {
    const items: (T & Entity)[] = [];
    await this.#store.iterate<T & Entity, void>((value) => {
      items.push(value);
    });
    return items;
  }
}
