import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore'

import { db } from '@/plugins/firebase'
import { Event } from '@/interfaces'
import { User } from 'firebase/auth'

const resource = collection(db, 'events')

export default {
  add: (event: Event) => {
    return event.id
      ? setDoc(doc(db, 'events', event.id), event)
      : addDoc(resource, event)
  },

  // list: async (user: User): Promise<Event[]> => {
  //   if (!user) return []
  //
  //   const projects = []
  //   const results = await getDocs(
  //     query(resource, where('userId', '==', user.uid)),
  //   )
  //   results.forEach((doc) =>
  //     projects.push({
  //       id: doc.id,
  //       ...doc.data(),
  //     } as Project),
  //   )
  //
  //   return projects
  // },
  //
  // show: async (projectId: string): Promise<Project | null> => {
  //   const docRef = doc(db, 'projects', projectId)
  //   const docSnap = await getDoc(docRef)
  //   return docSnap.exists()
  //     ? ({ id: docSnap.id, ...docSnap.data() } as Project)
  //     : null
  // },

  // delete: (projectId: string): Promise<void> => {
  //   return deleteDoc(doc(resource, projectId))
  // },
}
