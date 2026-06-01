import { getCollection, type CollectionEntry } from 'astro:content';

type Person = CollectionEntry<'people'>;

/** All people, sorted by generation then name. */
export async function getAllPeople(): Promise<Person[]> {
  const people = await getCollection('people');
  return people.sort((a, b) => {
    const ga = a.data.generation ?? 99;
    const gb = b.data.generation ?? 99;
    if (ga !== gb) return ga - gb;
    return a.data.name.localeCompare(b.data.name);
  });
}

/** Children of `person` — derived by reverse lookup on `parents`. */
export async function childrenOf(person: Person): Promise<Person[]> {
  const all = await getCollection('people');
  return all.filter((p) => p.data.parents.some((ref) => ref.id === person.id));
}

/** Siblings = anyone who shares at least one parent. */
export async function siblingsOf(person: Person): Promise<Person[]> {
  if (person.data.parents.length === 0) return [];
  const parentIds = new Set(person.data.parents.map((r) => r.id));
  const all = await getCollection('people');
  return all.filter(
    (p) =>
      p.id !== person.id &&
      p.data.parents.some((ref) => parentIds.has(ref.id))
  );
}

/** Resolve a list of person references to full entries (drops misses silently). */
export async function resolvePeople(
  refs: { id: string }[]
): Promise<Person[]> {
  if (refs.length === 0) return [];
  const all = await getCollection('people');
  const byId = new Map(all.map((p) => [p.id, p]));
  return refs.map((r) => byId.get(r.id)).filter((p): p is Person => Boolean(p));
}

/** Documents that mention this person (as author or in `people`). */
export async function documentsAbout(personId: string) {
  const docs = await getCollection('documents');
  return docs.filter(
    (d) =>
      d.data.author?.id === personId ||
      d.data.people.some((ref) => ref.id === personId)
  );
}

/** Artifacts that picture this person. */
export async function artifactsOf(personId: string) {
  const arts = await getCollection('artifacts');
  return arts.filter((a) => a.data.people.some((ref) => ref.id === personId));
}

/** Privacy: hide identifying detail for living people unless explicit override. */
export function publicDisplay(person: Person) {
  const d = person.data;
  if (d.living) {
    return {
      name: d.name,
      aka: undefined,
      birth: undefined,
      death: undefined,
      summary: undefined,
      living: true,
    };
  }
  return { ...d, living: false as const };
}
