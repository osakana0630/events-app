import AuthRepository from '@/resources/repositories/AuthRepository'
import EventRepository from '@/resources/repositories/EventRepository'

interface RepositoryCollection {
  auth: typeof AuthRepository
  event: typeof EventRepository
}

interface RepositoryFactory {
  get<T extends keyof RepositoryCollection>(
    repoName: T,
  ): RepositoryCollection[T]
}

const repositories = {
  auth: AuthRepository,
  event: EventRepository,
}

export default {
  get: (key: string) => repositories[key],
} as RepositoryFactory
