import AuthRepository from './repositories/AuthRepository'

interface RepositoryCollection {
  auth: typeof AuthRepository
}

interface RepositoryFactory {
  get<T extends keyof RepositoryCollection>(
    repoName: T,
  ): RepositoryCollection[T]
}

const repositories = {
  auth: AuthRepository,
}

export default {
  get: (key: string) => repositories[key],
} as RepositoryFactory
