export interface RootCatalog {
  catalog: Catalog;
}

export interface Catalog {
  uuid: string;
  metadata: Metadata;
  groups: Group[];
  'back-matter': BackMatter;
}

export interface Metadata {
  title: string;
  'last-modified': string;
  version: string;
  'oscal-version': string;
  props: Prop[];
  links: Link[];
  roles: Role[];
  parties: Party[];
  'responsible-parties': ResponsibleParty[];
}

export interface Prop {
  name: string;
  value: string;
  class?: string;
  ns?: string;
}

export interface Link {
  href: string;
  rel: string;
}

export interface Role {
  id: string;
  title: string;
}

export interface Party {
  uuid: string;
  type: string;
  name: string;
  'email-addresses': string[];
  addresses: Address[];
}

export interface Address {
  'addr-lines': string[];
  city: string;
  state: string;
  'postal-code': string;
}

export interface ResponsibleParty {
  'role-id': string;
  'party-uuids': string[];
}

export interface Group {
  id: string;
  class: string;
  title: string;
  controls: Control[];
  parts?: Part[];
}

export interface Control {
  id: string;
  class: string;
  title: string;
  params?: Param[];
  props: Prop[];
  links?: Link[];
  parts?: Part[];
  controls?: Control[];
}

export interface Param {
  id: string;
  props: Prop[];
  label?: string;
  guidelines?: Guideline[];
  select?: Select;
}

export interface Guideline {
  prose: string;
}

export interface Select {
  'how-many'?: string;
  choice: string[];
}

export interface Part {
  id: string;
  name: string;
  parts?: Part[];
  prose?: string;
  props?: Prop[];
}

export interface BackMatter {
  resources: Resource[];
}

export interface Resource {
  uuid: string;
  title: string;
  citation?: Citation;
  rlinks?: Rlink[];
}

export interface Citation {
  text: string;
}

export interface Rlink {
  href: string;
  'media-type'?: string;
}
