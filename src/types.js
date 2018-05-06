// @flow
type File = {
  path: {
    traverse: Function,
  },
}

export type State = {
  file: File,
  opts: {
    idHash?: string,
  },
}
