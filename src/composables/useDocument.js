import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useDocument = (collection, id) => {
  const error = ref(null)
  const isLoading = ref(false)

  let docRef = projectFirestore.collection(collection).doc(id)

  const deleteDoc = async () => {
    isLoading.value = true
    error.value = null

    try {
      const res = await docRef.delete()
      isLoading.value = false
      return res
    } catch (error) {
      console.log(error.message)
      error.value = 'could not delete the document'
      isLoading.value = false
    }
  }

  const updateDoc = async (updates) => {
    isLoading.value = true
    error.value = null

    try {
      const res = await docRef.update(updates)
      isLoading.value = false
      return res
    } catch (error) {
      console.log(error.message)
      error.value = 'could not update the document'
      isLoading.value = false
    }
  }

  return { error, isLoading, deleteDoc, updateDoc }
}

export default useDocument
